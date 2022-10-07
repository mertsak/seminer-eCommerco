import React from "react";

import Banner from "../components/Banner";
import Highlights from "../components/Highlights";
import BestSellProducts from "../components/BestSellProducts";
import OpportunityProducts from "../components/OpportunityProducts";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Highlights></Highlights>
      <BestSellProducts></BestSellProducts>
      <OpportunityProducts></OpportunityProducts>
    </>
  );
};

export default Home;
