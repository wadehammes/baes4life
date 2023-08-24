import Image from "next/image";
import { ContentContainer, Section } from "src/components/Layout";
import { ourStoryText } from "src/components/OurStory/OurStory";
import { H2, P } from "src/components/Typography";
import { device } from "src/styles/theme";
import { styled } from "styled-components";
import parse from "html-react-parser";

const StyledOurStorySection = styled(Section)`
  background-color: #ffffff;
  opacity: 1;
  background-image: radial-gradient(#dedede 0.5px, transparent 0.5px),
    radial-gradient(#dedede 0.5px, #ffffff 0.5px);
  background-size: 20px 20px;
  background-position:
    0 0,
    10px 10px;
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
`;

const StyledOurStory = styled(ContentContainer)`
  color: var(--color-bg);
  max-width: 100ch;

  ${P} {
    font-size: 1.15rem;
    opacity: 1;

    @media ${device.laptop} {
      font-size: 1.5rem;
    }
  }
`;

export const OurStory = () => {
  return (
    <StyledOurStorySection id="our-story">
      <Container>
        <StyledOurStory>
          <H2>
            Our story <span>(according to ChatGPT)</span>
          </H2>
          {ourStoryText.map((paragraph) => (
            <P key={paragraph}>{parse(paragraph)}</P>
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
