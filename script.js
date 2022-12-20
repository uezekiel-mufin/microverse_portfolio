"use strict";

const openMenu = document.querySelector(".menu_icon");
const closeMenu = document.querySelector(".close_menu_icon");
const menu = document.querySelector(".menu_items");
const links = document.querySelectorAll(".menu_items ul li");
const portfolio_section = document.querySelector(".portfolio_work");
let section = document.createElement("section");
section.className = "portfolio_work";
let div = document.createElement("div");
let h2 = document.createElement("h2");
let ul = document.createElement("ul");

const portfolioData = [
  {
    id: 1,
    name: "Multi-Post Stories Gain+Glory",
    image: "",
    technologies: ["Ruby on rails", "css", "Javascript", "html"],
    link: "https://github.com/Ezzywealth/microverse_portfolio",
  },
  {
    id: 2,
    name: "Multi-Post Stories Gain+Glory",
    image: "",
    technologies: ["Ruby on rails", "css", "Javascript", "html"],
    link: "https://github.com/Ezzywealth/microverse_portfolio",
  },
  {
    id: 3,
    name: "Multi-Post Stories Gain+Glory",
    image: "",
    technologies: ["Ruby on rails", "css", "Javascript", "html"],
    link: "https://github.com/Ezzywealth/microverse_portfolio",
  },
  {
    id: 4,
    name: "Multi-Post Stories Gain+Glory",
    image: "",
    technologies: ["Ruby on rails", "css", "Javascript", "html"],
    link: "https://github.com/Ezzywealth/microverse_portfolio",
  },
  {
    id: 5,
    name: "Multi-Post Stories Gain+Glory",
    image: "",
    technologies: ["Ruby on rails", "css", "Javascript", "html"],
    link: "https://github.com/Ezzywealth/microverse_portfolio",
  },
  {
    id: 6,
    name: "Multi-Post Stories Gain+Glory",
    image: "",
    technologies: ["Ruby on rails", "css", "Javascript", "html"],
    link: "https://github.com/Ezzywealth/microverse_portfolio",
  },
];

// functionality for opening the menu bar
const menuOpen = () => {
  menu.style.display = "flex";
};

// functionality for closing the menu bar
const menuClose = () => {
  menu.style.display = "none";
};

openMenu.addEventListener("click", menuOpen);
closeMenu.addEventListener("click", menuClose);
links.forEach((link) => link.addEventListener("click", menuClose));

// logic to insert the html elements of the portfolio section
for (let i = 0; i < portfolioData.length; i++) {
  let div1 = document.createElement("div");
  div1.className = "work_item";
  let div2 = document.createElement("div");
  div2.className = "portfolio_image";
  let div3 = document.createElement("div");
  div3.className = "portfolio_text";
  let h2 = document.createElement("h2");
  h2.className = "work_title";
  let ul = document.createElement("ul");
  ul.className = "portfolio_techs";
  let li1 = document.createElement("li");
  li1.innerText = portfolioData[i].technologies[0];
  let li2 = document.createElement("li");
  li2.innerText = portfolioData[i].technologies[1];
  let li3 = document.createElement("li");
  li3.innerText = portfolioData[i].technologies[2];

  let button = document.createElement("button");
  button.innerText = "See Project";
  button.className = "portfolio_button";
  let a = document.createElement("a");
  button.appendChild(a);
  // a.innerText = "See Project";
  // a.href = portfolioData[i].link;
  // a.target = "_blank";
  // a.className = "portfolio_link";

  div1.appendChild(div2);
  div1.appendChild(div3);
  div3.appendChild(h2);
  div3.appendChild(ul);
  div3.append(button);
  h2.innerText = portfolioData[i].name;
  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);

  portfolio_section.appendChild(div1);
}
