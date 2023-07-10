"use client";

import { FC } from "react";
import { Hero } from "src/components/Hero/Hero.component";
import { OurStory } from "src/components/OurStory/OurStory.component";
import { PageContainer } from "src/components/PageContainer/Page.component";

const Home: FC = () => {
  return (
    <PageContainer>
      <Hero />
      <OurStory />
    </PageContainer>
  );
};

export default Home;
