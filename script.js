"use strict";

const openMenu = document.querySelector(".menu_icon");
const closeMenu = document.querySelector(".close_menu_icon");
const menu = document.querySelector(".menu_items");
const links = document.querySelectorAll(".menu_items ul li");
let section = document.createElement("section");
section.className = "portfolio_work";
let div = document.createElement("div");
let h2 = document.createElement("h2");
let ul = document.createElement("ul");
let li = document.createElement("li");
let button = document.createElement("button");

const portfolioData = [
  {
    id: 1,
    name: "Multi-Post Stories Gain+Glory",
    image: "",
    technologies: ["Ruby on rails", "css", "Javascript", "html"],
    link: "",
  },
  {
    id: 2,
    name: "Multi-Post Stories Gain+Glory",
    image: "",
    technologies: ["Ruby on rails", "css", "Javascript", "html"],
    link: "",
  },
  {
    id: 3,
    name: "Multi-Post Stories Gain+Glory",
    image: "",
    technologies: ["Ruby on rails", "css", "Javascript", "html"],
    link: "",
  },
  {
    id: 4,
    name: "Multi-Post Stories Gain+Glory",
    image: "",
    technologies: ["Ruby on rails", "css", "Javascript", "html"],
    link: "",
  },
  {
    id: 5,
    name: "Multi-Post Stories Gain+Glory",
    image: "",
    technologies: ["Ruby on rails", "css", "Javascript", "html"],
    link: "",
  },
  {
    id: 6,
    name: "Multi-Post Stories Gain+Glory",
    image: "",
    technologies: ["Ruby on rails", "css", "Javascript", "html"],
    link: "",
  },
];


const menuOpen = () => {
  menu.style.display = "flex";
};

const menuClose = () => {
  menu.style.display = "none";
};

openMenu.addEventListener("click", menuOpen);
closeMenu.addEventListener("click", menuClose);
links.forEach((link) => link.addEventListener("click", menuClose));

// function tp create the html elements of the portfolio section
