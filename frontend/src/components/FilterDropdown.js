import React from "react";
import Select from "react-select";

const options = [
  { value: "numbers", label: "Numbers" },
  { value: "alphabets", label: "Alphabets" },
  { value: "highest_alphabet", label: "Highest Alphabet" },
];

const FilterDropdown = ({ selectedFilters, setSelectedFilters }) => {
  return (
    <div>
      <h3>Multi Filter</h3>
      <Select
        isMulti
        options={options}
        value={selectedFilters}
        onChange={setSelectedFilters}
      />
    </div>
  );
};

export default FilterDropdown;
