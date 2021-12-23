const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menuItem');
const hamburger = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.closeIcon');
const menuIcon = document.querySelector('.menuIcon');
const menuArrow1 = document.querySelector('.menu-arrow1');
const menuArrow2 = document.querySelector('.menu-arrow2');
const menuArrow3 = document.querySelector('.menu-arrow3');
const modalContainer = document.querySelector('.modal');

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
