"use client";

import { useState } from "react";

import StockData from "@/app/components/StockPrice/StockData";
import SkeletonLoader from "@/app/components/StockPrice/SkeletonLoader";
import Button from "@/app/components/Common/Button";
import useStockPrice from "@/app/shared/hooks/useStockPrice";

const StockPrice = () => {
  const [symbol, setSymbol] = useState("");
  const { stockData, loading, error, fetchStockPrice, setError } =
    useStockPrice();

  const handleInputChange = e => {
    const inputValue = e.target.value.toUpperCase();
    setSymbol(inputValue);
    setError("");
  };

  const handleSearch = () => {
    if (symbol) {
      fetchStockPrice(symbol);
    }
  };

  const handleKeyDown = e => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-12 p-6 border rounded-lg shadow-lg bg-white">
      <h1 className="text-3xl font-bold text-center mb-6">
        Stock Price Checker
      </h1>
      <div className="flex space-x-2">
        <input
          type="text"
          className="border p-3 w-full rounded-lg text-lg"
          placeholder="Enter stock symbol (e.g., AAPL)"
          value={symbol}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <Button onClick={handleSearch} isBusy={loading}>
          Search
        </Button>
      </div>
      {loading && symbol && <SkeletonLoader />}
      {error && symbol && <p className="text-red-500 mt-6 text-lg">{error}</p>}
      {stockData && <StockData data={stockData} />}
    </div>
  );
};

export default StockPrice;
