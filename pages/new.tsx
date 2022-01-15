import type { GetStaticProps, NextPage } from "next";
import React from "react";
import ReactMarkdown from 'react-markdown';
import MyLayout from '../src/components/MyLayout';
import { NormalComponents } from "react-markdown/lib/complex-types";
import { SpecialComponents } from "react-markdown/lib/ast-to-react";

const mdComp: Partial<
  Omit<NormalComponents, keyof SpecialComponents> & SpecialComponents
> = {
  h1: ({ node, ...props }) => {
    console.log(node);
    return <h1 className="md-h1" {...props} />;
  },
  h2: ({ node, ...props }) => {
    // setArr((prev) => prev.concat(node));
    // setArr((prev) => prev + 1);
    // console.log(node);
    return (
      <h2
        className="md-h2"
        // id={"h2-" + node.position?.start.offset}
        {...props}
      />
    );
  },
  h3: ({ node, ...props }) => <h3 className="md-h3" {...props} />,
  h4: ({ node, ...props }) => <h4 className="md-h4" {...props} />,
  p: ({ node, ...props }) => <p className="md-p" {...props} />,
  hr: ({ node, ...props }) => <hr className="md-hr" {...props} />,
};
const NewPage: NextPage = ({ text }: any) => {
  
  return (
    <MyLayout>
      <ReactMarkdown components={mdComp}>
        {text}
      </ReactMarkdown>
    </MyLayout>
  )
}

export default NewPage;

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
