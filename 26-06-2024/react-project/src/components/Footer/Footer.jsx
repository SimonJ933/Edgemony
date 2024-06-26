import "./Footer.css";

function Footer(props) {
  const { brand, children, ...attrs } = props;

  return (
    <footer {...attrs}>
      <div className="footer-container">
        <div className="logo-footer">FAKE APPLE</div>
        <Menu />
      </div>
    </footer>
  );
}

function Menu() {
  const items = [
    { label: "Scopri e acquista" },
    { label: "Iphone", href: "#" },
    { label: "Ipad", href: "#" },
    { label: "Mac", href: "#" },
    { label: "TV e Casa", href: "#" },
  ];

  return (
    <nav className="footer-nav">
      <ul className="footer-list">
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
    <li className="footer-item">
      <a href={href}>{label}</a>
    </li>
  );
}

export { Footer };
