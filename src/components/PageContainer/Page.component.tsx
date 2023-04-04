"use client";

import { forwardRef, Ref } from "react";
import { PropsWithChildrenOnly } from "src/@types/react";
import { Header } from "src/components/Header/Header.component";
import { Content, Grid } from "src/components/Layout";

export const PageContainer = forwardRef(
  ({ children }: PropsWithChildrenOnly, ref: Ref<HTMLDivElement>) => (
    <Grid ref={ref}>
      <Header />
      <Content>{children}</Content>
    </Grid>
  ),
);

export default PageContainer;
