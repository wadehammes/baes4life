"use client";

import { FC } from "react";
import { Details } from "src/components/Details/Details.component";
import { Footer } from "src/components/Footer/Footer.component";
import { Gallery } from "src/components/Gallery/Gallery.component";
import { Hero } from "src/components/Hero/Hero.component";
import { OurStory } from "src/components/OurStory/OurStory.component";
import { PageContainer } from "src/components/PageContainer/Page.component";

const Home: FC = () => {
  return (
    <PageContainer>
      <Hero />
      <OurStory />
      <Gallery />
      <Details />
      <Footer />
    </PageContainer>
  );
};

export default Home;
