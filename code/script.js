// Basic interactions: mobile menu, smooth scroll, theme toggle, contact form
(function () {
  const menuToggle = document.getElementById('menuToggle');
  const nav = document.getElementById('nav');
  const themeToggle = document.getElementById('themeToggle');
  const yearEl = document.getElementById('year');

  // Year in footer
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile menu toggle
  menuToggle && menuToggle.addEventListener('click', function () {
    nav.classList.toggle('open');
    menuToggle.textContent = nav.classList.contains('open') ? '✕' : '☰';
  });

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href').slice(1);
      if (!targetId) return;
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Close mobile nav after click
        if (nav.classList.contains('open')) {
          nav.classList.remove('open');
          menuToggle.textContent = '☰';
        }
      }
    });
  });

  // Theme toggle: light/dark — stored in localStorage
  const THEME_KEY = 'portfolio_theme';
  function applyTheme(theme) {
    if (theme === 'light') {
      document.documentElement.style.setProperty('--bg', '#f6f8fb');
      document.documentElement.style.setProperty('--card', '#ffffff');
      document.documentElement.style.setProperty('--text', '#071422');
      document.documentElement.style.setProperty('--muted', '#5b6b76');
      themeToggle.textContent = '🌙';
    } else {
      document.documentElement.style.setProperty('--bg', '#0b0f12');
      document.documentElement.style.setProperty('--card', '#0f1720');
      document.documentElement.style.setProperty('--text', '#e6eef6');
      document.documentElement.style.setProperty('--muted', '#9aa3ad');
      themeToggle.textContent = '☀️';
    }
  }

  // initialize
  const saved = localStorage.getItem(THEME_KEY) || 'dark';
  applyTheme(saved);

  themeToggle && themeToggle.addEventListener('click', function () {
    const current = localStorage.getItem(THEME_KEY) || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    localStorage.setItem(THEME_KEY, next);
    applyTheme(next);
  });

  // Contact form: simple client-side validation & success message (if using no backend)
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      // If action is empty or default Formspree placeholder, show a friendly message and prevent submit
      const action = form.getAttribute('action') || '';
      if (action.includes('{your-id}') || action.trim() === '') {
        e.preventDefault();
        alert('Replace the form action with your Formspree endpoint or handle the form via JavaScript. (This is a demo message.)');
        return;
      }
      // otherwise allow default submit
    });
  }
})();