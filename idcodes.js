// Hamburger Menu
const burgerIcon = document.querySelector("#burger");
const navbarMenu = document.querySelector("#navlinks");
const imgSelect = document.querySelectorAll("img");

burgerIcon.addEventListener("click", (event) => {
  navbarMenu.classList.toggle("is-active");
  event.preventDefault();
});

//imgSelect.forEach((index) => index.classList.add("image"));
