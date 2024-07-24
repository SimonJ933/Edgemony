import React, { useState, useEffect } from "react";
import { getGamesList } from "../API/GamesClient.js";
import SingleGame from "./SingleGame.jsx";

const GamesTable = ({ filter }) => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    getGamesList().then((data) => {
      setGames(data);
    });
  }, []);

  return (
    <tbody className="w-full divide-y divide-gray-200 bg-white text-sm">
      {games
        .filter((game) => game.title.toLowerCase().includes(filter))
        .map((game) => (
          <SingleGame game={game} key={game.id} />
        ))}
    </tbody>
  );
};

export { GamesTable };
