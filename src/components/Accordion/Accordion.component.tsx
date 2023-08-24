import React, { FC, PropsWithChildren, ReactNode, useState } from "react";
import { useInView } from "react-intersection-observer";
import { device } from "src/styles/theme";
import styled, { css } from "styled-components";
import { rgba } from "polished";

interface AccordionBodyProps {
  $visible: boolean;
}

const AccordionWrapper = styled.div<AccordionBodyProps>`
  width: 100%;
  border-bottom: 1px solid ${rgba("white", 0.25)};
  opacity: 0;
  transform: translateY(24px);
  transition:
    transform 0.25s linear,
    opacity 0.25s linear;

  ${({ $visible }) =>
    $visible &&
    css`
      opacity: 1;
      transform: translateY(0);
    `};
`;

const AccordionBody = styled.div<AccordionBodyProps>`
  color: currentColor;
  display: none;
  padding: 0 0 2rem 0;
  font-family: inherit;
  font-size: 1.25rem;

  p {
    line-height: 1.5;
    margin-bottom: 2rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  @media ${device.tablet} {
    font-size: 1.5rem;
  }

  ${({ $visible }) =>
    $visible &&
    css`
      display: block;
    `}
`;

const AccordionParentItem = styled.span`
  display: block;
  text-align: left;
  padding-right: 1.5em;
  line-height: 1.1;
`;

const AccordionToggleIcon = styled.span`
  flex: 1;
  text-align: right;
`;

const AccordionToggle = styled.button`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  position: relative;
  width: 100%;
  overflow: hidden;
  --webkit-appearance: none;
  border: 0;
  background: 0;
  padding: 1rem 0;
  font-family: inherit;
  font-size: 2rem;
  color: currentColor;

  @media ${device.tablet} {
    font-size: 2.5rem;
  }

  ${AccordionWrapper}:first-child & {
    padding-top: 0;
  }

  &:focus {
    outline: 0;
  }

  &:hover {
    cursor: pointer;

    & > *:first-child {
      text-decoration: underline;
    }
  }
`;

interface AccordionProps {
  $parentItem: ReactNode | null;
  $accordionId: string | number;
  $accordionLabel: string;
}

export const Accordion: FC<PropsWithChildren<AccordionProps>> = ({
  children,
  $parentItem = null,
  $accordionId = 0,
  $accordionLabel = "",
}) => {
  const { ref, inView } = useInView({
    threshold: 0.75,
    triggerOnce: true,
  });
  const [bodyVisible, setBodyVisible] = useState<boolean>(false);

  return (
    <AccordionWrapper ref={ref} $visible={inView}>
      {$parentItem && (
        <AccordionToggle
          type="button"
          id={`accordion-4${$accordionId}`}
          aria-expanded={bodyVisible}
          aria-controls={`accordionBody-${$accordionId}`}
          onClick={() => setBodyVisible(!bodyVisible)}
          aria-label={$accordionLabel}
        >
          <AccordionParentItem>{$parentItem}</AccordionParentItem>
          {children && (
            <AccordionToggleIcon>{bodyVisible ? "-" : "+"}</AccordionToggleIcon>
          )}
        </AccordionToggle>
      )}
      {children && (
        <AccordionBody
          id={`accordionBody-${$accordionId}`}
          role="region"
          aria-labelledby={`accordion-${$accordionId}`}
          $visible={bodyVisible}
        >
          {children}
        </AccordionBody>
      )}
    </AccordionWrapper>
  );
};
