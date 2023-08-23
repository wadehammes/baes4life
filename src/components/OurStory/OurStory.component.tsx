import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { ContentContainer, Section } from "src/components/Layout";
import { ourStoryText } from "src/components/OurStory/OurStory";
import { H2, P } from "src/components/Typography";
import { device } from "src/styles/theme";
import { styled } from "styled-components";
import parse from "html-react-parser";

const StyledOurStorySection = styled(Section)`
  background-color: var(--color-text);
  background-color: var(--color-text);
  opacity: 0.8;
  background-size: 29px 31px;
  background-image: repeating-linear-gradient(
    0deg,
    #fafafa,
    #fafafa 1px,
    #ffffff 1px,
    #ffffff
  );
  padding: 4rem 2rem;

  @media ${device.laptop} {
    flex-flow: 4rem 8rem;
  }
`;

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: flex-start;
  gap: 4rem;
  max-width: 80rem;
  margin: 0 auto;

  @media ${device.laptop} {
    flex-flow: row nowrap;
  }
`;

const StyledOurStory = styled(ContentContainer)`
  color: var(--color-bg);
  max-width: 100ch;

  ${P} {
    font-size: 1.5rem;
    opacity: 1;
  }
`;

export const OurStory = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <StyledOurStorySection id="our-story" ref={ref}>
      <Container>
        <StyledOurStory>
          <H2>
            Our story <span>(according to ChatGPT)</span>
          </H2>
          {ourStoryText.map((paragraph, index) => (
            <P key={paragraph} $inView={inView} $delay={index}>
              {parse(paragraph)}
            </P>
          ))}
          <Image
            src="/icons/birds-of-paradise.svg"
            height="64"
            width="64"
            alt=""
            role="presentation"
          />
        </StyledOurStory>
      </Container>
    </StyledOurStorySection>
  );
};
