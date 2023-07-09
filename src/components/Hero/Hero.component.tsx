import { useInView } from "react-intersection-observer";
import { styled } from "styled-components";

const StyledHero = styled.div`
  aspect-ratio: 16 / 9;
  width: 100%;
  min-height: 100vh;
`;

export const Hero = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });

  return <StyledHero ref={ref} />;
};
