import React from "react";
import GraphFilter from "../components/GraphFilter";
import StockWidget from "../components/StockWidget";

const Graph = () => {
  return (
    <div className="flex justify-center">
      <div className="pt-10">
        <div className="text-center py-4">
          <h2 className="font-bold">Analysis Board</h2>
          <p>Make your Analysis for you favourite Stock !</p>
        </div>

        {/* <GraphFilter></GraphFilter> */}
        <StockWidget></StockWidget>
      </div>
    </div>
  );
};

export default Graph;
