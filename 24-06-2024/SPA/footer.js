function getFooterHTML() {
  const menuHTML = getMenuHTML();

  return `<footer class="footer">
          <div class="container">
              <div class="wrapper">
                  <div class="logo">Fake-Apple-Online</div>
                  <nav class="nav">
                      ${menuHTML}
                  </nav>
              </div>
          </div>
      </footer>`;
}

function getMenuHTML() {
  const menuItems = [
    {
      label: "Scopri e acquista",
      children: [{ label: "Mac" }, { label: "Ipad" }, { label: "Iphone" }],
    },
  ];

  return `
      <ul class="menu">
          ${menuItems.map((item) => getMenuItemHTML(item)).join("")}
      </ul>
      `;
}

function getMenuItemHTML(options) {
  const { label, href = "#", children = [] } = options;

  const subitemsHTML = children.map((item) => `<li class="item subitem">${item.label}</li>`).join("");
  const subMenuHTML = "<ul>" + subitemsHTML + "</ul>";

  return `<li class="item">
      <a href="${href}">${label}</a>
      ${children.length > 0 ? subMenuHTML : ""}
    </li>`;
}

export { getFooterHTML };
