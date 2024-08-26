import React from "react";
import PopularSlider from "./PopularSlider";
import Navbar from "./Navbar";
import TrendingSlider from "./TrendingSlider";

const Home = () => {
  return (
    <>
      <Navbar />
      <PopularSlider />
      <TrendingSlider />
    </>
  );
};

export default Home;
