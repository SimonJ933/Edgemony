import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Header } from "./components/Header/Header.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { Main } from "./components/Main/Main.jsx";
import { Section } from "./components/Main/Main.jsx";
import posts from "./data.json";

function App() {
  return (
    <>
      <Header />
      <Section />
      <Footer />
    </>
  );
}

export default App;
