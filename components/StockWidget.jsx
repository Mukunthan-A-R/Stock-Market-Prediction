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
    { symbol: "TCS", name: "Tata Consultancy Services" }, // TCS
    { symbol: "RELIANCE", name: "Reliance Industries" }, // Reliance Industries
    { symbol: "INFY", name: "Infosys" }, // Infosys
    { symbol: "HDFC", name: "HDFC Bank" }, // HDFC Bank
    { symbol: "ICICIBANK", name: "ICICI Bank" }, // ICICI Bank
    { symbol: "HINDUNILVR", name: "Hindustan Unilever" }, // Hindustan Unilever
    { symbol: "BHARTIARTL", name: "Bharti Airtel" }, // Bharti Airtel
    { symbol: "WIPRO", name: "Wipro" }, // Wipro
    { symbol: "LTC", name: "Larsen & Toubro" }, // Larsen & Toubro
    { symbol: "MARUTI", name: "Maruti Suzuki" }, // Maruti Suzuki
    { symbol: "ADANIGREEN", name: "Adani Green Energy" }, // Adani Green Energy
    { symbol: "SAIL", name: "Steel Authority of India" }, // Steel Authority of India
  ];

  const handleSymbolChange = (e) => {
    setSymbol(e.target.value); // Update the symbol state when a new stock is selected
    setSymbol(e.target.value);
  };

  return (
    <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-full sm:w-[800px] md:w-[1000px] mx-auto">
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
