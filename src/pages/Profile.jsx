import React from "react";
import styled from "styled-components";
import profileImg from "../images/profileImg.png";
import profileObj from "../images/profileRotate.svg";
import CircleText from "../Components/CircleText";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 3;
  position: relative;
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

const SubProfile = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 40px;
  position: absolute;
  right: 5%;
`;

const TopPart = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: start;
  div {
    h1 {
      font-size: 3rem;
      margin-bottom: 20px;
    }
    p {
      font-size: 2rem;
      color: var(--sub);
      margin-bottom: 10px;
      b {
        margin-right: 20px;
      }
    }
  }
`;

const Education = styled.div`
  h1 {
    font-size: 3rem;
    margin-bottom: 20px;
  }
  p {
    font-size: 2rem;
    color: var(--sub);
    margin-bottom: 10px;
    b {
      margin-right: 20px;
    }
  }
`;

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
        <TopPart>
          <div>
            <h1>Introduce</h1>
            <p>김다예 Kim Da Ye</p>
            <p>2001.10.30</p>
            <p>INFP</p>
          </div>
          <div>
            <h1>Award & Certificate</h1>
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
          </div>
        </TopPart>
        <Education>
          <h1>Education</h1>
          <p>
            <b>2025</b>
            UXUI디자인 웹 프론트엔드개발 부트캠프(생성형AI 활용/피그마) 수료
          </p>
          <p>
            <b>2024</b>
            [K-디지털] AWS 리눅스 기반 클라우드 데브옵스 기초 실무 과정 수료
          </p>
          <p>
            <b>2024</b>
            동서울대학교 IT융합학과(학사학위) 졸업
          </p>
          <p>
            <b>2023</b>
            동서울대학교 정보통신과 ICT융합전공 졸업
          </p>
          <p>
            <b>2020</b>
            건국대학교사범대학부속고등학교 졸업
          </p>
        </Education>
      </SubProfile>
      {/* <CircleText text="FrontEnd Developer Kim Daye" /> */}
    </Container>
  );
};

export default Profile;
