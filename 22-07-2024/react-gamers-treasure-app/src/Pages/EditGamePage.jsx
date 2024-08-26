import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { editGame, getGameDetails } from "../API/GamesClient";
import { labels } from "../data/labels";
import GameForm from "../components/GameForm";
import { ToastContainer, toast } from "react-toastify";

function EditGamePage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [game, setGame] = useState(null);
  const [isError, setIsError] = useState({ message: "", isError: false });
  const notify = (message) => toast(message);

  const getGame = async (id) => {
    try {
      const data = await getGameDetails(id);
      setGame(data);
    } catch (error) {
      setIsError((prevState) => ({
        ...prevState,
        message: error.message,
        isError: true,
      }));
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      getGame(id);
    } else {
      setIsError({ message: "Invalid game ID", isError: true });
      setIsLoading(false);
    }
  }, [id]);

  const handleSubmit = async (value) => {
    try {
      const res = await editGame({ id, ...value });
      navigate(`/games/${id}`);
      notify(`The Game ${id} Has Been Edited`);
    } catch (error) {
      setIsError((prevState) => ({
        ...prevState,
        message: error.message,
        isError: true,
      }));
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="font-barlow flex justify-center bg-gradient-to-r from-pink-300 via-yellow-300 to-green-300 min-h-screen py-16">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg bg-white p-6 rounded-lg shadow-xl">
          <h1 className="text-center text-3xl font-extrabold text-purple-900 sm:text-4xl">{labels.editGames}</h1>
          <p className="mx-auto mt-4 max-w-md text-center text-purple-900">{labels.addGameSub}</p>

          <GameForm value={game} onSubmit={handleSubmit} />
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

export default EditGamePage;
