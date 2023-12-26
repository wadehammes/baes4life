import Image from "next/image";
import { useEffect, useState } from "react";
import { Countdown } from "src/components/Countdown/Countdown.component";
import { Navigation } from "src/components/Navigation/Navigation.component";
import { H1, HeroSubText } from "src/components/Typography";
import { device } from "src/styles/theme";
import { styled } from "styled-components";
import { useWindowSize } from "usehooks-ts";

const getRandomNumber = () => {
  return Math.floor(Math.random() * 9) + 1;
};

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
  align-items: center;
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

  @media screen and (max-height: 520px) {
    min-height: 580px;
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

const StyledButtonLink = styled.a`
  display: inline-block;
  font-size: 1.25rem;
  padding: 0.75em 2.25em 0.7em;
  max-width: auto;
  text-decoration: none;
  border: 1px solid var(--colors-white);
  color: var(--colors-white);
  margin-top: 1.5rem;

  &:hover {
    color: var(--colors-black);
    background: var(--colors-white);
  }
`;

export const Hero = () => {
  const { width, height } = useWindowSize();
  const [imageNumber, setImageNumber] = useState<number | null>(null);

  useEffect(() => {
    setImageNumber(getRandomNumber());
  }, []);

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
      {imageNumber ? (
        <Image
          src={`/hero/${imageNumber}.jpg`}
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
            opacity: 0.5,
            width: "100%",
            height: "100%",
            filter: "grayscale(1)",
          }}
        />
      ) : null}
      <StyledHeader>
        <H1>Jen & Wade</H1>
        <HeroSubText>
          April 20th-22nd, 2024 <br /> Jupiter, FL
        </HeroSubText>
        <StyledButtonLink href="/rsvp">RSVP</StyledButtonLink>
      </StyledHeader>
      <StyledPageArrow onClick={handleOurStoryScroll}>
        <Countdown color="light" animate={true} />
      </StyledPageArrow>
    </StyledHero>
  );
};
