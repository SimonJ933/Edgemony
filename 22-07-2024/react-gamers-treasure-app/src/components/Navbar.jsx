import { NavLink } from "react-router-dom";
import { labels } from "../data/labels";
const menuList = [
  { name: labels.navHome, path: "/" },
  { name: labels.navLogin, path: "create" },
];

const NavBar = () => {
  return (
    <nav className="flex items-center justify-around py-2 px-4 bg-gradient-to-r from-pink-300 via-yellow-300 to-green-300">
      <div>
        <img src="icons8-treasure-100.png" />
      </div>
      <h1 className="text-4xl font-semibold text-gray-800 text-center bg-gradient-to-r from-yellow-600 via-orange-400 to-red-500 bg-clip-text text-transparent py-2 px-4 rounded-lg ml-40">
        {labels.gameTreasure}
      </h1>
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
