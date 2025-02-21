import React from "react";

const ResponseDisplay = ({ apiResponse, selectedFilters }) => {
  if (!apiResponse) return null;

  return (
    <div>
      <h3>Filtered Response</h3>
      {selectedFilters.some((filter) => filter.value === "numbers") && (
        <p>Numbers: {apiResponse.numbers.join(", ")}</p>
      )}
      {selectedFilters.some((filter) => filter.value === "alphabets") && (
        <p>Alphabets: {apiResponse.alphabets.join(", ")}</p>
      )}
      {selectedFilters.some((filter) => filter.value === "highest_alphabet") && (
        <p>Highest Alphabet: {apiResponse.highest_alphabet.join(", ")}</p>
      )}
    </div>
  );
};

export default ResponseDisplay;
