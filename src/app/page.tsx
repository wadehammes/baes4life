"use client";

import { FC } from "react";
import { Details } from "src/components/Details/Details.component";
import { Hero } from "src/components/Hero/Hero.component";
import { OurStory } from "src/components/OurStory/OurStory.component";
import { PageContainer } from "src/components/PageContainer/Page.component";

const Home: FC = () => {
  return (
    <PageContainer>
      <Hero />
      <OurStory />
      <Details />
    </PageContainer>
  );
};

export default Home;
