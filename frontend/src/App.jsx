import React, { useState } from "react";
import InputForm from "./components/InputForm";
import FilterDropdown from "./components/FilterDropdown";
import ResponseDisplay from "./components/ResponseDisplay";

const App = () => {
  const [apiResponse, setApiResponse] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState([]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-4xl font-extrabold text-blue-600 mb-8">
      JSON Processor
      </h1>
      <div className="w-full max-w-lg">
        <InputForm setApiResponse={setApiResponse} />
        {apiResponse && (
          <div className="mt-8 space-y-6">
            <FilterDropdown
              selectedFilters={selectedFilters}
              setSelectedFilters={setSelectedFilters}
            />
            <ResponseDisplay
              apiResponse={apiResponse}
              selectedFilters={selectedFilters}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
