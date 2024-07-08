import { useState } from "react";
import styles from "./app.module.css";

function App() {
  const [todos, setTodos] = useState([]);

  const [input, setInput] = useState("");

  const addTodo = () => {
    if (!input.length) return;
    const id = self.crypto.randomUUID();
    const title = input;
    setTodos([...todos, { id, title }]);
    setInput("");
  };
  const handleOnChange = (e) => {
    setInput(e.target.value);
  };
  const handleDelete = (e) => {
    const newList = todos.filter((todo) => todo.id !== e.target.id);
    setTodos(newList);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo();
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.img_container}>
          <img src="mario.png"></img>
          <h1>GAME ADDER</h1>
        </div>
        <hr></hr>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input value={input} placeholder="Add your favorite game" type="text" onChange={handleOnChange}></input>
          <button type="submit" onClick={addTodo}>
            ADD
          </button>
        </form>

        <div className={styles.list_container}>
          <ul>
            {todos.map((todo) => (
              <li key={todo.id}>
                {todo.title}
                {""}
                <button id={todo.id} onClick={handleDelete}>
                  X
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
