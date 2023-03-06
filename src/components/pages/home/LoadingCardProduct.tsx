export const LoadingCardProduct = () => {
  return (
    <div className="border p-3 shadow bg-white animate-pulse">
      <div className="w-full h-64 bg-gray-300 rounded"></div>
      <div className="p-5">
        <div className="w-3/4 h-5 bg-gray-300 rounded"></div>
        <div className="w-1/2 h-5 bg-gray-300 rounded mt-5"></div>
        <div className="h-10 bg-gray-300 rounded mt-5"></div>
      </div>
    </div>
  );
};
