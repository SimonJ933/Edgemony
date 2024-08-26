import { useState } from "react";
import { addGame } from "../API/GamesClient";
import { useNavigate } from "react-router-dom";
import { labels } from "../data/labels";
import GameForm from "../components/GameForm";
import { ToastContainer, toast } from "react-toastify";

function CreateGame() {
  const navigate = useNavigate();
  const notify = (message) => toast(message);

  const [isError, setIsError] = useState({
    message: "",
    isError: false,
  });

  const handleSubmit = async (value) => {
    try {
      const res = await addGame(value);
      console.log(res);
      // navigate("/");
      notify(`The Game ${value} has been added to the list`);
    } catch (error) {
      console.log(error);
      setIsError((prevState) => {
        return { ...prevState, message: error.message, isError: true };
      });
    }
  };

  return (
    <div className="font-barlow flex justify-center bg-gradient-to-r from-pink-300 via-yellow-300 to-green-300 min-h-screen py-16">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg bg-white p-6 rounded-lg shadow-xl">
          <h1 className="text-center text-3xl font-extrabold text-purple-900 sm:text-4xl">{labels.addGame}</h1>
          <p className="mx-auto mt-4 max-w-md text-center text-purple-900">{labels.addGameSub}</p>

          <GameForm onSubmit={handleSubmit} />
          {isError.isError && (
            <div role="alert" className="rounded border-l-4 border-red-500 bg-red-50 p-4 mt-4">
              <strong className="block font-medium text-red-800"> Something went wrong </strong>
              <p className="mt-2 text-sm text-red-700">{isError.message}</p>
            </div>
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default CreateGame;
