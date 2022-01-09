import type { GetStaticProps, NextPage } from "next";
import DocumentLayout from "../src/components/DocumentLayout";
import ReactMarkdown from "react-markdown";
import React from "react";
import { NormalComponents } from "react-markdown/lib/complex-types";
import { SpecialComponents } from "react-markdown/lib/ast-to-react";
import styled from "@emotion/styled";

const mdComp: Partial<
  Omit<NormalComponents, keyof SpecialComponents> & SpecialComponents
> = {
  h1: ({ node, ...props }) => <h1 className="md-h1" {...props} />,
  h2: ({ node, ...props }) => {
    // setArr((prev) => prev.concat(node));
    // setArr((prev) => prev + 1);
    return (
      <h2
        className="md-h2"
        id={"h2-" + node.position?.start.offset}
        {...props}
      />
    );
  },
  h3: ({ node, ...props }) => <h3 className="md-h3" {...props} />,
  h4: ({ node, ...props }) => <h4 className="md-h4" {...props} />,
  p: ({ node, ...props }) => <p className="md-p" {...props} />,
  hr: ({ node, ...props }) => <hr className="md-hr" {...props} />,
};

const Progress = styled.div`
  background-color: #feca00;
  position: fixed;
  height: 2px;
  top: 0;
  left: 0;
  z-index: 10;
`;
const ReadingProgress = ({ target }) => {
  const [readingProgress, setReadingProgress] = React.useState(0);
  const scrollListener = () => {
    if (!target.current) {
      return;
    }

    const element = target.current;
    const totalHeight =
      element.clientHeight - element.offsetTop - window.innerHeight;
    const windowScrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    if (windowScrollTop === 0) {
      return setReadingProgress(0);
    }

    if (windowScrollTop > totalHeight) {
      return setReadingProgress(100);
    }

    setReadingProgress((windowScrollTop / totalHeight) * 100);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", scrollListener);
    return () => window.removeEventListener("scroll", scrollListener);
  });

  return (
    <Progress
      className={`reading-progress-bar`}
      style={{ width: `${readingProgress}%` }}
    />
  );
};
const Styled: NextPage = ({ text }) => {
  const target = React.createRef();

  return (
    <DocumentLayout>
      <>
        <ReadingProgress target={target} />
        <div ref={target}>
          <ReactMarkdown
            components={mdComp}
            children={text}
            sourcePos
            includeElementIndex
            linkTarget={"_blank"}
          />
        </div>
      </>
    </DocumentLayout>
  );
};

export default Styled;
export const getStaticProps: GetStaticProps = async (ctx: any) => {
  console.log(ctx);
  const text = await fetch("http://localhost:3000/markdown/test.md").then(
    async (res) => {
      return await res.text();
    }
  );
  console.log(text);
  return {
    props: {
      text,
    },
  };
};
