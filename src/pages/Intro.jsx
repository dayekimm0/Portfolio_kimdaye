import React, { useRef } from "react";
import styled from "styled-components";
import GlowCursor from "../Components/GlowCursor";
import BounceImg from "../Components/BounceImg";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: var(--dark);
  position: relative;
`;

const Title = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  h1 {
    width: 100%;
    font-size: 26rem;
    color: var(--light);
    font-weight: 600;
    line-height: 200px;
    letter-spacing: 10px;
    font-family: "unbounded";
    position: relative;
    &:nth-child(2) {
      display: flex;
      justify-content: end;
      align-items: center;
    }
  }
`;

const LeftO = styled.span`
  width: fit-content;
`;

const SubTitle = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  bottom: 5%;
  padding: 0 2%;
  p {
    font-size: 3rem;
    color: var(--light);
  }
`;

const Intro = () => {
  const portfolioRef = useRef(null);
  const leftORef = useRef(null);

  return (
    <Container>
      <GlowCursor />
      <BounceImg portfolioRef={portfolioRef} leftORef={leftORef} />
      <Title ref={portfolioRef}>
        <h1>
          P<LeftO ref={leftORef}>O</LeftO>RT
        </h1>
        <h1>FOLIO</h1>
      </Title>
      <SubTitle>
        <p>© 2025 KimDaye</p>
        <p>FrontEnd Developer</p>
      </SubTitle>
    </Container>
  );
};

export default Intro;
