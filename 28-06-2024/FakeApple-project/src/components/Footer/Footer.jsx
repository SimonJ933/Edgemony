import "./Footer.css";

export const Footer = (props) => {
  return (
    <footer className="footer">
      <div className="container">
        <MenuList />
        <div className="logo">FAKE APPLE</div>
      </div>
    </footer>
  );
};

function MenuList() {
  const menus = [
    {
      id: 1,
      label: "Scopri e Acquista",
      items: [{ label: "Iphone" }, { label: "Ipad" }, { label: "Mac" }, { label: "Watch" }, { label: "AirPods" }],
    },

    {
      id: 2,
      label: "Intrattenimento",
      items: [{ label: "Apple One" }, { label: "Apple One" }, { label: "Apple TV+" }, { label: "Apple Music" }],
    },

    {
      id: 3,
      label: "Account",
      items: [{ label: "Gestisci il tuo ID Apple" }, { label: "Account Apple Store" }, { label: "iCloud.com" }],
    },
  ];

  return (
    <ul className="menu">
      {menus.map((menu) => (
        <Menu key={menu.id} menu={menu} />
      ))}
    </ul>
  );
}

function Menu(props) {
  const { label, items = [], href = "#" } = props.menu;

  return (
    <li className="item-footer">
      <a href={href}>{label}</a>

      {Boolean(items.length) && (
        <ul>
          {items.map((item, index) => (
            <Menu key={index} menu={item} />
          ))}
        </ul>
      )}
    </li>
  );
}

export default Footer;
