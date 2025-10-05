// basic interactivity: year, nav toggle, simple contact action, smooth scroll
document.getElementById('year').textContent = new Date().getFullYear();

const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
  // animate icon
  navToggle.classList.toggle('active');
});

// close mobile nav after clicking a link
nav.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    if (nav.classList.contains('open')) nav.classList.remove('open');
  });
});

// smooth scroll for anchors
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  });
});

// pseudo-send for contact form (no backend)
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');
const sendBtn = document.getElementById('sendBtn');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  sendBtn.disabled = true;
  status.textContent = 'Sending...';

  // simulate send
  setTimeout(() => {
    status.textContent = 'Thanks! I will reply soon. (This is a demo — integrate a backend or email service)';
    sendBtn.disabled = false;
    form.reset();
  }, 900);
});