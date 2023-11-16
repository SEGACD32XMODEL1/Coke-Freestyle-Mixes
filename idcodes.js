// Hamburger Menu
const burgerIcon = document.querySelector("#burger");
const navbarMenu = document.querySelector("#navlinks");

burgerIcon.addEventListener("click", (event) => {
  navbarMenu.classList.toggle("is-active");
  event.preventDefault();
});
