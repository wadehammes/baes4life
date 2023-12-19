import { Countdown } from "src/components/Countdown/Countdown.component";
import { Section } from "src/components/Layout";
import { styled } from "styled-components";

const FooterSection = styled(Section)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;
  gap: 3rem;
  background: var(--colors-white);
  color: var(--colors-black);
  text-align: center;
  padding: 1rem 2rem 6rem;
`;

export const Footer = () => {
  return (
    <FooterSection>
      <p>Jen & Wade say "I do" April 21st, 2024</p>
      <Countdown color="dark" animate={false} />
    </FooterSection>
  );
};
