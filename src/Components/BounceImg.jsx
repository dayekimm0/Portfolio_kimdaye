import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import styled from "styled-components";
import introImg from "../images/intro.svg";

const SvgWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 100%;
  width: 300px;
  height: 300px;
  z-index: 2;
  img {
    width: 100%;
    height: 100%;
  }
  cursor: pointer;
`;

const BounceImg = ({ portfolioRef, leftORef }) => {
  const svgRef = useRef();
  const hoverAnim = useRef(null); // 회전 애니메이션 저장용

  useEffect(() => {
    if (!svgRef.current || !portfolioRef.current || !leftORef.current) return;

    const ball = svgRef.current;
    const portfolioRect = portfolioRef.current.getBoundingClientRect();
    const leftORect = leftORef.current.getBoundingClientRect();

    const screenWidth = window.innerWidth;

    gsap.set(ball, {
      x: 0,
      y: 0,
      top: portfolioRect.bottom + window.scrollY - 50,
    });

    const targetX = leftORect.left + leftORect.width / 2 - screenWidth;

    const tl = gsap.timeline();

    tl.to(ball, {
      duration: 2,
      x: targetX,
      rotation: 360 * 3,
      ease: "power2.inOut",
    })
      .to(ball, {
        duration: 0.3,
        y: "+=60",
        ease: "power1.in",
        repeat: 3,
        yoyo: true,
      })
      .to(ball, {
        duration: 0.5,
        x: `+=-180`,
        rotation: "+=180",
        ease: "power2.out",
      });

    return () => tl.kill();
  }, [portfolioRef, leftORef]);

  // 마우스 오버 시 회전 애니메이션
  const handleMouseEnter = () => {
    if (!svgRef.current) return;
    hoverAnim.current = gsap.to(svgRef.current, {
      rotation: "+=360",
      duration: 2,
      repeat: -1,
      ease: "linear",
    });
  };

  const handleMouseLeave = () => {
    if (hoverAnim.current) {
      hoverAnim.current.kill();
      hoverAnim.current = null;
    }
  };

  return (
    <SvgWrapper
      ref={svgRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={introImg} alt="bouncy svg" />
    </SvgWrapper>
  );
};

export default BounceImg;
