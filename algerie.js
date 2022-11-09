const menuBtn = document.getElementById("menu-button");
const navBar = document.getElementById("navbar");
const menu = document.querySelector(".menu");

const offSet = 50;

menuBtn.addEventListener("click", () => {
  // On/Off Menu
  menu.classList.toggle("menu-open");
});

window.onscroll = () => {
  var top = window.scrollY;
  if (top >= 50) {

  }
}
