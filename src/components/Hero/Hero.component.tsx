import Image from "next/image";
import { H1, P } from "src/components/Typography";
import { keyframes, styled } from "styled-components";

const bounce = keyframes`
  0% {
    transform: translateY(-20px);
  }
  50% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-20px);
  }
`;

const StyledHeader = styled.header`
  position: relative;
  z-index: 1;
`;

const StyledHero = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  text-align: center;
  overflow: hidden;
  color: var(--color-text);

  > ${StyledHeader} {
    margin: auto;
  }
`;

const StyledMonstera = styled(Image)`
  animation: ${bounce} 2s ease-in-out 1s infinite;
`;

export const Hero = () => {
  const handleOurStoryScroll = () => {
    document
      .querySelector("#our-story")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <StyledHero>
      <Image
        src="/images/hero.jpg"
        height="1707"
        width="2560"
        alt=""
        role="presentation"
        style={{
          objectFit: "cover",
          position: "absolute",
          zIndex: 0,
          top: 0,
          opacity: 0.35,
          height: "100%",
        }}
      />
      <StyledHeader>
        <H1>Jen & Wade</H1>
        <P>Jupiter, FL &bull; April 21, 2024</P>
      </StyledHeader>
      <StyledMonstera
        src="/icons/monstera.svg"
        height="48"
        width="48"
        alt=""
        role="presentation"
        style={{
          position: "absolute",
          zIndex: 2,
          bottom: "2rem",
        }}
        onClick={handleOurStoryScroll}
      />
    </StyledHero>
  );
};
