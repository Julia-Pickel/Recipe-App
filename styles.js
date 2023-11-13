import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
    --primary-color: #FFBC0A;
    --secondary-color-grey: #252629;
    --primary-color-hover: #FFBC0A;
    --neutral-color: #E5E5E5;
  }

  html {
    font-family: Arial, sans-serif;
    font-size: 16px;
  }


  body {
    margin: 0;
    font-family: system-ui;
    height: 100vh;
    display: grid;
    grid-template-rows: 60px 1fr 60px;
  }

  ul {
  padding: 0;
  margin: 0;
  list-style: none;  
  }

  #__next {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    min-height: 100vh;
  }
`;

export const colors = {
  default: "var(--primary-color)",
  defaultHover: "var(--primary-color-hover)",
  danger: "var(--danger-color)",
  dangerHover: "var(--danger-color-hover)",
  neutral: "var(--neutral-color)",
  neutralHover: "var(--neutral-color-hover)",
};
