import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { ContentContainer, Section } from "src/components/Layout";
import { ourStoryText } from "src/components/OurStory/OurStory";
import { H2, P } from "src/components/Typography";
import { styled } from "styled-components";

const StyledOurStorySection = styled(Section)`
  background-color: var(--color-text);
`;

const StyledOurStory = styled(ContentContainer)`
  color: var(--color-bg);
`;

export const OurStory = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  return (
    <StyledOurStorySection id="our-story" ref={ref}>
      <StyledOurStory>
        <H2 $inView={inView}>Our story</H2>
        {ourStoryText.map((paragraph) => (
          <P key={paragraph} $inView={inView}>
            {paragraph}
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
    </StyledOurStorySection>
  );
};
