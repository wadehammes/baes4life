import Image from "next/image";
import { H1, HeroSubText } from "src/components/Typography";
import { useCountdown } from "src/hooks/useCountdown";
import { device } from "src/styles/theme";
import { keyframes, styled } from "styled-components";
import { useWindowSize } from "usehooks-ts";

const rotate = keyframes`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
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

const StyledCountdown = styled.time`
  display: flex;
  justify-content: center;
  font-size: 1rem;
  font-family: "Source Sans 3", sans-serif;
  font-variant-numeric: tabular-nums;
  text-transform: uppercase;
  position: relative;
  transition: transform 0.1s linear;

  svg {
    position: absolute;
    top: -28px;
    animation: ${rotate} 15s linear infinite;
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const Hero = () => {
  const { width, height } = useWindowSize();
  const weddingCountdown = useCountdown();

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
        }}
      />
      <StyledHeader>
        <H1>Jen & Wade</H1>
        <HeroSubText>April 20th-22nd, 2024 &mdash; Jupiter, FL</HeroSubText>
      </StyledHeader>
      <StyledPageArrow onClick={handleOurStoryScroll}>
        <StyledCountdown>
          <svg viewBox="0 0 100 100" width="100" height="100">
            <defs>
              <path
                id="circle"
                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              />
            </defs>
            <text fontSize="10" fill="white">
              <textPath xlinkHref="#circle">
                SAY I DO {weddingCountdown}
              </textPath>
            </text>
          </svg>
          <Image
            src="/icons/monstera.svg"
            height="48"
            width="48"
            alt=""
            role="presentation"
          />
        </StyledCountdown>
      </StyledPageArrow>
    </StyledHero>
  );
};
