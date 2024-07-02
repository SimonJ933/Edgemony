import { Card } from "./Components/Card/Card.jsx";
import "./App.css";
import posts from "./data.json";
import { useState } from "react";

function App() {
  const [advice, setAdvice] = useState(posts[1]);

  return (
    <>
      <Card body={advice.body} title={advice.title} setAdvice={setAdvice} />
    </>
  );
}

export default App;
