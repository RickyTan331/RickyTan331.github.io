// Initialise AOS (already done inline, but okay if loaded twice)
AOS.init({ once:true, duration:800, offset:120 });

// Navbar shrink on scroll
const nav = document.querySelector('.navbar');
function toggleNavShrink() {
  nav.classList.toggle('scrolled', window.scrollY > 50);
}
window.addEventListener('load', toggleNavShrink);
window.addEventListener('scroll', toggleNavShrink);
