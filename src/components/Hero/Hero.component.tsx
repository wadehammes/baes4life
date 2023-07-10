import Image from "next/image";
import { H1, HeroSubText } from "src/components/Typography";
import { useCountdown } from "src/hooks/useCountdown";
import { keyframes, styled } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
`;

const StyledHeader = styled.header`
  position: relative;
  z-index: 1;
`;

const StyledHero = styled.div`
  background-color: var(--colors-black);
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

const StyledPageArrow = styled.div`
  position: absolute;
  z-index: 2;
  bottom: 6rem;
  cursor: pointer;
`;

const StyledCountdown = styled.time`
  display: flex;
  justify-content: center;
  font-size: 1rem;
  font-family: "Source Sans 3", sans-serif;
  font-variant-numeric: tabular-nums;
  text-transform: uppercase;
  position: relative;

  svg {
    position: absolute;
    top: -28px;
    animation: ${rotate} 15s linear infinite;
  }
`;

export const Hero = () => {
  const weddingCountdown = useCountdown();

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
        <HeroSubText>Jupiter, FL &bull; April 21, 2024</HeroSubText>
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
            <text font-size="10" fill="white">
              <textPath xlinkHref="#circle">
                WEDDING {weddingCountdown}
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
