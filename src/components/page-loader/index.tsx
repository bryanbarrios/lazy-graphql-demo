const PageLoader = () => {
  return (
    <div className="flex justify-center">
      <div className="inline-flex items-center">
        <div className="animate-spin rounded-full h-10 w-10 bg-gradient-to-r from-green-400 to-blue-500 mr-3"></div>
        <span className="text-lg bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 font-medium">
          Loading...
        </span>
      </div>
    </div>
  );
};

export default PageLoader;
