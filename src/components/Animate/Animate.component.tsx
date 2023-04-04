import React, { Children, ReactNode } from "react";
import { FCWithChildren } from "src/@types/react";
import styled, { css } from "styled-components";

interface AnimateWrapperProps {
  wait: number;
  visible: boolean;
}

const AnimateWrapper = styled.div<AnimateWrapperProps>`
  opacity: 0;
  visibility: visible;
  transform: translateY(0.5em);
  transition: opacity 1s ease-in-out,
    transform 1s cubic-bezier(0.34, 0.53, 0.59, 1.11);
  transition-delay: ${({ wait }) => `${wait}ms`};

  ${({ visible }) =>
    visible &&
    css`
      opacity: 1;
      transform: translateY(0);
    `};
`;

interface AnimateProps {
  visible?: boolean;
  timing?: number;
}

export const Animate: FCWithChildren<AnimateProps> = ({
  children,
  visible = false,
  timing = 100,
}) =>
  children ? (
    <>
      {Children.map(children, (child: ReactNode, i: number) => (
        <AnimateWrapper
          // eslint-disable-next-line react/no-array-index-key
          key={i}
          wait={timing * i}
          visible={visible}
        >
          {child}
        </AnimateWrapper>
      ))}
    </>
  ) : null;
