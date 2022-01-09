import React from "react";
import styled from "@emotion/styled";

const HeaderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 200px;
  background-color: #222;
`;
const Header = styled.header`
  height: 80px;
  width: 100%;
  background-color: #222;
  position: fixed;
  top: 0;
  left: 0;

  @media (min-width: 768px) {
    height: 80px;
  }
  @media (min-width: 1280px) {
    height: 80px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  background: #ff0000;
  margin: auto;
  margin-top: 200px;
  max-width: calc(1280px + 360px);

  @media (min-width: 768px) {
    margin-top: 200px;
  }
  @media (min-width: 1280px) {
    margin-top: 200px;
  }
`;
const Nav = styled.nav`
  // position: fixed;
  min-width: 360px;
  width: 100%;
  @media (min-width: 768px) {
    min-width: 240px;
  }
  @media (min-width: 1280px) {
    min-width: 360px;
  }
  background: #fff;
  margin-top: 0px;
  @media (max-width: 768px) {
    display: none;
  }
  box-sizing: border-box;
`;
const NavContent = styled.ol`
  position: sticky;
  top: 200px;
  margin-top: 440px;
  width 100%;
  padding: 16px;
  box-sizing: border-box;
  list-style: none;
`;
const NavListItem = styled.li`
  & + & {
    margin-top: 8px;
  }
  ::marker {
  }
`;

const Main = styled.main`
  max-width: 1280px;
  height: 100%;
  background: #f9f9f9;
  margin: auto;
  padding: 0 16px;
  padding-bottom: 80px;
`;
const Footer = styled.footer`
  width: 100%;
  height: 200px;
  background: #222;
`;
const subtitle = [
  "제1장 총칙",
  "제2장 본 서비스 및 서비스 앱에 대한 소유권 및 관련 라이선스",
  "제3장 서비스 이용계약의 체결",
  "제4장 계약당사자의 권리의무",
  "제5장 서비스의 이용",
  "제6장 콘텐츠의 운영 및 이용",
  "제7장 서비스 이용과 관련된 제3자와의 관계",
  "제8장 서비스 해지 및 이용제한 등",
  "제9장 면책 및 보증제한 등",
  "제10장 약관의 해석, 준거법 및 분쟁해결",
];
const DocumentLayout: React.FC = ({ children }) => {
  function handle() {
    window.scrollTo({ top: 1000, behavior: "smooth" });
  }
  return (
    <div>
      <HeaderWrapper>
        <Header>123</Header>
      </HeaderWrapper>
      <Wrapper>
        <Nav>
          <NavContent>
            {subtitle.map((t, i) => {
              return (
                <NavListItem onClick={handle} key={i}>
                  <a href="#한국">{t}</a>
                </NavListItem>
              );
            })}
          </NavContent>
        </Nav>
        <Main>{children}</Main>
      </Wrapper>
      <Footer />
    </div>
  );
};

export default DocumentLayout;
