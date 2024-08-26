import React from "react";
import { deleteGame } from "../API/GamesClient";
import { useEffect, useState } from "react";
import { getGamesList } from "../API/GamesClient";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ButtonDelete({ game }) {
  const [gamesList, setGamesList] = useState([]);
  const notify = (message) => toast(message);
  const getGames = async () => {
    try {
      const data = await getGamesList();
      setGamesList(data);
    } catch (e) {
      console.log(e);
    } finally {
      //   setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await deleteGame(id);
      console.log(res);
      notify(`The Game ${id} Has Been Deleted`);

      //   setIsLoading(true);
      getGames();
    } catch (error) {
      // console.log("Error:", error);
    }
  };
  useEffect(() => {
    getGames();
  }, []);
  return (
    <button
      className="inline-block rounded-full bg-purple-600 px-4 py-2 text-xs font-bold text-white hover:bg-purple-700 m-2.5"
      onClick={() => handleDelete(game.id)}
    >
      DELETE
    </button>
  );
}

export default ButtonDelete;
