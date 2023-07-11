import { FontWeight } from "src/interfaces/common.interfaces";
import { device } from "src/styles/theme";
import styled, { css } from "styled-components";

interface AnimatedTextProps {
  $inView?: boolean;
  $delay?: number;
}

export const H1 = styled.h1<AnimatedTextProps>`
  font-size: 3.5rem;
  font-weight: ${FontWeight.Semibold};
  line-height: 1;

  @media ${device.tablet} {
    font-size: 6rem;
  }
`;

export const H2 = styled.h2<AnimatedTextProps>`
  font-size: 2rem;
  font-weight: ${FontWeight.Regular};
  line-height: 1.2;
  padding-bottom: 1.5rem;
  transform: translateY(1rem);
  transition:
    transform 0.75s ease-in-out ${({ $delay }) => `${$delay || 0}ms`},
    opacity 0.5s ease-in-out ${({ $delay }) => `${$delay || 0}ms`};
  opacity: 0;

  @media ${device.tablet} {
    font-size: 3rem;
  }

  ${({ $inView }) =>
    $inView &&
    css`
      transform: translateY(0);
      opacity: 1;
    `}
`;

export const HeroSubText = styled.p<AnimatedTextProps>`
  font-weight: ${FontWeight.Regular};
  line-height: 1.5;
  font-size: 1.25rem;

  @media ${device.tablet} {
    font-size: 1.5rem;
  }
`;

export const P = styled.p<AnimatedTextProps>`
  font-weight: ${FontWeight.Regular};
  font-family: "Source Sans 3", sans-serif;
  line-height: 1.5;
  padding-bottom: 1.5rem;
  font-size: 1.15rem;
  transform: translateY(1rem);
  transition:
    transform 0.75s ease-in-out ${({ $delay }) => `${$delay || 0}ms`},
    opacity 0.5s ease-in-out ${({ $delay }) => `${$delay || 0}ms`};
  opacity: 0;
  letter-spacing: 0.05em;

  ${({ $inView }) =>
    $inView &&
    css`
      transform: translateY(0);
      opacity: 1;
    `}

  &:empty {
    display: none;
    padding: 0;
  }
`;
