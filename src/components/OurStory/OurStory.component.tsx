import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { Animate } from "src/components/Animate/Animate.component";
import { ContentContainer, Section } from "src/components/Layout";
import { ourStoryText } from "src/components/OurStory/OurStory";
import { H2, P } from "src/components/Typography";
import { device } from "src/styles/theme";
import { styled } from "styled-components";

const StyledOurStorySection = styled(Section)`
  background-color: var(--color-text);
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
  max-width: 70rem;
  margin: 0 auto;

  @media ${device.laptop} {
    flex-flow: row nowrap;
  }
`;

const StyledOurStory = styled(ContentContainer)`
  color: var(--color-bg);
  flex: 2;
`;

const Images = styled.div`
  display: none;
  flex-flow: column nowrap;
  gap: 1rem;
  padding-top: 0;
  flex: 1;

  @media ${device.laptop} {
    display: flex;
    padding-top: 4rem;
  }
`;

const imageMap = [...new Array(3)].map((image, index: number) => ({
  id: index,
  file: `/images/${index}.jpg`,
}));

export const OurStory = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  return (
    <StyledOurStorySection id="our-story" ref={ref}>
      <Container>
        <div>
          <StyledOurStory>
            <H2>Our story</H2>
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
        </div>
        <Images>
          <Animate $visible={inView}>
            {imageMap.map((image) => (
              <Image
                src={image.file}
                width="600"
                height="400"
                alt={`Jen and Wade Engagement Photo #${image.id}`}
                loading="lazy"
                quality={80}
                style={{
                  objectFit: "contain",
                  height: "auto",
                }}
              />
            ))}
          </Animate>
        </Images>
      </Container>
    </StyledOurStorySection>
  );
};
