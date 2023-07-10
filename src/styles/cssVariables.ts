import { createGlobalStyle } from "styled-components";

export const CSSRootVariables = createGlobalStyle`
  :root {
    --colors-gray: #7E888C;
    --colors-black: #393d3f;
    --colors-white: #fdfdff;
    --colors-silver: #c6c5b9;
    --colors-forest: #014422;
    --colors-gold: #B8870F;
    --colors-trueBlack: #000000;
    --colors-alphaBlack: rgba(0, 0, 0, 0.25);
    --sizing-mobilePadding: 2em;
    --sizing-desktopPadding: 5em;

    --color-text: var(--colors-white);
    --color-bg: var(--colors-black);
  }

  @media (prefers-color-scheme: light) {
    --color-text: var(--colors-black);
    --color-bg: var(--colors-white);
  }

  [data-theme="light"] {
    --color-text: var(--colors-black);
    --color-bg: var(--colors-white);
  }
`;
