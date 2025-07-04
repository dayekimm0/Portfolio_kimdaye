import React from "react";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Wrapper = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
`;

const RotatingCircle = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  animation: ${rotate} 20s linear infinite; /* 속도 조절 가능 */
`;

const Char = styled.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform-origin: 0 0;
  font-size: 1.2rem;
  font-weight: bold;
  color: var(--main); // 색상 조절
  white-space: pre;
`;

const CircleText = ({ text = "CREATIVE UI DESIGN ✽ " }) => {
  const radius = 120; // 텍스트 원 반지름
  const chars = text.split("");

  return (
    <Wrapper>
      <RotatingCircle>
        {chars.map((char, i) => {
          const angle = (360 / chars.length) * i;
          return (
            <Char
              key={i}
              style={{
                transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`,
              }}
            >
              {char}
            </Char>
          );
        })}
      </RotatingCircle>
    </Wrapper>
  );
};

export default CircleText;
