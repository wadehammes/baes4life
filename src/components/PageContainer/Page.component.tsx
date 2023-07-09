"use client";

import { PropsWithChildrenOnly } from "src/@types/react";
import { Content } from "src/components/Layout";

export const PageContainer = ({ children }: PropsWithChildrenOnly) => (
  <Content>{children}</Content>
);
