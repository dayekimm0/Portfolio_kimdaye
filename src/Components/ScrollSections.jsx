import React, { useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import projectThumb1 from "../images/projectThumb1.png";
import projectThumb2 from "../images/projectThumb2.png";
import projectThumb3 from "../images/projectThumb3.png";
import thumbBar from "../images/thumbBar.png";
import figmaIcon from "../images/figmaIcon.svg";
import htmlIcon from "../images/htmlIcon.svg";
import cssIcon from "../images/cssIcon.svg";
import jsIcon from "../images/jsIcon.svg";
import reactIcon from "../images/reactIcon.svg";

gsap.registerPlugin(ScrollTrigger);

const Section = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;

  .bg {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 1;
    pointer-events: none;
    background-color: rgba(4, 28, 15, 0.88);

    ${(props) =>
      props.$variant === 2 &&
      css`
        background-color: rgba(0, 0, 0, 0.88);
      `}
    ${(props) =>
      props.$variant === 3 &&
      css`
        background-color: rgba(8, 21, 44, 0.9);
      `}
  }
`;

const TopLabel = styled.div`
  position: absolute;
  top: 40px;
  left: 40px;
  font-size: 3rem;
  font-weight: 600;
  text-transform: uppercase;
  z-index: 4;
  color: var(--light);
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;
  z-index: 3;
`;

const ContentBox = styled.div`
  color: #fff;
  width: 800px;
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;

  h2 {
    font-size: 5.2rem;
    font-weight: 600;
    margin-bottom: 20px;
  }

  p {
    font-size: 2.4rem;
    line-height: 1.6;
    margin-bottom: 30px;
    white-space: pre-line;
  }

  .icon-group {
    display: flex;
    gap: 12px;
    margin-bottom: 30px;

    .icon {
      width: 90px;
      height: 90px;
    }
  }
`;

const MoreBtn = styled.button`
  background: transparent;
  border: none;
  color: #fff;
  font-size: 2.2rem;
  cursor: pointer;
  padding: 0;

  &:hover {
    opacity: 0.7;
  }
`;

const Thumbnail = styled.div`
  width: 1200px;
  border-radius: 16px;
  overflow: hidden;
  position: absolute;
  top: -100%;
  right: 5%;
  transform: translateY(-50%);
  z-index: 2;
  display: flex;
  flex-direction: column;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  line-height: 0;
  font-size: 0;

  .thumb-bar {
    width: 100%;
    display: block;
    margin: 0;
    padding: 0;
    border: none;
  }

  .thumb-main {
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    display: block;
    margin: 0;
    padding: 0;
  }
`;

const ScrollSections = () => {
  const sectionsRef = useRef([]);
  const thumbsRef = useRef([]);

  const projects = [
    {
      bg: projectThumb1,
      thumb: projectThumb1,
      overlay: 1,
      title: "YumFresh",
      desc: " 쿠팡의 메인 핵심 사업인 로켓프레시를 Yam Fresh라는 가상 브랜드 리뉴얼을 통해 기존 로켓프레시의 사용자들이 겪었던 불편을 해소하고 더 나은 UI/UX를 목적으로 기획하였습니다.",
      icons: [figmaIcon],
      moreLink:
        "https://www.figma.com/design/q91wZ0SUoKr2z21EFtaQGS/Project?node-id=1145-2465&t=phc4Uf1D4EJwh3BS-4",
    },
    {
      bg: projectThumb2,
      thumb: projectThumb2,
      overlay: 2,
      title: "BE :",
      desc: " BE는 국내 비건 시장의 성장과 소비자들의 비건 제품 및 브랜드에 대한 관심 증가에 따라 탄생한 웹사이트입니다.\n신뢰할 수 있는 비건 제품 정보를 제공하고, 다양한 브랜드를 소개하여 소비자들이 쉽게 접근할 수 있도록 돕는 것이 목표입니다.",
      icons: [figmaIcon, htmlIcon, cssIcon, jsIcon],
      moreLink: "https://vegan-beproject.netlify.app/",
    },
    {
      bg: projectThumb3,
      thumb: projectThumb3,
      overlay: 3,
      title: "WOOFY",
      desc: "프리미엄 반려동물 패션 편집샵 플랫폼 WOOFY\n흩어져 있어 찾기 어려운 반려동물 패션, 브랜드를 소개하며, 반려동물과 보호자 모두를 위한 스타일리시한 라이프스타일을 제안합니다. 단순한 쇼핑몰이 아닌 패션 브랜드와 아트워크 스토리가 결합된 라이프스타일 큐레이션 공간을 지향합니다.",
      icons: [figmaIcon, htmlIcon, cssIcon, jsIcon],
      moreLink: "https://wo0fy.netlify.app/",
    },
  ];

  useEffect(() => {
    sectionsRef.current.forEach((section, index) => {
      const thumb = thumbsRef.current[index];

      gsap.to(thumb, {
        top: "50%",
        transform: "translateY(-50%)",
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
        },
      });
    });
  }, []);

  return (
    <>
      {projects.map((project, i) => (
        <Section
          key={i}
          ref={(el) => (sectionsRef.current[i] = el)}
          $variant={project.overlay}
        >
          <img src={project.bg} alt={`background-${i}`} className="bg" />
          <TopLabel>Team Project</TopLabel>

          <ContentWrapper>
            <ContentBox>
              <h2>{project.title}</h2>
              <p>{project.desc}</p>

              <div className="icon-group">
                {project.icons.map((iconSrc, idx) => (
                  <img
                    key={idx}
                    src={iconSrc}
                    alt={`icon-${idx}`}
                    className="icon"
                  />
                ))}
              </div>

              <MoreBtn
                onClick={() => (window.location.href = project.moreLink)}
              >
                MORE &gt;
              </MoreBtn>
            </ContentBox>

            <Thumbnail ref={(el) => (thumbsRef.current[i] = el)}>
              <img src={thumbBar} alt="thumb-bar" className="thumb-bar" />
              <img
                src={project.thumb}
                alt={`thumbnail-${i}`}
                className="thumb-main"
              />
            </Thumbnail>
          </ContentWrapper>
        </Section>
      ))}
    </>
  );
};

export default ScrollSections;
