import { createGlobalStyle } from "styled-components";

export const CSSRootVariables = createGlobalStyle`
  :root {
    --colors-gray: #7E888C;
    --colors-black: #393d3f;
    --colors-white: #fdfdff;
    --colors-silver: #c6c5b9;
    --colors-teal: #62929e;
    --colors-blue: #546a7b;
    --colors-green: hsla(145,55%,58%,1);
    --colors-red: hsla(350,95%,58%,0.83);
    --colors-purple: hsla(229,94%,76%,0.915);
    --colors-trueBlack: #000000;
    --colors-alphaBlack: rgba(0, 0, 0, 0.25);
    --sizing-mobilePadding: 2em;
    --sizing-desktopPadding: 5em;

    --color-text: var(--colors-white);
    --color-bg: var(--colors-trueBlack);
  }

  @media (prefers-color-scheme: light) {
    --color-text: var(--colors-trueBlack);
    --color-bg: var(--colors-white);
  }

  [data-theme="light"] {
    --color-text: var(--colors-trueBlack);
    --color-bg: var(--colors-white);
  }
`;
