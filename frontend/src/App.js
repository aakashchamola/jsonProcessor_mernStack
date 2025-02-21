import React, { useState } from "react";
import InputForm from "./components/InputForm";
import FilterDropdown from "./components/FilterDropdown";
import ResponseDisplay from "./components/ResponseDisplay";

const App = () => {
  const [apiResponse, setApiResponse] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState([]);

  return (
    <div>
      <h1>API Data Processor</h1>
      <InputForm setApiResponse={setApiResponse} />
      {apiResponse && (
        <>
          <FilterDropdown selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} />
          <ResponseDisplay apiResponse={apiResponse} selectedFilters={selectedFilters} />
        </>
      )}
    </div>
  );
};

export default App;
