import React from "react";
import { ButtonView } from "./ButtonView.jsx";
import { useState } from "react";

function SingleGame({ game }) {
  const [selectedGame, setSelectedGame] = useState(null);

  const handleViewClick = (game) => {
    setSelectedGame(game);
  };

  const handleCloseClick = () => {
    setSelectedGame(null);
  };

  return (
    <>
      <tr key={game.id} className="hover:bg-yellow-100 transition-colors">
        <td className="whitespace-nowrap px-4 py-4 text-xl text-purple-900  font-bold">{game.title}</td>
        <td className="whitespace-nowrap px-4 py-4 font-medium text-gray-700">{game.platform}</td>
        <td className="whitespace-nowrap px-4 py-4  font-medium text-gray-700">{game.genre}</td>
        <td className="whitespace-nowrap font-medium px-4  py-4">{game.price}</td>

        <td className="whitespace-nowrap px-4 py-4">
          <ButtonView game={game} onClick={() => handleViewClick(game)} />
        </td>
        <td>
          <button className="inline-block rounded-full bg-purple-600 px-4 py-2 text-xs font-bold text-white hover:bg-purple-700 m-2.5">ADD TO CART</button>
        </td>
      </tr>
      {selectedGame && (
        <tr className="mt-4 p-4 bg-yellow-100 rounded-lg shadow-lg ">
          <td colSpan="6">
            <div className="flex justify-between items-start">
              <h2 className="text-2xl font-bold text-gray-900">{selectedGame.title}</h2>
              <button onClick={handleCloseClick} className="ml-auto text-gray-700 hover:text-gray-900 text-xl font-bold mr-10">
                X
              </button>
            </div>
            <img src={selectedGame.image} alt={selectedGame.title} className="w-32 h-32 object-cover mt-4 mb-2" />
            <p className="mt-2">
              <strong>Genre:</strong> {selectedGame.genre}
            </p>
            <p className="mt-1">
              <strong>Platform:</strong> {selectedGame.platform}
            </p>
            <p className="mt-1">
              <strong>Price:</strong> {selectedGame.price}
            </p>
            <p className="mt-1">
              <strong>Description:</strong> {selectedGame.description}
            </p>
          </td>
        </tr>
      )}
    </>
  );
}

export default SingleGame;
