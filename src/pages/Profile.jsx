import React from "react";
import styled from "styled-components";
import profileImg from "../images/profileImg.png";
import profileObj from "../images/profileRotate.svg";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 3;
`;

const MainProfile = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  margin: 5% 5%;
`;

const ProfileImg = styled.div`
  width: 360px;
  height: 360px;
  z-index: 3;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProfileDesc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  transform: translateX(-60px);
  z-index: 3;
  p {
    width: 100%;
    font-size: 3rem;
    font-family: "pretendard";
    font-weight: 700;
    margin-bottom: 10px;
  }
  span {
    font-size: 2.4rem;
    font-family: "pretendard";
    font-weight: 600;
    color: #909090;
  }
`;

const SubProfile = styled.div``;

const Introduce = styled.div`
  h1 {
    font-size: 3rem;
  }
  p {
    font-size: 2rem;
    color: #909090;
  }
`;

const Education = styled.div``;

const Award = styled.div``;

const Profile = () => {
  return (
    <Container>
      <MainProfile>
        <ProfileImg>
          <img src={profileImg} />
        </ProfileImg>
        <ProfileDesc>
          <p>자기소개 한마디</p>
          <span>완벽하고 솔직하게, 직관적이고 매력적인 UI를 설계합니다.</span>
        </ProfileDesc>
      </MainProfile>
      <SubProfile>
        <Introduce>
          <h1>Introduce</h1>
          <p>김다예 Kim Da Ye</p>
          <p>2001.10.30</p>
          <p>INFP</p>
        </Introduce>
        <Education></Education>
        <Award></Award>
      </SubProfile>
    </Container>
  );
};

export default Profile;
