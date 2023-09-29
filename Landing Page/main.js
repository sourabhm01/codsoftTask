// Mobile navigation menu
const burger = document.querySelector('.header__burger');
const nav = document.querySelector('.header__nav');
const links = document.querySelectorAll('.header__link');

burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  nav.classList.toggle('active');
});

links.forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
    burger.classList.remove('open');
  });
});

// Scroll to top button
const toTopButton = document.querySelector('.to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    toTopButton.classList.add('active');
  } else {
    toTopButton.classList.remove('active');
  }
});

// Smooth scrolling
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const section = document.querySelector(e.target.hash);
    section.scrollIntoView({ behavior: 'smooth' });
  });
});