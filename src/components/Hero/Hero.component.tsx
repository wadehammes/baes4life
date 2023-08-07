import Image from "next/image";
import { Countdown } from "src/components/Countdown/Countdown.component";
import { Navigation } from "src/components/Navigation/Navigation.component";
import { H1, HeroSubText } from "src/components/Typography";
import { device } from "src/styles/theme";
import { styled } from "styled-components";
import { useWindowSize } from "usehooks-ts";

const StyledBorderCorner = styled.div`
  position: absolute;
  border-color: var(--colors-gold);
  border-width: 5px;
  width: 32px;
  height: 32px;
  z-index: 1;
`;

const StyledBorderCornerTopLeft = styled(StyledBorderCorner)`
  border-top-style: solid;
  border-left-style: solid;
  left: 2rem;
  top: 2rem;
`;

const StyledBorderCornerTopRight = styled(StyledBorderCorner)`
  border-top-style: solid;
  border-right-style: solid;
  right: 2rem;
  top: 2rem;
`;

const StyledBorderCornerBottomLeft = styled(StyledBorderCorner)`
  border-bottom-style: solid;
  border-left-style: solid;
  bottom: 2rem;
  left: 2rem;
`;

const StyledBorderCornerBottomRight = styled(StyledBorderCorner)`
  border-bottom-style: solid;
  border-right-style: solid;
  bottom: 2rem;
  right: 2rem;
`;

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  flex-flow: column wrap;
  gap: 1rem;
  position: relative;
  z-index: 1;
`;

const StyledHero = styled.div`
  background-color: var(--colors-trueBlack);
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 100%;
  min-height: 100vh;
  text-align: center;
  overflow: hidden;
  color: var(--color-text);
  position: relative;

  @media screen and (max-height: 800px) {
    min-height: 800px;
  }

  > ${StyledHeader} {
    margin: auto;
  }
`;

const StyledPageArrow = styled.div`
  position: absolute;
  z-index: 2;
  bottom: 3rem;
  cursor: pointer;

  @media ${device.tablet} {
    bottom: 6rem;
  }
`;

export const Hero = () => {
  const { width, height } = useWindowSize();

  const handleOurStoryScroll = () => {
    document
      .querySelector("#our-story")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <StyledHero
      style={{
        height: `${height}px`,
        width: `${width}px`,
      }}
    >
      <StyledBorderCornerTopLeft />
      <StyledBorderCornerTopRight />
      <StyledBorderCornerBottomLeft />
      <StyledBorderCornerBottomRight />
      <Navigation />
      <Image
        src="/images/hero.jpg"
        height={height}
        width="2560"
        alt=""
        role="presentation"
        priority
        quality={100}
        style={{
          objectFit: "cover",
          position: "absolute",
          zIndex: 0,
          top: 0,
          opacity: 0.45,
          width: "100%",
          height: "100%",
        }}
      />
      <StyledHeader>
        <H1>Jen & Wade</H1>
        <HeroSubText>
          April 20th-22nd, 2024 <br /> Jupiter, FL
        </HeroSubText>
      </StyledHeader>
      <StyledPageArrow onClick={handleOurStoryScroll}>
        <Countdown color="light" animate={true} />
      </StyledPageArrow>
    </StyledHero>
  );
};
