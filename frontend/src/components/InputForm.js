import React, { useState } from "react";
import axios from "axios";

const InputForm = ({ setApiResponse }) => {
  const [jsonInput, setJsonInput] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const parsedInput = JSON.parse(jsonInput);

      if (!parsedInput.data || !Array.isArray(parsedInput.data)) {
        throw new Error("Invalid JSON structure! Ensure it has a 'data' array.");
      }

      setError("");
      const response = await axios.post(process.env.REACT_APP_BACKEND_URL, parsedInput);
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
