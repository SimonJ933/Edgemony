import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultLayout from "./components/DefaultLayout.jsx";
import GameDetailPage from "../src/Pages/GameDetailPage.jsx";
import ErrorPage from "./Pages/ErrorPage.jsx";
import CreateGame from "./Pages/AddGamePage.jsx";
import EditGamePage from "./Pages/EditGamePage.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "games/:id",
        element: <GameDetailPage />,
      },
      { path: "create", element: <CreateGame /> },
      { path: "edit", element: <EditGamePage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
