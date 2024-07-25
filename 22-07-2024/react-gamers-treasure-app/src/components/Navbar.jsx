import { NavLink } from "react-router-dom";
import { labels } from "../data/labels";

const menuList = [
  { name: labels.navHome, path: "/" },
  { name: labels.navCreate, path: "create" },
  { name: labels.navEdit, path: "edit" },
];

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between py-2 px-4 bg-gradient-to-r from-pink-300 via-yellow-300 to-green-300">
      <div className="flex items-center">
        <img src="icons8-treasure-100.png" className="h-16" alt="Treasure Icon" />
      </div>
      <h1 className="text-4xl font-semibold text-gray-800 text-center bg-gradient-to-r from-yellow-600 via-orange-400 to-red-500 bg-clip-text text-transparent py-2 px-4 rounded-lg ">
        {labels.gameTreasure}
      </h1>
      <ul className="flex gap-4 text-xl font-bold text-purple-900">
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
