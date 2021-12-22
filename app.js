/* eslint-disable linebreak-style */
/* eslint-disable func-names */
/* eslint-disable linebreak-style */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable linebreak-style */
/* eslint-disable space-in-parens */
/* eslint-disable linebreak-style */
const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menuItem');
const hamburger = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.closeIcon');
const menuIcon = document.querySelector('.menuIcon');
const menuArrow1 = document.querySelector('.menu-arrow1');
const menuArrow2 = document.querySelector('.menu-arrow2');
const menuArrow3 = document.querySelector('.menu-arrow3');
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
menuItems.forEach(function (menuItem) {
  menuItem.addEventListener('click', toggleMenu);
});
