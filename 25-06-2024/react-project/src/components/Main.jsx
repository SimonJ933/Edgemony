function Main() {
  return (
    <main>
      <aside>
        <Sidebar />
      </aside>
      <section>
        Lista post <MainPosts />
      </section>
    </main>
  );
}

function Sidebar() {
  return (
    <div className="container">
      <ul className="list">
        <SidebarList />
        <SidebarList />
        <SidebarList />
        <SidebarList />
      </ul>
    </div>
  );
}

function SidebarList() {
  return (
    <li className="item">
      <p>Iphone</p>
    </li>
  );
}

function MainPosts() {
  return (
    <ul className="listposts">
      <MainList />
      <MainList />
      <MainList />
    </ul>
  );
}
function MainList() {
  return (
    <li className="mainItem">
      <h3>Iphone 14 pro</h3>
      <p>128gb di potenza pura, rara, fortissima</p>
    </li>
  );
}

export { Main };
