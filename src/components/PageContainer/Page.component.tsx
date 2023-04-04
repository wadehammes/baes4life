"use server";

import { PropsWithChildrenOnly } from "src/@types/react";
import { Content, Grid } from "src/components/Layout";

export const PageContainer = ({ children }: PropsWithChildrenOnly) => (
  <Grid>
    <Content>{children}</Content>
  </Grid>
);
