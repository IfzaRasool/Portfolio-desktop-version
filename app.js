const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menuItem');
const hamburger = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.closeIcon');
const menuIcon = document.querySelector('.menuIcon');
const menuArrow1 = document.querySelector('.menu-arrow1');
const menuArrow2 = document.querySelector('.menu-arrow2');
const menuArrow3 = document.querySelector('.menu-arrow3');
const modalContainer = document.querySelector('.modal');
const portfolioJs = document.querySelector('.main-post-container');

modalContainer.style.display = 'none';
closeIcon.style.display = 'none';
menuArrow1.style.display = 'none';
menuArrow2.style.display = 'none';
menuArrow3.style.display = 'none';

function toggleMenu() {
  if (menu.classList.contains('showMenu')) {
    menu.classList.remove('showMenu');
    closeIcon.style.display = 'none';
    menuArrow1.style.display = 'none';
    menuArrow2.style.display = 'none';
    menuArrow3.style.display = 'none';
    menuIcon.style.display = 'block';
  } else {
    menu.classList.add('showMenu');
    closeIcon.style.display = 'block';
    menuArrow1.style.display = 'block';
    menuArrow2.style.display = 'block';
    menuArrow3.style.display = 'block';
    menuIcon.style.display = 'none';
  }
}
hamburger.addEventListener('click', toggleMenu);
menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', toggleMenu);
});

const workObject = [{
  Title: 'Multi-Post Stories',
  images: 'Icons/Rectangle.png',
  cardDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required, has been the industries standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text',
  languages: ['css', 'html', 'bootstrap', 'Ruby'],
  liveBtn: '#',
  sourceBtn: '#',
}];

for (let i = 0; i <= 4; i += 1) {
  for (let j = 0; j < workObject.length; j += 1) {
    const allWork = workObject[j];
    portfolioJs.innerHTML += `
  <section class="primary-post-sec3">
  <div class="work-place-img"></div>
  <h2>${allWork.Title}</h2>
  <p>${allWork.cardDescription}</p>
  <ul class="languages">
      <li>${allWork.languages[j]}</li>
      <li><img src=${allWork.images} alt="divide line1"></li>
      <li>${allWork.languages[j + 1]}</li>
      <li><img src=${allWork.images} alt="divide line2"></li>
      <li>${allWork.languages[j + 2]}</li>
      <li> <img src=${allWork.images} alt="divide line3"></li>
      <li> <img src=${allWork.images} alt="divide line3"></li>
      <li>${allWork.languages[j + 3]}</li>
  </ul>
  <button class="work-button"> See Project</button>
</section>
`;
  }
}

const openModalButtons = document.querySelectorAll('.work-button');
const appWrapper = document.querySelector('.app-wrap');
const modalClose = document.querySelector('.modal-close');

function openModal() {
  appWrapper.style.display = 'none';
  modalContainer.style.display = 'inherit';
}
openModalButtons.forEach((openModalButtons) => {
  openModalButtons.addEventListener('click', openModal);
});

function closeModal() {
  appWrapper.style.display = 'inherit';
  modalContainer.style.display = 'none';
}
modalClose.addEventListener('click', closeModal);
