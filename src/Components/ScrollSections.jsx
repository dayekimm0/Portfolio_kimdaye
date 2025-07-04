import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import projectThumb1 from "../images/projectThumb1.png";

gsap.registerPlugin(ScrollTrigger);

const Section = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(4, 28, 15, 0.88); /* 초록색 반투명 오버레이 */
    pointer-events: none;
    z-index: 1;
  }
`;

const Thumbnail = styled.div`
  width: 1160px;
  border-radius: 16px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  position: absolute;
  z-index: 5;
  top: -100%; /* 처음엔 화면 위 */
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

const ScrollSections = () => {
  const thumbRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.to(thumbRef.current, {
      top: "50%",
      transform: "translate(-50%, -50%)",
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 10%",
        end: "top 0%",
        scrub: 10,
      },
    });
  }, []);

  return (
    <Section ref={sectionRef}>
      <img src={projectThumb1} alt="background" />
      <Thumbnail ref={thumbRef}>
        <img src={projectThumb1} alt="thumbnail" />
      </Thumbnail>
    </Section>
  );
};

export default ScrollSections;
