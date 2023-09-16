"use client";
import React from "react";
import RandomNames from "../components/RandomNames/page";
const TeamGenrator = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Random Name Generator</h1>
      <RandomNames />
    </div>
  );
};

export default TeamGenrator;
