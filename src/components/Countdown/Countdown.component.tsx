import Image from "next/image";
import { useCountdown } from "src/hooks/useCountdown";
import { css, keyframes, styled } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
`;

const bounce = keyframes`
  0% {
    transform: translateY(-3px);
  }
  50% {
    transform: translateY(3px);
  }
  100% {
    transform: translateY(-3px);
  }
`;

const StyledCountdown = styled.time<{ $animate: boolean }>`
  display: flex;
  justify-content: center;
  font-size: 1rem;
  font-family: "Source Sans 3", sans-serif;
  font-variant-numeric: tabular-nums;
  text-transform: uppercase;
  position: relative;
  transition: transform 0.1s linear;

  ${({ $animate }) =>
    $animate &&
    css`
      img {
        animation: ${bounce} 1.5s linear infinite;
      }
    `}

  svg {
    position: absolute;
    top: -28px;
    animation: ${rotate} 15s linear infinite;
  }

  &:active {
    transform: scale(0.95);
  }
`;

interface CountdownProps {
  color: "light" | "dark";
  animate: boolean;
}

export const Countdown = ({
  color = "light",
  animate = true,
}: CountdownProps) => {
  const weddingCountdown = useCountdown();

  return (
    <StyledCountdown $animate={animate}>
      <svg viewBox="0 0 100 100" width="100" height="100">
        <defs>
          <path
            id="circle"
            d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
          />
        </defs>
        <text fontSize="10" fill={color === "light" ? "white" : "black"}>
          <textPath xlinkHref="#circle">SAY I DO {weddingCountdown}</textPath>
        </text>
      </svg>
      <Image
        src={`/icons/monstera-${color}.svg`}
        height="48"
        width="48"
        alt=""
        role="presentation"
      />
    </StyledCountdown>
  );
};
