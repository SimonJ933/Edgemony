import { getHeaderHTML } from "./components/header.js";
import { getMainHTML } from "./components/main.js";
import { getFooterHTML } from "./footer.js";
const appEl = document.querySelector("#app");

if (appEl) {
  renderPage(appEl);
}

function renderPage(appEl) {
  const header = getHeaderHTML();
  const main = getMainHTML();
  const footer = getFooterHTML();

  const html = header + main + footer;
  appEl.innerHTML = html;
}
