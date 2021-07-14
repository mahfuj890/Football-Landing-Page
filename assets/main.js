//Nav Menu Resposnive
var expandButton = document.querySelectorAll(".dropdown_list");
var dropdown_items = document.querySelectorAll(".dropdown_items_area");
var dropdownIcon = document.querySelectorAll(".dropdown_icon1");
expandButton.forEach((e) => {
  e.addEventListener("click", () => {
e.classList.toggle("open");


  });
});

//Hamburger Icon
let hamburger = document.querySelector(".hamburger");
let navMenu = document.querySelector(".nav_menu_area");
let headerWrapper = document.querySelector(".header_wrapper");

hamburger.addEventListener("click", mobileMenu);
function mobileMenu() {
    hamburger.classList.toggle("hamburger_active");
    navMenu.classList.toggle("navbar_active");
    headerWrapper.classList.toggle("header_color_active")

}
