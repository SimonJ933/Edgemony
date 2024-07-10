import React from "react";
import { Main } from "./Main";
import { Header } from "./Header.jsx";
import { Footer } from "./Footer.jsx";
function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Main />
      <Footer />
    </div>
  );
}

export { Layout };
