// Root.jsx

import { useEffect } from "react";
import GlobalStyles from "./styles/GlobalStyles.styles";
import { Outlet } from "react-router-dom";
import Lenis from "lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Intro from "./pages/Intro";
import Profile from "./pages/Profile";
import SkillPart from "./pages/SkillPart";
import ProjectPart from "./pages/ProjectPart";
import CustomCursor from "./Components/CustomCursor";
import styled from "styled-components";

gsap.registerPlugin(ScrollTrigger);

const Wrapper = styled.div.attrs({ className: "wrapper" })`
  background-color: #000;
  --text-color: #fff;
  --sub-text-color: #aaa;
  color: var(--text-color);
  transition: background-color 0.5s ease, color 0.5s ease;

  &.light {
    background-color: #fff;
    --text-color: #000;
    --sub-text-color: #555;
  }
`;

function Root() {
  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    // 한 번에 색 반전
    ScrollTrigger.create({
      trigger: "#profile",
      start: "top 80%", // 프로필이 화면에 80% 정도 들어왔을 때
      onEnter: () => {
        document.querySelector(".wrapper").classList.add("light");
      },
      onLeaveBack: () => {
        document.querySelector(".wrapper").classList.remove("light");
      },
    });

    return () => {
      ScrollTrigger.killAll();
      lenis.stop();
    };
  }, []);

  return (
    <>
      <CustomCursor />
      <GlobalStyles />
      <Wrapper>
        <Intro />
        <div id="profile">
          <Profile />
        </div>
        <SkillPart />
        <ProjectPart />
      </Wrapper>
      <Outlet />
    </>
  );
}

export default Root;
