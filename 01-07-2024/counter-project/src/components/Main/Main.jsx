import posts from "../../data.json";
import { Counter } from "../Counter/Counter.jsx";
import RandomNumberGenerator from "../Random-Counter/RandomCounter.jsx";
import "./Main.css";

function Main() {
  return (
    <div className="main-container">
      {posts.map((article) => (
        <Card key={article.id} title={article.title} body={article.body} />
      ))}
    </div>
  );
}

function Card(props) {
  const { title, body } = props;
  return (
    <div className="card-el">
      <h1 className="card-title">{props.title}</h1>
      <p className="card-body">{props.body}</p>
      <Counter />
      <RandomNumberGenerator />
    </div>
  );
}

export { Main };
