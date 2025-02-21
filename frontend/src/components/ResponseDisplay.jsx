import React from "react";

const ResponseDisplay = ({ apiResponse, selectedFilters }) => {
  if (!apiResponse) return null;

  return (
    <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Filtered Response</h3>
      {selectedFilters.some((filter) => filter.value === "numbers") && (
        <p className="text-gray-700 mb-2">
          <span className="font-medium">Numbers:</span> {apiResponse.numbers.join(", ")}
        </p>
      )}
      {selectedFilters.some((filter) => filter.value === "alphabets") && (
        <p className="text-gray-700 mb-2">
          <span className="font-medium">Alphabets:</span> {apiResponse.alphabets.join(", ")}
        </p>
      )}
      {selectedFilters.some((filter) => filter.value === "highest_alphabet") && (
        <p className="text-gray-700">
          <span className="font-medium">Highest Alphabet:</span> {apiResponse.highest_alphabet.join(", ")}
        </p>
      )}
    </div>
  );
};

export default ResponseDisplay;
