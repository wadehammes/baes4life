import { device } from "src/styles/theme";
import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
`;

export const Content = styled(Container)`
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
`;

export const Section = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  gap: 2rem;
  padding: 5rem 2rem;
  overflow-x: hidden;
  background-color: var(--colors-white);

  @media ${device.tablet} {
    padding: 4rem;
  }

  @media ${device.laptop} {
    padding: 4rem 8rem;
  }
`;

export const ContentContainer = styled.div`
  max-width: 84ch;
  margin: 0 auto;
  width: 100%;
`;
