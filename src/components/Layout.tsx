import { device } from "src/styles/theme";
import styled from "styled-components";

interface GridProps {
  gridHeight?: number | null;
}

export const Grid = styled.div<GridProps>`
  display: grid;
  grid-template-rows: 8em 1fr;
  grid-gap: 0;
  height: calc(100vh - env(safe-area-inset-bottom));
  width: 100%;
`;

export const Container = styled.div`
  padding: var(--sizing-mobilePadding);
  width: 100%;

  @media ${device.tablet} {
    padding: var(--sizing-desktopPadding);
  }
`;

export const Content = styled(Container)`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  height: 100%;
`;
