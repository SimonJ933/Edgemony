import React from "react";
import { useState } from "react";
import { labels } from "../data/labels";
function GameForm({ value, onSubmit }) {
  const initialState = {
    title: value?.title || "",
    platform: value?.platform || "",
    genre: value?.genre || "",
    description: value?.description || "",
    price: value?.price || "",
  };

  const [form, setForm] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);

  const titleValidation = !form.title.length;
  const platformValidation = !form.platform.length;
  const genreValidation = !form.genre.length;
  const priceValidation = !form.price.length;
  const descriptionValidation = !form.description.length;

  const formValidation = titleValidation || genreValidation || platformValidation || priceValidation || descriptionValidation;

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  return (
    <div className="">
      <div className="text-center">
        {isLoading ? (
          <div>
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500 mx-auto"></div>
            <p className="mt-4 text-2xl font-bold text-white">IS LOADING....</p>
          </div>
        ) : (
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              setIsLoading(true);
              await onSubmit(form);
              setIsLoading(false);
            }}
            action="#"
            className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto"
          >
            <div>
              <label className="sr-only">{labels.addTitle}</label>
              <div className="relative">
                <input
                  name="title"
                  onChange={handleChange}
                  type="text"
                  value={form.title}
                  className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder={labels.addTitle}
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="sr-only">{labels.addPlatform}</label>
              <div className="relative">
                <input
                  name="platform"
                  onChange={handleChange}
                  type="text"
                  value={form.platform}
                  className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder={labels.addPlatform}
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="sr-only">{labels.addGenre}</label>
              <div className="relative">
                <input
                  name="genre"
                  onChange={handleChange}
                  type="text"
                  value={form.genre}
                  className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder={labels.addGenre}
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="sr-only">{labels.addPrice}</label>
              <div className="relative">
                <input
                  name="price"
                  onChange={handleChange}
                  type="text"
                  value={form.price}
                  className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder={labels.addPrice}
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="sr-only">{labels.addDescription}</label>
              <div className="relative">
                <input
                  name="description"
                  onChange={handleChange}
                  type="text"
                  value={form.description}
                  className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder={labels.addDescription}
                />
              </div>
            </div>

            <div className="mt-6">
              <button
                disabled={formValidation}
                type="submit"
                className={`block w-full rounded-lg px-5 py-3 text-sm font-medium text-white transition ${
                  formValidation ? "bg-gray-400 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-700"
                }`}
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
export default GameForm;
