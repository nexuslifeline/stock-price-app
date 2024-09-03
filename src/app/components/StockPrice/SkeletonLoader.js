const SkeletonLoader = () => {
  return (
    <div className="mt-6 p-6 bg-gray-200 rounded-lg shadow-inner animate-pulse">
      <div className="h-8 bg-gray-300 rounded mb-4"></div>
      <div className="h-6 bg-gray-300 rounded mb-2"></div>
      <div className="h-6 bg-gray-300 rounded"></div>
    </div>
  );
};

export default SkeletonLoader;
