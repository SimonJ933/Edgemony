import React from "react";
import { useRouteError } from "react-router-dom";
import ErrorComponent from "../components/ErrorComponent";
import { Link } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  return (
    <div>
      <ErrorComponent message={error.statusText || error.message}>
        <Link to={"/"} className="inline-block rounded-full bg-purple-600 px-4 py-2 text-xs font-bold text-white hover:bg-purple-700 m-2.5">
          Go back home
        </Link>{" "}
      </ErrorComponent>
    </div>
  );
}

export default ErrorPage;
