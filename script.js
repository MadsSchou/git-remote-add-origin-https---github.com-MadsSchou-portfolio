/*Burgermenu*/
const btn = document.querySelector(".toggle-btn");
const menu = document.querySelector(".main-menu");
const menuimg = btn.querySelector("img");
function toggleMenu() {
  menu.classList.toggle("shown");
  const menuShown = menu.classList.contains("shown");

  if (menuShown) {
    console.log(menuShown);
    menuimg.src = "billeder/luk.svg";
  } else {
    console.log(menuShown);
    menuimg.src = "billeder/burgermenu.svg";
  }
}

btn.addEventListener("click", toggleMenu);
