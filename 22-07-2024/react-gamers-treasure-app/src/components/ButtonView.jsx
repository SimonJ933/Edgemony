import React from "react";
import { Link } from "react-router-dom";

function ButtonView({ game }) {
  return (
    <div>
      <Link to={`games/${game.id}`} className="inline-block rounded-full bg-purple-600 px-4 py-2 text-xs font-bold text-white hover:bg-purple-700 m-2.5">
        VIEW PRODUCT
      </Link>
    </div>
  );
}

export { ButtonView };
