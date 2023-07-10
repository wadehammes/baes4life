import { FontWeight } from "src/interfaces/common.interfaces";
import { device } from "src/styles/theme";
import styled, { css } from "styled-components";

interface AnimatedTextProps {
  $inView?: boolean;
}

export const H1 = styled.h1<AnimatedTextProps>`
  font-size: 3rem;
  font-weight: ${FontWeight.Semibold};
  line-height: 1;

  @media ${device.tablet} {
    font-size: 6rem;
  }
`;

export const H2 = styled.h2<AnimatedTextProps>`
  font-size: 1.5rem;
  font-weight: ${FontWeight.Regular};
  line-height: 1.2;
  transform: translateY(1rem);
  transition:
    transform 0.75s ease-in-out,
    opacity 0.5s ease-in-out;
  transition-delay: 100ms;
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

export const P = styled.p<AnimatedTextProps>`
  font-weight: ${FontWeight.Regular};
  line-height: 1.5;
  padding-bottom: 1.5rem;
  font-size: 1rem;

  @media ${device.tablet} {
    font-size: 1.5rem;
  }

  &:empty {
    display: none;
    padding: 0;
  }
`;
