
const navbar = document.querySelector('.navbar');

let prevScrollPos = window.pageYOffset;

window.addEventListener('scroll', () => {
    let currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
        navbar.classList.add('active');
    } else {
        navbar.classList.remove('active');
    }

    prevScrollPos = currentScrollPos;
});
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});
