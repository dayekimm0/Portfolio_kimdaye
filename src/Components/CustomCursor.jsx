import React, { useEffect, useRef } from "react";
import styled from "styled-components";

// 대비되는 색 계산 함수 (YIQ 방식)
const getContrastColor = (rgbColor) => {
  const rgb = rgbColor.match(/\d+/g).map(Number);
  const [r, g, b] = rgb;
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? "black" : "white";
};

const CursorDot = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  pointer-events: none;
  z-index: 10000;
  background: var(--light);
  transition: background-color 0.2s ease, transform 0.1s ease;
`;

const CustomCursor = () => {
  const dotRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX, clientY } = e;

      if (dotRef.current) {
        // 커서 위치 이동
        dotRef.current.style.transform = `translate3d(${clientX - 10}px, ${
          clientY - 10
        }px, 0)`;

        // 커서 아래 요소의 배경색 추출
        const el = document.elementFromPoint(clientX, clientY);
        if (el) {
          const bgColor = window.getComputedStyle(el).backgroundColor;
          const contrastColor = getContrastColor(bgColor);
          dotRef.current.style.backgroundColor = contrastColor;
        }
      }
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return <CursorDot ref={dotRef} />;
};

export default CustomCursor;
