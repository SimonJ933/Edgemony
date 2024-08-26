export const getGamesList = async () => {
  try {
    const res = await fetch("http://localhost:3000/games");
    return res.json();
  } catch (error) {
    throw Error(error);
  }
};

export const getGameDetails = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/games-detail/${id}`);
    return res.json();
  } catch (error) {
    throw Error(error);
  }
};

export const addGame = async (body) => {
  try {
    await fetch("http://localhost:3000/games", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ id: self.crypto.randomUUID(), ...body }),
    });

    const res = await fetch("http://localhost:3000/games-detail", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ id: self.crypto.randomUUID(), ...body }),
    });
    return res.json();
  } catch (error) {
    throw Error(error);
  }
};
export const editGame = async (id, body) => {
  try {
    // Aggiorna i dati del gioco principale
    const gameResponse = await fetch(`http://localhost:3000/games/`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const gameData = await gameResponse.json();

    // Aggiorna i dettagli del gioco
    const gameDetailResponse = await fetch(`http://localhost:3000/games-detail/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const gameDetailData = await gameDetailResponse.json();

    return { gameData, gameDetailData };
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteGame = async (id) => {
  try {
    await fetch(`http://localhost:3000/games/${id}`, {
      method: "DELETE",
    });
    const res = await fetch(`http://localhost:3000/games-detail/${id}`, {
      method: "DELETE",
    });
    return res.json();
  } catch (error) {
    throw Error(error);
  }
};
