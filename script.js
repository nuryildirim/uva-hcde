// Get the current page URL path
const currentPath = window.location.pathname.split('/').pop();

// Select all links in the navbar
const navLinks = document.querySelectorAll('.nav-link');

// Loop through the links and add the active class if the href matches the path
navLinks.forEach(link => {
  if (link.getAttribute('href') === currentPath) {
    link.classList.add('active');
  }
});

const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('active');
});
