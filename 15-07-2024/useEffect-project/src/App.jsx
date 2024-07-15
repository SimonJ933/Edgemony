import { useState } from "react";
import { useEffect } from "react";
import styles from "./App.module.css";

function App() {
  const [count, setCount] = useState(1);
  const [post, setPost] = useState(null);

  const handleClick = () => {
    setCount(count + 1);
  };

  const fetchPost = async (id) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      const data = await response.json();
      setPost(data);
    } catch (error) {
      console.error("Error fetching post:", error);
    }
  };

  useEffect(() => {
    fetchPost(count);
  }, [count]);

  return (
    <div className={styles.app}>
      <h1 className={styles.counter}>ID: {count}</h1>
      {post && (
        <div className={styles.post}>
          <h2 className={styles.post_title}>{post.title}</h2>
          <p className={styles.post_body}>{post.body}</p>
        </div>
      )}
      <button className={styles.button} onClick={handleClick}>
        Next Post
      </button>
    </div>
  );
}

export default App;

// Stato:
//aggiunto post per gestire il singolo post.

// handleClick:
// incrementa il contatore (count).

// fetchPost:
// Una funzione asincrona che recupera il post basato sull'ID (che ora è gestito dal contatore).

// useEffect:
// Questo effetto viene eseguito ogni volta che count cambia, richiamando fetchPost con il nuovo valore di count.

// Render:
// Mostra il titolo e il corpo del post corrente.
// Un pulsante per incrementare il contatore e quindi passare al prossimo post.
