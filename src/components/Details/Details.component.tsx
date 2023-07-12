import { useInView } from "react-intersection-observer";
import { Accordion } from "src/components/Accordion/Accordion.component";
import { details } from "src/components/Details/Details";
import { Section } from "src/components/Layout";
import { H2 } from "src/components/Typography";
import { styled } from "styled-components";
import parse from "html-react-parser";
import { device } from "src/styles/theme";

const DetailsContainer = styled(Section)`
  background: radial-gradient(
    circle at center,
    #c0bfb4,
    #c0bfb4 10%,
    transparent 10%,
    transparent 20%,
    #c0bfb4 20%,
    #c0bfb4 30%,
    transparent 30%,
    transparent 40%,
    #c0bfb4 40%,
    #c0bfb4 50%,
    transparent 50%,
    transparent 60%,
    #c0bfb4 60%,
    #c0bfb4 70%,
    transparent 70%,
    transparent 80%,
    #c0bfb4 80%,
    #c0bfb4 90%,
    transparent 90%
  );
  background-size: 2em 2em;
  background-color: var(--colors-silver);
  opacity: 1;
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
