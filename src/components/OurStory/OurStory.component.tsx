import { useInView } from "react-intersection-observer";
import { ContentContainer } from "src/components/Layout";
import { H2 } from "src/components/Typography";

export const OurStory = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  return (
    <ContentContainer id="our-story" ref={ref}>
      <H2 $inView={inView}>This is our story</H2>
    </ContentContainer>
  );
};
