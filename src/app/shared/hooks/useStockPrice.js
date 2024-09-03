import { useState, useCallback } from "react";

import axios from "axios";
import debounce from "lodash/debounce";

/**
 * Custom hook to fetch real-time stock prices using the Finnhub API.
 *
 * @returns {Object} - Contains:
 *   - stockData: The fetched stock data.
 *   - loading: Indicates if data is being loaded.
 *   - error: Error message if fetching fails.
 *   - fetchStockPrice: A debounced function to fetch stock prices by symbol.
 */
const useStockPrice = () => {
  const [stockData, setStockData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchStockPrice = async symbol => {
    setLoading(true);
    setError("");
    setStockData(null);

    try {
      const response = await axios.get(`https://finnhub.io/api/v1/quote`, {
        params: {
          symbol,
          token: process.env.NEXT_PUBLIC_FINNHUB_API_KEY
        }
      });

      const data = response.data;

      if (data.c) {
        setStockData(data);
      } else {
        setError("Stock symbol not found.");
      }
    } catch (error) {
      setError("Failed to fetch stock data.");
    } finally {
      setLoading(false);
    }
  };

  const debouncedFetchStockPrice = useCallback(
    debounce(fetchStockPrice, 500),
    []
  );

  return {
    stockData,
    loading,
    error,
    fetchStockPrice: debouncedFetchStockPrice
  };
};

export default useStockPrice;
