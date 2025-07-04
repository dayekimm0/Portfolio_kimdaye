import React from "react";
import styled from "styled-components";
import ScrollSections from "../Components/ScrollSections";

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

const TeamProject = () => {
  return (
    <Container>
      <ScrollSections />
    </Container>
  );
};

export default TeamProject;
