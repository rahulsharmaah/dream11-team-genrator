"use client";
import React, { useState } from "react";

const RandomNames = () => {
  const [inputNames, setInputNames] = useState("");
  const [randomNameSets, setRandomNameSets] = useState([]);

  const handleInputChange = (e) => {
    setInputNames(e.target.value);
  };

  const generateRandomNames = () => {
    const namesArray = inputNames
      .split(",")
      .map((name) => name.trim())
      .filter(Boolean);

    if (namesArray.length >= 11) {
      const generatedSets = [];
      for (let i = 0; i < 5; i++) {
        const shuffledNames = [...namesArray];
        for (let j = shuffledNames.length - 1; j > 0; j--) {
          const k = Math.floor(Math.random() * (j + 1));
          [shuffledNames[j], shuffledNames[k]] = [
            shuffledNames[k],
            shuffledNames[j],
          ];
        }
        const selectedNames = shuffledNames.slice(0, 11);
        generatedSets.push(selectedNames);
      }
      setRandomNameSets(generatedSets);
    } else {
      alert("Please enter at least 11 names separated by commas.");
    }
  };

  return (
    <div>
      <textarea
        className="border border-gray-300 rounded p-2 w-full h-32 text-black"
        placeholder="Enter names separated by commas..."
        value={inputNames}
        onChange={handleInputChange}
      />
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-2"
        onClick={generateRandomNames}
      >
        Generate 5 Sets of Random Names
      </button>
      <ul className="mt-4">
        {randomNameSets.map((nameSet, setIndex) => (
          <li key={setIndex}>
            <strong>Set {setIndex + 1}:</strong>
            <ul>
              {nameSet.map((name, index) => (
                <li key={index}>{name}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RandomNames;
