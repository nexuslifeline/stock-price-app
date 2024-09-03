"use client";

import { useState } from "react";

import StockData from "@components/StockPrice/StockData";
import SkeletonLoader from "@components/StockPrice/SkeletonLoader";
import Button from "@components/Common/Button";
import SearchInput from "@components/Common/SearchInput";
import useStockPrice from "@shared/hooks/useStockPrice";

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

  const handleClear = () => {
    setSymbol("");
    setError("");
  };

  return (
    <div className="max-w-lg mx-auto mt-12 p-6 border rounded-lg shadow-lg bg-white">
      <h1 className="text-3xl font-bold text-center mb-6">
        Stock Price Checker
      </h1>
      <div className="flex space-x-2">
        <SearchInput
          value={symbol}
          placeholder="Enter stock symbol (e.g., AAPL)"
          onChange={handleInputChange}
          onClear={handleClear}
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
