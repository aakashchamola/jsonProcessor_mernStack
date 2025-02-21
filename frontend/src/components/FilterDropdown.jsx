import React from "react";
import Select from "react-select";

const options = [
  { value: "numbers", label: "Numbers" },
  { value: "alphabets", label: "Alphabets" },
  { value: "highest_alphabet", label: "Highest Alphabet" },
];

// Custom styles for react-select to align with Tailwind colors
const customStyles = {
  control: (provided) => ({
    ...provided,
    borderColor: "#D1D5DB", // gray-300
    boxShadow: "none",
    "&:hover": { borderColor: "#60A5FA" }, // blue-500
    padding: "2px",
  }),
  menu: (provided) => ({
    ...provided,
    zIndex: 9999,
  }),
  multiValue: (provided) => ({
    ...provided,
    backgroundColor: "#E0F2FE", // blue-100
  }),
  multiValueLabel: (provided) => ({
    ...provided,
    color: "#2563EB", // blue-600
  }),
  multiValueRemove: (provided) => ({
    ...provided,
    color: "#2563EB",
    cursor: "pointer",
    ":hover": {
      backgroundColor: "#2563EB",
      color: "white",
    },
  }),
};

const FilterDropdown = ({ selectedFilters, setSelectedFilters }) => {
  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold mb-2 text-gray-700">Multi Filter</h3>
      <Select
        className="react-select-container"
        classNamePrefix="react-select"
        isMulti
        options={options}
        value={selectedFilters}
        onChange={setSelectedFilters}
        styles={customStyles}
      />
    </div>
  );
};

export default FilterDropdown;
