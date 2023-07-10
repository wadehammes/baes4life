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

export const ContentContainer = styled.div`
  padding: 4rem;
  max-width: 60ch;
  margin: 0 auto;
`;
