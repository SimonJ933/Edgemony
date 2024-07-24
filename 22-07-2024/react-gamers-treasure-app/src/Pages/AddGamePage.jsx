import { useState } from "react";
import { addGame } from "../API/GamesClient";
import { useNavigate } from "react-router-dom";
import { labels } from "../data/labels";

const initialState = {
  title: "",
  platform: "",
  genre: "",
  description: "",
  price: "",
};

function CreateGame() {
  const navigate = useNavigate();

  const [form, setForm] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState({
    message: "",
    isError: false,
  });

  const titleValidation = !form.title.length;
  const platformValidation = !form.platform.length;
  const genreValidation = !form.genre.length;
  const priceValidation = !form.price.length;

  const formValidation = titleValidation || genreValidation || platformValidation || priceValidation;

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setIsLoading(true);
      const res = await addGame(form);
      setForm(initialState);
      console.log(res);
      navigate(-1);
    } catch (error) {
      console.log(error);
      setIsError((prevState) => {
        return { ...prevState, message: error.message, isError: true };
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading)
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-300 via-yellow-300 to-green-300">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-2xl font-bold text-white">IS LOADING....</p>
        </div>
      </div>
    );

  return (
    <div className="font-barlow flex justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 min-h-screen py-16">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg bg-white p-6 rounded-lg shadow-xl">
          <h1 className="text-center text-3xl font-extrabold text-purple-900 sm:text-4xl">{labels.addGame}</h1>
          <p className="mx-auto mt-4 max-w-md text-center text-gray-700">{labels.addGameSub}</p>

          <form onSubmit={handleSubmit} action="#" className="mt-6 space-y-4">
            <div>
              <label className="sr-only">Title</label>
              <div className="relative">
                <input
                  name="title"
                  onChange={handleChange}
                  type="text"
                  className="w-full rounded-lg border-2 border-purple-300 p-4 text-sm shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-200"
                  placeholder={labels.addTitle}
                />
              </div>
            </div>

            <div>
              <label className="sr-only">Platform</label>
              <div className="relative">
                <input
                  name="platform"
                  onChange={handleChange}
                  type="text"
                  className="w-full rounded-lg border-2 border-purple-300 p-4 text-sm shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-200"
                  placeholder={labels.addPlatform}
                />
              </div>
            </div>

            <div>
              <label className="sr-only">Genre</label>
              <div className="relative">
                <input
                  name="genre"
                  onChange={handleChange}
                  type="text"
                  className="w-full rounded-lg border-2 border-purple-300 p-4 text-sm shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-200"
                  placeholder={labels.addGenre}
                />
              </div>
            </div>

            <div>
              <label className="sr-only">Price</label>
              <div className="relative">
                <input
                  name="genre"
                  onChange={handleChange}
                  type="text"
                  className="w-full rounded-lg border-2 border-purple-300 p-4 text-sm shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-200"
                  placeholder={labels.addPrice}
                />
              </div>
            </div>

            <div>
              <label className="sr-only">Description</label>
              <div className="relative">
                <textarea
                  name="description"
                  onChange={handleChange}
                  className="w-full rounded-lg border-2 border-purple-300 p-4 text-sm shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-200"
                  placeholder={labels.addDescription}
                ></textarea>
              </div>
            </div>

            {isError.isError && (
              <div role="alert" className="rounded border-4 border-red-500 bg-red-50 p-4">
                <strong className="block font-semibold text-red-800">Something went wrong</strong>
                <p className="mt-2 text-sm text-red-700">{isError.message}</p>
              </div>
            )}

            {!isLoading ? (
              <button
                disabled={formValidation}
                type="submit"
                className={`w-full rounded-lg px-5 py-3 text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                  formValidation ? "bg-gray-400 cursor-not-allowed" : ""
                }`}
              >
                Submit
              </button>
            ) : (
              <button disabled className="w-full rounded-lg px-5 py-3 text-sm font-medium text-white bg-gray-400 cursor-not-allowed">
                Loading...
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateGame;
