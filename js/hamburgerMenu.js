
//Menu hamburger
const menuBtn = document.querySelector('.hamburger');
const menuNav = document.querySelector('.nav__menu');

menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('isActive');
    menuNav.classList.toggle('isActive');
});