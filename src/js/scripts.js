const menu = document.getElementById("menu");
const menuButton = document.getElementById("menu-button");

menuButton.addEventListener("click", () =>{
  menuButton.firstElementChild.classList.toggle("top-bar__icon--active");
  menu.classList.toggle("navigation--active");
  document.body.classList.toggle("no-scroll");
});