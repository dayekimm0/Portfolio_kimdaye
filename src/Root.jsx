import GlobalStyles from "./styles/GlobalStyles.styles";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import Lenis from "lenis";
import Intro from "./pages/Intro";
import SkillPart from "./pages/SkillPart";
import ProjectPart from "./pages/ProjectPart";
import Profile from "./pages/Profile";
import CustomCursor from "./Components/CustomCursor";

function Root() {
  useEffect(() => {
    const lenis = new Lenis();

    const foldIfScrolled = (scroll) => {
      if (scroll > 100) {
        console.log("Scrolled past 100px");
      }
    };

    const handleScroll = ({ scroll }) => {
      foldIfScrolled(scroll);
    };

    lenis.on("scroll", handleScroll);

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => {
      lenis.off("scroll", handleScroll);
      lenis.stop();
    };
  }, []);

  return (
    <>
      <CustomCursor />
      <GlobalStyles />
      <Intro />
      <Profile />
      <SkillPart />
      <ProjectPart />
      <Outlet />
    </>
  );
}

export default Root;
