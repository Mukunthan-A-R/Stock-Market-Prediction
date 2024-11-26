import React, { useEffect, useState } from "react";
import axios from "axios";

const StockTable = () => {
  // State to hold stock data
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Finnhub API key
  const API_KEY = "ct2s7ihr01qj5j8lv8c0ct2s7ihr01qj5j8lv8cg"; // Replace with your API key

  // List of popular stock symbols (excluding crypto)
  const symbols = [
    "AAPL", // Apple
    "GOOGL", // Google
    "AMZN", // Amazon
    "MSFT", // Microsoft
    "TSLA", // Tesla
    "FB", // Meta (formerly Facebook)
    "NFLX", // Netflix
    "NVDA", // NVIDIA
    "MSM", // MetLife
    "SPY", // S&P 500 ETF
    "IBM", // IBM
    "INTC", // Intel
    "DIS", // Walt Disney
    "BA", // Boeing
  ];

  // Fetch stock data from Finnhub API
  useEffect(() => {
    const fetchStockData = async () => {
      setLoading(true);
      try {
        const responses = await Promise.all(
          symbols.map((symbol) =>
            axios.get(`https://finnhub.io/api/v1/quote`, {
              params: {
                symbol: symbol,
                token: API_KEY,
              },
            })
          )
        );

        // Format the data for the table
        const data = responses.map((response, index) => ({
          symbol: symbols[index],
          ...response.data,
        }));

        setStocks(data);
      } catch (err) {
        setError("Failed to fetch stock data");
      } finally {
        setLoading(false);
      }
    };

    fetchStockData();
  }, []);

  // Render table rows
  const renderRows = () => {
    return stocks.map((stock, index) => (
      <tr key={index}>
        <td className="px-6 py-3 text-white">{stock.symbol}</td>
        <td className="px-6 py-3 text-white">{stock.o}</td> {/* Open price */}
        <td className="px-6 py-3 text-white">{stock.h}</td> {/* High price */}
        <td className="px-6 py-3 text-white">{stock.l}</td> {/* Low price */}
        <td className="px-6 py-3 text-white">{stock.c}</td> {/* Close price */}
        <td className="px-6 py-3 text-white">{stock.pc}</td>{" "}
        {/* Previous close price */}
      </tr>
    ));
  };

  return (
    <div className="bg-black min-h-screen text-white">
      <div className="container mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold text-center mb-8 text-yellow-600">
          Stock Market Data
        </h1>

        {loading ? (
          <div className="text-center text-white">Loading...</div>
        ) : error ? (
          <div className="text-center text-red-500">{error}</div>
        ) : (
          <table className="min-w-full table-auto border-collapse">
            <thead className="bg-gray-800">
              <tr>
                <th className="px-6 py-3 text-left text-yellow-600">Symbol</th>
                <th className="px-6 py-3 text-left text-yellow-600">Open</th>
                <th className="px-6 py-3 text-left text-yellow-600">High</th>
                <th className="px-6 py-3 text-left text-yellow-600">Low</th>
                <th className="px-6 py-3 text-left text-yellow-600">Close</th>
                <th className="px-6 py-3 text-left text-yellow-600">
                  Previous Close
                </th>
              </tr>
            </thead>
            <tbody className="bg-gray-900">{renderRows()}</tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default StockTable;
