function Header() {
  return (
    <header>
      <div className="container">
        <div className="wrapper">
          <div className="logo">FAKE APPLE</div>
          <Menu />
        </div>
      </div>
    </header>
  );
}

function Menu() {
  return (
    <nav className="nav">
      <ul className="list">
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </ul>
    </nav>
  );
}

function MenuItem() {
  return (
    <li className="item">
      <a href="#">Contact Us</a>
    </li>
  );
}

export { Header };
