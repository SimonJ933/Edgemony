import { Outlet } from "react-router-dom";
import NavBar from "./Navbar.jsx";

function DefaultLayout() {
  return (
    <div>
      <NavBar />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default DefaultLayout;
