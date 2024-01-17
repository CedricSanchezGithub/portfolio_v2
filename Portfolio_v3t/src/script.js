// const burgerNav = document.querySelector("#navBurger");
// const navMobile = document.querySelector("#navMobile");

// burger.addEventListener("click", (e) => {
//   console.log("click");
//   e.stopPropagation()
//   console.log(navMobile.classList.contains("navRanged"));

// });

// Animation burger (oui fait par moi même)

const burger = document.querySelector(".burger-container");
const burgerSlice1 = document.querySelector(".burger-slice-1");
const burgerSlice2 = document.querySelector(".burger-slice-2");
const burgerSlice3 = document.querySelector(".burger-slice-3");
const menu = document.querySelector(".menu-deroulant");

burger.addEventListener("click", () => {
  burgerSlice1.classList.toggle("burger-slice-1-active");
  burgerSlice2.classList.toggle("burger-slice-2-active");
  burgerSlice3.classList.toggle("burger-slice-3-active");
  menu.classList.toggle("menu-active");
});
