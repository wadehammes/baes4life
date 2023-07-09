"use client";

import { FC } from "react";
import { Hero } from "src/components/Hero/Hero.component";
import { PageContainer } from "src/components/PageContainer/Page.component";

const Home: FC = () => {
  return (
    <PageContainer>
      <Hero />
    </PageContainer>
  );
};

export default Home;
