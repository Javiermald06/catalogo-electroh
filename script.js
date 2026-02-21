// ============================================
// main.js — ElectroCasa Catálogo (Prototipo)
// ============================================

// Resaltar enlace de nav activo al hacer scroll
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 80) {
      current = section.id;
    }
  });
  navLinks.forEach(link => {
    link.style.color = link.getAttribute('href') === `#${current}` ? 'var(--text)' : '';
  });
});
