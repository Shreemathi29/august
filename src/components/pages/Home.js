import React from "react";
import Hero from "../HomeSection/Hero";
import HomeAbout from "../HomeSection/HomeAbout";
import DestinationHome from "../Destina/DestinationHome";
import MostPopular from "../popular/MostPopular";
import { Download } from "../HomeSection/Download/Download";
import Works from "../HomeSection/Works/Works";
import { Gallery } from "../gallery/Gallery";

export const Home = () => {
  return (
    <div>
      <>
        <Hero />
        <HomeAbout />
        <MostPopular />
        <DestinationHome />
        <Download />
        <Works />
        <Gallery />
      </>
    </div>
  );
};
