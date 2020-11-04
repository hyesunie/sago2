import { Header } from "./components/header/header.js";
import { Sidebar } from "./components/sidebar/sidebar.js";
import { Footer } from "./components/footer/footer.js";

function init() {
  initHeader();
  initFooter();
  initSideBar();
}

function initFooter() {
  const footer = new Footer();
  const footerContainer = document.querySelector("#footer");
  footerContainer.innerHTML = footer.getBody();
}

function initHeader() {
  const header = new Header();
  const headerContainer = document.querySelector("#header");
  headerContainer.innerHTML = header.getBody();
}

function initSideBar() {
  const sidebar = new Sidebar();
  const sidebarContainer = document.querySelector("#sidebar");
  sidebarContainer.innerHTML = sidebar.getBody();
}

document.addEventListener("DOMContentLoaded", () => {
  init();
});
