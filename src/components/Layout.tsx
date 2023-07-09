import { device } from "src/styles/theme";
import styled from "styled-components";

interface GridProps {
  gridHeight?: number | null;
}

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;

  @media ${device.tablet} {
    padding: var(--sizing-desktopPadding);
  }
`;

export const Content = styled(Container)`
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
`;
