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
    color: var(--sub);
  }
`;

const SubProfile = styled.div``;

const Introduce = styled.div`
  h1 {
    font-size: 3rem;
  }
  p {
    font-size: 2rem;
    color: var(--sub);
  }
`;

const Education = styled.div`
  h1 {
    font-size: 3rem;
  }
  p {
    font-size: 2rem;
    color: var(--sub);
  }
`;

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
        <Education>
          <h1>Education</h1>
          <p>
            <b>2023.11</b>
            ICT 창의 융합 캡스톤디자인 경진대회 산학협동상
          </p>
          <p>
            <b>2022.11</b>
            한국인터넷방송통신학회 국내 학술대회 우수논문상 (기능성 스마트
            창문제어 연구)
          </p>
          <p>
            <b>2022.07</b>
            인공지능전문가 자격증 (사)국제문화기술진흥원
          </p>
        </Education>
        <Award></Award>
      </SubProfile>
    </Container>
  );
};

export default Profile;
