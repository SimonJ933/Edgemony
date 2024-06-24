function getHeaderHTML() {
  const menuHTML = getMenuHTML();

  return `
      <header>
          <div class="container">
              <div class="wrapper">
                  <div class="logo">Fake-Apple</div>
                  ${menuHTML}
              </div>
          </div>
      </header>
      `;
}

function getMenuHTML() {
  const menuItems = [
    { label: "Reference", href: "https://www.apple.com/it/" },
    { label: "Store", href: "https://www.apple.com/it/store" },
    { label: "Mac" },
    { label: "Ipad" },
    { label: "Iphone" },
    { label: "TV & Casa" },
  ];
  return `
    <nav class="nav">
        <ul class="list">
            ${menuItems.map((item) => getMenuItemHTML(item)).join("")}
        </ul>
    </nav>
    `;
}

function getMenuItemHTML(options = {}) {
  const { label, href = "#" } = options;
  return `<li class="item">
    <a href = "${href}">${label}</a>
    </li>
    `;
}

export { getHeaderHTML, getMenuHTML, getMenuItemHTML };
