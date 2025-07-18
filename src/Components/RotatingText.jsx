import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";

const CircleContainer = styled.div`
  position: absolute;
  bottom: 200px;
  right: 120px;
  width: 340px;
  height: 340px;
  pointer-events: none;
  z-index: 100;
`;

const Letter = styled.span`
  position: absolute;
  font-size: 24px;
  font-weight: bold;
  color: #000;
  user-select: none;
`;

const RotatingText = () => {
  const containerRef = useRef(null);

  const words = ["FRONTEND", "DEVELOPER", "KIMDAYE"];
  const radius = 130;

  const gapDegree = 15; // 단어 사이 각도 여백 (도)
  const totalGap = gapDegree * words.length; // 총 여백 (45도)
  const segmentAngle = ((360 - totalGap) / words.length) * (Math.PI / 180); // 라디안 단위 구간 각도
  const gapAngle = (gapDegree * Math.PI) / 180; // 라디안 단위 여백 각도

  useEffect(() => {
    if (!containerRef.current) return;
    const letters = containerRef.current.querySelectorAll("span");

    let letterIndex = 0;
    words.forEach((word, segmentIndex) => {
      const chars = word.split("");
      const charsCount = chars.length;

      // 단어 구간 시작 각도 (여백 포함)
      const segmentStartAngle = segmentIndex * (segmentAngle + gapAngle);
      const segmentEndAngle = segmentStartAngle + segmentAngle;
      const segmentRange = segmentEndAngle - segmentStartAngle;

      // 단어 내부 글자 각도 간격
      const angleStep = charsCount > 1 ? segmentRange / (charsCount - 1) : 0;

      chars.forEach((char, i) => {
        const angle = segmentStartAngle + angleStep * i;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);

        const el = letters[letterIndex];
        letterIndex++;

        gsap.set(el, {
          x: x + 160,
          y: y + 160,
          rotation: (angle * 180) / Math.PI + 90,
        });
      });
    });

    gsap.to(containerRef.current, {
      rotate: 360,
      duration: 10,
      ease: "linear",
      repeat: -1,
    });
  }, []);

  return (
    <CircleContainer ref={containerRef}>
      {[...words.join("")].map((char, i) => (
        <Letter key={i}>{char}</Letter>
      ))}
    </CircleContainer>
  );
};

export default RotatingText;
