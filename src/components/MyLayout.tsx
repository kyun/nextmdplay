import React from "react";
import styled from "@emotion/styled";
import HakunaLogo from './HakunaLogo';


const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  background-color: #222;
  width: 100%;
  height: 70px;
`;
const InnerHeader = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  max-width: 1280px;
  width: 100%;
  margin: auto;
  padding: 0 16px;
`;

const Main = styled.main`
  max-width: 1280px;
  width: 100%;
  background: #fff;
  margin: auto;
  padding: 0 16px;
    padding-top: calc(70px + 0px);


`;
const MyLayout: React.FC<any> = ({ children}) => {
  
  return (
    <div style={{background: '#f9f9f9'}}>
      <Header>
        <InnerHeader>
          <HakunaLogo fill="#fff"  />
        </InnerHeader>
      </Header>
      <Main>{
      children
      }</Main>
    </div>
  )
}

export default MyLayout;