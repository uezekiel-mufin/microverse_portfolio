"use strict";

const openMenu = document.querySelector(".menu_icon");
const closeMenu = document.querySelector(".close_menu_icon");
const menu = document.querySelector(".menu_items");
const links = document.querySelectorAll(".menu_items ul li");

const menuOpen = () => {
  menu.style.display = "flex";
};

const menuClose = () => {
  menu.style.display = "none";
};

openMenu.addEventListener("click", menuOpen);
closeMenu.addEventListener("click", menuClose);
links.forEach((link) => link.addEventListener("click", menuClose));
