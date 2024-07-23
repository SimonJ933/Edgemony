import { NavLink } from "react-router-dom";
import { labels } from "../data/labels";
const menuList = [{ name: labels.navHome, path: "/" }];

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between py-2 px-4 bg-gradient-to-r from-pink-300 via-yellow-300 to-green-300">
      <h1 className="font-bold text-xl">Gamer’s Treasure Trove</h1>
      <ul className="flex gap-4 text-xl font-bold">
        {menuList.map((item, index) => (
          <li key={index}>
            <NavLink to={item.path}>{item.name}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
