import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { ContentContainer, Section } from "src/components/Layout";
import { ourStoryText } from "src/components/OurStory/OurStory";
import { H2, P } from "src/components/Typography";

export const OurStory = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  return (
    <Section id="our-story" ref={ref}>
      <ContentContainer>
        <H2 $inView={inView}>Our story</H2>
        {ourStoryText.map((paragraph) => (
          <P $inView={inView}>{paragraph}</P>
        ))}
        <Image
          src="/icons/birds-of-paradise.svg"
          height="48"
          width="48"
          alt=""
          role="presentation"
        />
      </ContentContainer>
    </Section>
  );
};
