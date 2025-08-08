document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('.header-homepage');
  const intro = document.getElementById('intro');

  if (!header || !intro) return;
  const navLinks = header.querySelectorAll('.nav-link');

  function updateHeaderVisibility() {
    const introRect = intro.getBoundingClientRect();

    if (introRect.bottom <= 0) {
      header.classList.add('header-visible');
    } else {
      header.classList.remove('header-visible');
    }
  }

  // Show header when any nav link receives focus
  navLinks.forEach(link => {
    link.addEventListener('focus', () => {
      header.classList.add('header-visible');
    });

    link.addEventListener('blur', updateHeaderVisibility);
  });

  // Show/hide header on scroll
  window.addEventListener('scroll', updateHeaderVisibility);

  // Hide header on load (if intro is visible)
  updateHeaderVisibility();
});
