"use client";

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }

  *:focus {
    outline-width: 3px;
    outline-offset: 3px;
    outline-style: solid;
    outline-color: #49BBBD;
  }

  html {
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  .container {
    width: 100%;
    margin: 0 auto;
    padding: 0 60px;
    max-width: 1920px;
    @media only screen and (max-width: 1440px) {
      padding: 0 20px;
    }

    @media only screen and (max-width: 480px) {
      padding: 0 10px;
    }
  }

  a {
    text-decoration: none;
  }

  ul,
  ol {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  img {
    width: 100%;
    height: auto;
    display: block;
    max-width: 100%;
  }

  body {
    overflow-x: hidden;
    font-family: ${({ theme }) => theme.font.poppins};
  }
`;
