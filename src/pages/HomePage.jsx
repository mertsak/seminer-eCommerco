import React from "react";

import Banner from "../components/Banner";
import HighlightsProducts from "../components/HighlightsProducts";
import BestSellProducts from "../components/BestSellProducts";
import OpportunityProducts from "../components/OpportunityProducts";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <HighlightsProducts></HighlightsProducts>
      <BestSellProducts></BestSellProducts>
      <OpportunityProducts></OpportunityProducts>
    </>
  );
};

export default Home;
