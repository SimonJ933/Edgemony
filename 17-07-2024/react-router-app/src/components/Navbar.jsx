import { NavLink } from "react-router-dom";

const menuList = [
  { name: "Home", path: "/" },
  { name: "Cart", path: "/cart" },
];

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between py-2 px-4 bg-slate-300">
      <h1 className="font-bold text-xl">SHOPPING-POPPING</h1>
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
