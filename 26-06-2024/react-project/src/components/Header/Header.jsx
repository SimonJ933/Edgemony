import "./Header.css";
function Header(props) {
  const { brand, children, ...attrs } = props;

  return (
    <header {...attrs}>
      <div className="header-container">
        <div className="logo">FAKE APPLE</div>
        <Menu />
      </div>
    </header>
  );
}

function Menu() {
  const items = [
    { label: "About us" },
    { label: "Official-Site", href: "https://www.apple.com/it/" },
    { label: "Store", href: "https://www.apple.com/it/store" },
  ];

  return (
    <nav className="header-nav">
      <ul className="header-list">
        {items.map((item, index) => (
          <MenuItem key={`${item.label}-${index}`} label={item.label} href={item.href} />
        ))}
      </ul>
    </nav>
  );
}

function MenuItem(props) {
  const { label, href = "#" } = props;
  return (
    <li className="item">
      <a href={href}>{label}</a>
    </li>
  );
}

export { Header };
