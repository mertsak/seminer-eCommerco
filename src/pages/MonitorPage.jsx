import React from "react";

import Monitor from "../components/Monitor";
import MonitorFilter from "../components/MonitorFilter";

const MonitorPage = () => {
  return (
    <div className="products__container">
      <div className="product__filter">
        <MonitorFilter></MonitorFilter>
      </div>

      <div className="product__container">
        <Monitor></Monitor>
      </div>
    </div>
  );
};

export default MonitorPage;
