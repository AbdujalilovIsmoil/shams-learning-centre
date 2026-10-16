
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

  /* Faqat ekran o'qish dasturlari uchun ko'rinadigan matn */
  .sr-only {
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }

  /* Klaviatura foydalanuvchilari uchun "asosiy mazmunga o'tish" havolasi */
  .skip-link {
    top: -100px;
    left: 16px;
    z-index: 10000;
    position: fixed;
    font-weight: 600;
    padding: 12px 20px;
    border-radius: 8px;
    color: #ffffff;
    background-color: #0e192d;
    transition: top 0.15s ease;

    &:focus {
      top: 12px;
    }
  }

  main:focus {
    outline: none;
  }

  /* Harakatni kamaytirishni so'ragan foydalanuvchilar uchun animatsiyalar o'chiriladi */
  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }

    [data-aos] {
      opacity: 1 !important;
      transform: none !important;
      transition: none !important;
    }
  }
`;
