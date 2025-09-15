// Scroll color change
const nav = document.getElementById('navbar');
const onScroll = () => {
  if (window.scrollY > 10) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
};
onScroll();
window.addEventListener('scroll', onScroll);

// Mobile menu toggle
const toggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('nav-menu');

toggle.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('show');
  toggle.setAttribute('aria-expanded', String(isOpen));
});

// Close menu when a link is clicked (mobile)
document.querySelectorAll('.nav-link').forEach(a => {
  a.addEventListener('click', () => menu.classList.remove('show'));
});