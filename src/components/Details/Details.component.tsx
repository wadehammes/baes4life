import { useInView } from "react-intersection-observer";
import { Accordion } from "src/components/Accordion/Accordion.component";
import { details } from "src/components/Details/Details";
import { Section } from "src/components/Layout";
import { H2 } from "src/components/Typography";
import { styled } from "styled-components";
import parse from "html-react-parser";
import { device } from "src/styles/theme";

const DetailsContainer = styled(Section)`
  background-color: var(--colors-silver);
  color: var(--color-bg);
  flex-flow: column nowrap;
  align-items: flex-start;
  gap: 1.5rem;

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

export const Details = () => {
  const { ref, inView } = useInView({
    threshold: 0.25,
  });

  return (
    <DetailsContainer ref={ref}>
      <DetailsColumns>
        <H2 $inView={inView} style={{ padding: 0 }}>
          Details
        </H2>
      </DetailsColumns>
      <DetailsColumns>
        {details.map((detail) => (
          <Accordion
            key={detail.id}
            $parentItem={parse(detail.parentItem)}
            $accordionId={detail.id}
            $accordionLabel={detail.label}
          >
            {detail.children.map((child) => parse(child))}
          </Accordion>
        ))}
      </DetailsColumns>
    </DetailsContainer>
  );
};
