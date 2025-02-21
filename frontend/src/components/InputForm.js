import React, { useState } from "react";
import axios from "axios";

const InputForm = ({ setApiResponse }) => {
  const [jsonInput, setJsonInput] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Clean input: Remove non-printable characters and replace smart quotes with regular quotes
      let cleanedInput = jsonInput
        .trim()
        .replace(/[\u201C\u201D]/g, '"') // Convert curly quotes to standard quotes
        .replace(/[\u2018\u2019]/g, "'"); // Convert curly single quotes to standard single quotes

      // Try to parse the input
      const parsedInput = JSON.parse(cleanedInput);

      if (!parsedInput.data || !Array.isArray(parsedInput.data)) {
        throw new Error("Invalid JSON structure! Ensure it has a 'data' array.");
      }

      setError("");

      // ✅ Fix: Ensure correct backend URL
      const backendURL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5001/bfhl";

      console.log("Making API request to:", backendURL);

      // Make API request
      const response = await axios.post(backendURL, parsedInput);
      setApiResponse(response.data);

    } catch (err) {
      setError("Invalid JSON format. Please enter a valid JSON.");
    }
  };

  return (
    <div>
      <h2>API Input</h2>
      <textarea
        value={jsonInput}
        onChange={(e) => setJsonInput(e.target.value)}
        placeholder='{"data":["A","C","z"]}'
        rows={4}
        cols={50}
      />
      <br />
      <button onClick={handleSubmit}>Submit</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default InputForm;
