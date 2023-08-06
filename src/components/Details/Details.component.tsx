import { Accordion } from "src/components/Accordion/Accordion.component";
import { details } from "src/components/Details/Details";
import { Section } from "src/components/Layout";
import { H2 } from "src/components/Typography";
import { styled } from "styled-components";
import parse from "html-react-parser";
import { device } from "src/styles/theme";

const DetailsContainer = styled(Section)`
  background-size: 2em 2em;
  background-color: var(--colors-forest);
  opacity: 1;
  color: var(--color-white);
  flex-flow: column nowrap;
  align-items: flex-start;
  gap: 4rem;

  @media ${device.tablet} {
    flex-flow: row nowrap;
  }
`;

const DetailsColumns = styled.div`
  flex: 1;
  text-align: left;
  width: 100%;

  &:last-child {
    flex: 4;
  }
`;

export const Details = () => (
  <DetailsContainer>
    <DetailsColumns>
      <H2 style={{ padding: 0 }}>The juicy details</H2>
    </DetailsColumns>
    <DetailsColumns>
      {details.map((detail) => (
        <Accordion
          key={detail.id}
          $parentItem={parse(detail.parentItem)}
          $accordionId={detail.id}
          $accordionLabel={detail.label}
        >
          {detail.children.map((child, index) => parse(child))}
        </Accordion>
      ))}
    </DetailsColumns>
  </DetailsContainer>
);
