import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  ul, li {
    list-style: none;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }

  :root {
    --light: #fff;
    --dark: #000;
    --border: #ccc;
    --accent: ##b1d4ff;
    --sub: #909090;

  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: "Unbounded", "pretendard", sans-serif;
    font-size: 1.6rem;
    height: auto;
    overflow: hidden;
    cursor: none;
    background-color: #000;
    transition: background-color 0.5s ease;
  }
`;

export default GlobalStyles;
