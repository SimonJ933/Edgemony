function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="wrapper">
          <div className="logo">Fake-Apple-Online</div>
          <nav className="nav">
            <Menu />
          </nav>
        </div>
      </div>
    </footer>
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
      <a href="#">Scopri i nostri prodotti</a>
    </li>
  );
}

export { Footer };
