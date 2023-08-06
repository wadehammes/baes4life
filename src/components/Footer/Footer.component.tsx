import { darken } from "polished";
import { Countdown } from "src/components/Countdown/Countdown.component";
import { Section } from "src/components/Layout";
import { styled } from "styled-components";

const FooterSection = styled(Section)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;
  gap: 2.5rem;
  background: ${darken(0.025, "#25523B")};
  color: var(--colors-white);
  text-align: center;
`;

export const Footer = () => {
  return (
    <FooterSection>
      <p>Jen & Wade - Baes4Life &copy; {new Date().getFullYear()}</p>
      <Countdown color="light" animate={false} />
    </FooterSection>
  );
};
