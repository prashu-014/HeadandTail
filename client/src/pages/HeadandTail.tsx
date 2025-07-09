import React, { useState, useReducer } from 'react'
import type { Coin } from "../types/stateType";
import headReducer from "../Reducer/headReducer";

const HeadandTail = () => {
  const [selection, setSelection] = useState<string>("");
  const [error, setError] = useState<string>("");

  const [state, dispatch] = useReducer(headReducer, {
    columns: [],
    charMap: [],
  });

  const handleSubmit = () => {
    if (selection !== "H" && selection !== "T") {
      setError("Please select value from dropdown");
      return;
    }

    dispatch({ type: "ADD_COIN", payload: selection as Coin });
    setSelection("");
    setError("");
  };

  const handleReset = () => {
    dispatch({ type: "RESET" });
  };

  return (
    <div className="h-full p-4 background-color flex flex-col gap-4">
      <h2 className="text-white text-2xl font-bold">Head & Tail </h2>
      <div className="flex gap-2">
        <select
          value={selection}
          onChange={(e) => setSelection(e.target.value)}
          className="border px-4 py-1"
        >
          <option value="">Select Value</option>
          <option value="H">H</option>
          <option value="T">T</option>
        </select>
        <button
          onClick={handleSubmit}
          className="bg-black  text-white px-4 py-1 disabled:bg-gray-800 disabled:cursor-not-allowed"
          disabled={!selection}
        >
          Submit
        </button>
        <button
          onClick={handleReset}
          className="bg-black  text-white px-4 py-1"
        >
          Reset
        </button>
      </div>

      {error && <p className="text-red-600">{error}</p>}

      <div className="flex gap-1">
        {state.columns.map((col, colIndex) => (
          <div key={colIndex} className="flex flex-col items-center">
            {col.map((val, rowIndex) => (
              <div key={rowIndex} className="cell">
                {val}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeadandTail