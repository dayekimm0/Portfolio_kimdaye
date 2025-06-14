import React from "react";
import styled from "styled-components";
import TeamProject from "./TeamProject";

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

const ProjectPart = () => {
  return (
    <Container>
      <TeamProject />
    </Container>
  );
};

export default ProjectPart;
