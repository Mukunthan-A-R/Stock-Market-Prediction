import React, { useState } from "react";
import TradingViewWidget from "./TradingViewWidget";
import StockFetcher from "./StockFetcher";

function StockWidget() {
  const [symbol, setSymbol] = useState("AAPL"); // Default to Apple stock symbol
  const [name, setName] = useState("Apple"); // Default to Apple stock Name

  const popularStocks = [
    { symbol: "AAPL", name: "Apple" },
    { symbol: "GOOGL", name: "Google" },
    { symbol: "MSFT", name: "Microsoft" },
    { symbol: "TSLA", name: "Tesla" },
    { symbol: "AMZN", name: "Amazon" },
    { symbol: "IBM", name: "IBM" },
  ];

  const handleSymbolChange = (e) => {
    setSymbol(e.target.value); // Update the symbol state when a new stock is selected
    setSymbol(e.target.value);
  };

  return (
    <div className="bg-gray-900 p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl text-white font-semibold mb-4">
          Select a Stock
        </h2>
        {/* Dropdown for choosing a stock */}
        <select
          value={symbol}
          onChange={handleSymbolChange}
          className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        >
          {popularStocks.map((stock) => (
            <option key={stock.symbol} value={stock.symbol}>
              {stock.name} ({stock.symbol})
            </option>
          ))}
        </select>
      </div>

      {/* TradingView widget with dynamic symbol */}
      <StockFetcher symbol={symbol} name={name} />
    </div>
  );
}

export default StockWidget;
