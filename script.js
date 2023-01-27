const openMenu = document.querySelector('.menu_icon');
const closeMenu = document.querySelector('.close_menu_icon');
const menu = document.querySelector('.menu_items');
const links = document.querySelectorAll('.menu_items ul li');
const portfolioSection = document.querySelector('.portfolio_work');
const section = document.createElement('section');
section.className = 'portfolio_work';
const form = document.querySelector('form');
const email = document.getElementById('email');
const emailError = document.querySelector('.error');

const portfolioData = [
  {
    id: 1,
    name: 'Zicomms',
    image: './images/zicomms.png',
    technologies: ['NextJS', 'TailwindCSS', 'Javascript', 'MongoDB'],
    link: 'https://zicomm-v2.vercel.app/',
    source: 'https://github.com/Ezzywealth/Zicomm2.0',
    description:
      'Zicomm2.0 is a simple web e-commerce application for furniture. Users can filter their search from the listed furnitures using the filter tools provided, order item and also make payment using paystack and paypal',
  },
  {
    id: 2,
    name: 'Forkify Recipe',
    image: './images/forkify.png',
    technologies: ['NextJS', 'TailwindCSS', 'Javascript'],
    link: 'https://forkify-nextjs.vercel.app/',
    source: 'https://github.com/Ezzywealth/forkify-nextjs',
    description:
      'Forkify is a simple web application that helps users search for recipes to their favorite meals and how to cook these meals',
  },
  {
    id: 3,
    name: 'Apple clone Redesign',
    image: './images/appleclone.png',
    technologies: [
      'Typescript',
      'NextJs',
      'TailwindCSS',
      'headless-ui',
      'sanityIO',
    ],
    link: 'https://apple-clone-neon.vercel.app/',
    source: 'https://github.com/Ezzywealth/apple-clone-typescript',
    description:
      "Apple clone is a replica of one of apple's website design for selling apple product. This project implements ordering items and payment gateway.",
  },
  {
    id: 4,
    name: 'Todolist',
    image: './images/todolists.png',
    technologies: ['css', 'Javascript', 'html'],
    link: 'https://ezzywealth.github.io/todolist-project',
    source: 'https://github.com/Ezzywealth/todolist-project',
    description:
      'This is a JavaScript project that helps users create a To-Do list for everyday. The user would be able to create, edit, delete single todos and also mark several todos as completed and delete those…',
  },
  {
    id: 5,
    name: 'my Portfolio',
    image: './images/bankist.png',
    technologies: ['ReactJS', 'TailwindCSS', 'Javascript'],
    link: 'https://eudiomuno.vercel.app/',
    source: 'https://github.com/Ezzywealth/nextportfolio',
    description:
      'This is a simple portfolio website built using NextJS and TailwindCSS, to showcase some of my work as a software developer',
  },
  {
    id: 6,
    name: 'The Bankist',
    image: './images/Snapshoot Portfolio-desktop.jpg',
    technologies: ['TailwibdCSS', 'Javascript', 'ReactJS'],
    link: 'https://bankist-ezzy.netlify.app/',
    source: 'https://github.com/Ezzywealth/newBankist',
    description:
      'This is a web mini app for financial transactions. It enables it users to send money to other users, borrow loans based on certain conditions, close their own account',
  },
];

// functionality for opening the menu bar
const menuOpen = () => {
  menu.style.display = 'flex';
};

// functionality for closing the menu bar
const menuClose = () => {
  menu.style.display = 'none';
};

openMenu.addEventListener('click', menuOpen);
closeMenu.addEventListener('click', menuClose);
links.forEach((link) => link.addEventListener('click', menuClose));

// functionality to generate the modal markup

const handleModal = (item) => {
  const [first, second, third] = item.technologies;
  const container = document.querySelector('.main_section');
  const modal = document.querySelector('.modal');
  modal.style.display = 'none';
  modal.style.display = 'flex';

  const div1 = document.createElement('div');
  div1.className = 'modal_item';

  const img = document.createElement('img');
  const imgContainer = document.createElement('div');
  const span = document.createElement('span');
  const span2 = document.createElement('span2');
  span2.className = 'close_icon_container';
  imgContainer.className = 'modal_img_container';
  span.className = 'close_icon';
  img.src = item.image;
  img.alt = item.name;
  span.appendChild(span2);
  span2.innerText = 'X';
  span.addEventListener('click', () => {
    modal.style.display = 'none';
  });
  div1.appendChild(span);
  img.className = 'modal_image';

  const div3 = document.createElement('div');
  div3.className = 'modal_text';

  const h2 = document.createElement('h2');
  h2.className = 'work_title';

  const ul = document.createElement('ul');
  ul.className = 'portfolio_techs';

  const li1 = document.createElement('li');
  li1.innerText = first;

  const li2 = document.createElement('li');
  li2.innerText = second;

  const li3 = document.createElement('li');
  li3.innerText = third;

  const p = document.createElement('p');
  p.innerText = item.description;
  p.className = 'portfolio_description';

  const div4 = document.createElement('div');
  div4.className = 'buttons';

  const button1 = document.createElement('button');
  const button2 = document.createElement('button');
  const a1 = document.createElement('a');
  const a2 = document.createElement('a');
  const i1 = document.createElement('i');
  const i2 = document.createElement('i');

  button1.appendChild(a1);
  button2.appendChild(a2);
  button1.appendChild(a1);
  button1.appendChild(i1);
  button2.appendChild(a2);
  button2.appendChild(i2);

  a1.innerText = 'See Live';
  a2.innerText = 'See Source';
  i1.className = 'fa-solid fa-arrow-right';
  i2.className = 'fa-brands fa-github';

  a1.href = item.link;
  a1.target = '_blank';
  a1.className = 'anchor';
  a2.className = 'anchor';
  a2.href = item.source;
  a2.target = '_blank';

  button1.className = 'modal_button';
  button2.className = 'modal_button';

  imgContainer.appendChild(img);
  div1.appendChild(imgContainer);
  div1.appendChild(div3);
  div3.appendChild(h2);
  div3.appendChild(ul);
  div3.appendChild(p);
  div3.appendChild(div4);
  div4.append(button1);
  div4.append(button2);
  h2.innerText = item.name;
  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);

  modal.appendChild(div1);
  container.appendChild(modal);
};

// logic to insert the html elements of the portfolio section
for (let i = 0; i < portfolioData.length; i += 1) {
  const [first, second, third] = portfolioData[i].technologies;
  const div1 = document.createElement('div');
  div1.className = 'work_item';

  const div2 = document.createElement('img');
  div2.className = 'portfolio_image';
  div2.src = portfolioData[i].image;
  div2.alt = portfolioData[i].name;

  const div3 = document.createElement('div');
  div3.className = 'portfolio_text';

  const h2 = document.createElement('h2');
  h2.className = 'work_title';

  const ul = document.createElement('ul');
  ul.className = 'portfolio_techs';

  const li1 = document.createElement('li');
  li1.innerText = first;

  const li2 = document.createElement('li');
  li2.innerText = second;

  const li3 = document.createElement('li');
  li3.innerText = third;

  const button = document.createElement('button');
  button.innerText = 'See Project';
  button.className = 'portfolio_button';

  button.addEventListener('click', () => {
    handleModal(portfolioData[i]);
  });

  div1.appendChild(div2);
  div1.appendChild(div3);
  div3.appendChild(h2);
  div3.appendChild(ul);
  div3.append(button);
  h2.innerText = portfolioData[i].name;
  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);

  portfolioSection.appendChild(div1);
}

// functionality for form validation

email.addEventListener('change', () => {
  emailError.style.display = 'none';
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (email.value.toLowerCase() !== email.value) {
    emailError.style.display = 'flex';
  } else {
    form.submit();
  }
});
