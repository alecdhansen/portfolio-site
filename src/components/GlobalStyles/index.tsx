import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle<{ theme: any }>`

  :root {
    font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    --svgfill: #212026;
    --light: rgb(255, 255, 255);
    --dark: #212026;
    --translucent: #ffffff00;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    background: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.color};
    transition: all 0.50s linear;
  }

  body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
  
}

h2 {
  color: ${({ theme }) => theme.color};
  transition: all 0.50s linear;
}

span {
  transition: all 0.50s linear;
}

a {
    color: ${({ theme }) => theme.color};
    font-weight: 500;
    text-decoration: inherit;
    transition: all 0.20s linear;
}

a:hover {
    transition: all 0.20s linear;
    color: ${({ theme }) => theme.textHoverColor};
}

svg {
  fill: ${({ theme }) => theme.backgroundColor};
  stroke: ${({ theme }) => theme.backgroundColor};
  transition: all 0.20s linear;
}
path {
  transition: all 0.20s linear;
}
g {
  fill: ${({ theme }) => theme.backgroundColor};
  transition: all 0.20s linear;
}
  `;
