"use client";

import { useState } from "react";

import useStockPrice from "@/app/shared/hooks/useStockPrice";

const StockPrice = () => {
  const [symbol, setSymbol] = useState("");
  const { stockData, loading, error, fetchStockPrice } = useStockPrice();

  const handleInputChange = e => {
    const inputValue = e.target.value.toUpperCase();
    setSymbol(inputValue);
    fetchStockPrice(inputValue);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-4">
        Stock Price Checker
      </h1>
      <input
        type="text"
        className="border p-2 w-full rounded"
        placeholder="Enter stock symbol (e.g., AAPL)"
        value={symbol}
        onChange={handleInputChange}
      />
      {loading && <p className="text-blue-500 mt-4">Loading...</p>}
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {stockData && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <p className="text-lg">Current Price: ${stockData.c.toFixed(2)}</p>
          <p className="text-sm text-gray-600">
            High: ${stockData.h.toFixed(2)}, Low: ${stockData.l.toFixed(2)}
          </p>
        </div>
      )}
    </div>
  );
};

export default StockPrice;
