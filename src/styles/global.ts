import { FontWeight } from "src/interfaces/common.interfaces";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }
  html {
    scroll-behavior: smooth;
  }
  html,
  body {
    background: var(--color-bg);
    color: var(--color-text);
    font-family: "Source Sans 3", sans-serif;
    font-weight: ${FontWeight.Regular};
    font-size: 16px;
    transition: background 0.2s linear;
  }
  body {
    line-height: 1;
  }
  img {
    max-width: 100%;
  }
  a {
    color: var(--color-text);
    font-family: inherit;
    text-decoration: underline;
    font-weight: ${FontWeight.Regular};

    &:hover {
      background-color: var(--color-text);
      text-decoration: none;
      color: var(--color-bg);
      cursor: pointer;
    }

    &:focus {
      background-color: var(--color-text);
      text-decoration: none;
      color: var(--color-bg);
    }
  }
  [hidden], .hidden {
    display: none;
  }
  strong, b {
    font-weight: ${FontWeight.Bold};
  }
  h1, h2, h3 {
    font-family: 'Belanosima', sans-serif;
  } 
  .wavy {
    text-decoration: underline wavy var(--colors-forest);
  }
  .swiper, .swiper-wrapper {
    max-width: 100%;
  }
  .detail-where img {
    width: 100%;
    border: 16px solid rgba(255,255,255, 0.1);
  }
  ul {
    padding: 0 0 1.5em 2em;
    line-height: 1.2;
  }
`;
