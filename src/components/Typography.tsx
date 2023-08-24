import { FontWeight } from "src/interfaces/common.interfaces";
import { device } from "src/styles/theme";
import styled, { css } from "styled-components";

interface AnimatedTextProps {
  $inView?: boolean;
  $delay?: number;
}

export const H1 = styled.h1<AnimatedTextProps>`
  font-size: 3.75rem;
  font-weight: ${FontWeight.Semibold};
  line-height: 1;

  @media ${device.tablet} {
    font-size: 7rem;
  }
`;

export const H2 = styled.h2`
  font-size: 2.5rem;
  font-weight: ${FontWeight.Regular};
  line-height: 1.25;
  padding-bottom: 0;

  span {
    font-size: 0.9rem;
    font-weight: ${FontWeight.Regular};
    color: var(--colors-gold);
  }

  @media ${device.tablet} {
    font-size: 4rem;
  }
`;

export const AnimatedH2 = styled(H2)<AnimatedTextProps>`
  transform: translateY(1rem);
  transition:
    transform 0.75s ease-in-out ${({ $delay }) => `${$delay || 0}ms`},
    opacity 0.5s ease-in-out ${({ $delay }) => `${$delay || 0}ms`};
  opacity: 0;

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
  letter-spacing: 0.15rem;

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
    transform 0.75s ease-in-out
      ${({ $delay }) => `${$delay ? $delay * 250 : 0}ms`},
    opacity 0.5s ease-in-out ${({ $delay }) => `${$delay ? $delay * 250 : 0}ms`};
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

export const ButtonLink = styled.a`
  border: 2px solid white;
  padding: 1.25rem 1.75rem;
  color: var(--colors-white);
  text-decoration: none;

  &:hover {
    background-color: var(--colors-white);
    color: var(--colors-black);
  }
`;
