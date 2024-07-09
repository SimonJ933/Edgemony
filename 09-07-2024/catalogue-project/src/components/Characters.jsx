import styles from "./characters.module.css";

function Character({ character, onClick }) {
  const { id, name, lastName, franchise } = character;

  return (
    <li>
      <h3>NAME:</h3>
      <p>{name}</p>
      <h3>LAST NAME:</h3>
      <p>{lastName}</p>
      <h3>GAME-FRANCHISE:</h3>
      <p> {franchise}</p>
      <button id={id} onClick={onClick}>
        Delete Character
      </button>
    </li>
  );
}

export { Character };
