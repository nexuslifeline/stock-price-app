const StockData = ({ data = {} }) => {
  return (
    <div className="mt-6 p-6 bg-gray-100 rounded-lg shadow-inner">
      <p className="text-xl font-semibold">
        Current Price: ${data.c.toFixed(2)}
      </p>
      <p className="text-md text-gray-700 mt-2">
        High: ${data.h.toFixed(2)}, Low: ${data.l.toFixed(2)}
      </p>
    </div>
  );
};

export default StockData;
