import React from "react";
import StockTable from "../components/StockTable";
import BlockChainTransaction from "../components/BlockChainTransaction";
import data from "../data/data";

const Portfolio = () => {
  console.log("data");

  return (
    <div>
      {/* <StockTable></StockTable> */}
      <BlockChainTransaction data={data}></BlockChainTransaction>
      hi
    </div>
  );
};

export default Portfolio;
