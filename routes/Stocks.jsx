import React from "react";
import TradingViewWidget from "../components/TradingViewWidget";
import NiftyStocks from "../components/NiftyStocks";
import StockTable from "../components/StockTable";

const Stocks = () => {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <header className="bg-yellow-600 py-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-black">
            Stock Market Overview
          </h1>
          <p className="text-lg text-black mt-2">
            Track real-time stock data for top performing Companies !
          </p>
        </div>
      </header>

      <main className="container mx-auto py-16 px-6">
        <section className="bg-gray-900 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-yellow-600 text-center mb-8">
            Top Performing Stocks
          </h2>
          <TradingViewWidget />
        </section>
      </main>
      <StockTable></StockTable>

      <main className="container mx-auto py-16 px-6">
        <section className="bg-gray-900 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-yellow-600 text-center mb-8">
            Top NIFTY50 Stocks
          </h2>
          <NiftyStocks></NiftyStocks>
        </section>
      </main>

      <footer className="bg-black text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Grow Home. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Stocks;
