import React from "react";

function ButtonPreview({ game, onClick }) {
  return (
    <div>
      <button
        className="inline-block rounded-full bg-purple-600 px-4 py-2 text-xs font-bold text-white hover:bg-purple-700 m-2.5"
        onClick={() => onClick(game)}
      >
        PREVIEW
      </button>
    </div>
  );
}

export { ButtonPreview };
