import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

// Glow 효과
const GlowCursor = () => {
  const glowRef = useRef(null);

  useEffect(() => {
    const moveGlow = (e) => {
      gsap.to(glowRef.current, {
        x: e.clientX - 150,
        y: e.clientY - 150,
        duration: 0.3,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", moveGlow);
    return () => window.removeEventListener("mousemove", moveGlow);
  }, []);

  return (
    <div
      ref={glowRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "300px",
        height: "300px",
        borderRadius: "50%",
        background: "radial-gradient(circle, #b1d4ff, rgba(0,0,0,0))",
        pointerEvents: "none",
        zIndex: 9999, // 커서보다 뒤에 와야 함!
        filter: "blur(80px)",
        opacity: 0.7,
        mixBlendMode: "screen",
      }}
    />
  );
};

export default GlowCursor;
