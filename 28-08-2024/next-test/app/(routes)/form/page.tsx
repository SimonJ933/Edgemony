"use client";
import Navbar from "@/components/Navbar";
import React from "react";
import { FormEvent, ChangeEvent } from "react";
import { useState, useEffect } from "react";

function Form() {
  const [input, setInput] = useState<string>("");

  const inputValidation = input.length < 4;

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (input.length < 4) {
      console.log("Errore: l'input è meno di 4 lettere");
    } else {
      console.log("Ok: l'input è valido");
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInput(e.target.value);
  };
  useEffect(() => {
    console.log();
  }, [input]);

  return (
    <div>
      <Navbar />

      <div className="flex justify-center">
        <div className="flex justify-center max-w-sm p-6 mt-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-900 dark:border-gray-700">
          <form onSubmit={handleSubmit}>
            <input
              className="w-full mb-4 p-3 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              onChange={handleChange}
              value={input}
              placeholder="Insert data"
            />

            <button
              type="submit"
              className={`block w-full rounded-lg px-5 py-3 text-sm font-medium text-white transition ${
                input
                  ? "bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
