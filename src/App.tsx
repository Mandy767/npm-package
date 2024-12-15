import React from 'react';
import { Loader, useLoader } from '.';

function App() {
  const { isLoading, startLoading, stopLoading } = useLoader();

  const handleClick = () => {
    startLoading('Loading data...');
    setTimeout(() => {
      stopLoading();
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center gap-4">
      <button
        onClick={handleClick}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
      >
        Toggle Loader
      </button>
      {isLoading && <Loader message="Loading data..." />}
    </div>
  );
}

export default App;