import { useState } from "react";
import styles from "./app.module.css";
import { Character } from "./components/Characters.jsx";

const initialInput = { name: "", lastName: "", franchise: "" };

function App() {
  const [characters, setCharacters] = useState([]);

  const [input, setInput] = useState({ id: "", name: "", lastName: "", franchise: "" });

  const [filter, setFilter] = useState("");

  const [franchises, setFranchises] = useState(new Set());

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = self.crypto.randomUUID();
    const name = input.name;
    const lastName = input.lastName;
    const franchise = input.franchise;

    setCharacters([
      ...characters,
      {
        id,
        name,
        lastName,
        franchise,
      },
    ]);
    // condizione la quale ad ogni click del submit non mi venga renderizzato un altro button filter
    if (!franchises.has(franchise)) {
      setFranchises(new Set(franchises).add(franchise));
    }
    setInput(initialInput);
  };

  const handleChange = (e) => {
    setInput((prevState) => {
      return { ...prevState, [e.target.id]: e.target.value };
    });
  };

  const handleDelete = (id) => {
    // La funzione handleDelete ora accetta un id invece di un evento (e).
    // La funzione handleDelete trova il personaggio da eliminare e filtra la lista dei personaggi per escluderlo.
    // Dopo l'aggiornamento della lista dei personaggi, verifica se ci sono ancora personaggi appartenenti allo stesso franchise.
    // Se non ci sono, il franchise viene rimosso dal set dei franchise.
    const characterToDelete = characters.find((character) => character.id === id);
    const newCharacters = characters.filter((character) => character.id !== id);

    setCharacters(newCharacters);

    if (characterToDelete) {
      const franchise = characterToDelete.franchise;
      const isFranchiseEmpty = !newCharacters.some((character) => character.franchise === franchise);

      if (isFranchiseEmpty) {
        const newFranchises = new Set(franchises);
        newFranchises.delete(franchise);
        setFranchises(newFranchises);
      }
    }
  };
  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  return (
    <>
      <div className={styles.container}>
        <h1>ADD YOUR FAVORITE GAME CHARACTER </h1>
        <img src="ryu.webp" />
        <div className={styles.form_container}>
          <form onSubmit={handleSubmit}>
            <label>Character Name</label>
            <input id="name" placeholder="Enter Character Name" value={input.name} onChange={handleChange} />

            <label>Character Last Name</label>
            <input id="lastName" placeholder="Enter Character Last-Name" value={input.lastName} onChange={handleChange} />

            <label>Game Franchise</label>
            <input id="franchise" placeholder="Enter Game Franchise" value={input.franchise} onChange={handleChange} />

            <button type="submit">Add Character</button>
          </form>
          <label>Filter</label>
          <input onChange={handleFilter} />

          {[...franchises].map((franchise) => (
            <button key={franchise} onClick={() => setFilter(franchise)}>
              {franchise}
            </button>
          ))}
        </div>

        <div className={styles.characters_container}>
          <ul className={styles.characters_list}>
            {characters
              .filter((character) => character.franchise.includes(filter))
              .map((character) => {
                return <Character key={character.id} character={character} onClick={() => handleDelete(character.id)} />;
              })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
