document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('.header-homepage');
  const intro = document.getElementById('intro');

  if (!header || !intro) return;
  const navLinks = header.querySelectorAll('.nav-link');

  /**
   * If the intro is visible (e.g., on initial page load), the header is hidden with
   * a lower z-index and will be revealed as the user scrolls down past the intro.
   * If header links receive focus (e.g., user tabs through links before scrolling down),
   * the header z-index is increased to make it visible over the intro.
   */
  function updateHeaderVisibility() {
    const introRect = intro.getBoundingClientRect();

    if (introRect.bottom <= 0) {
      header.classList.add('header-visible');
    } else {
      header.classList.remove('header-visible');
    }
  }

  // Make header visible and accessible when any nav link receives focus
  navLinks.forEach(link => {
    link.addEventListener('focus', () => {
      header.classList.add('header-visible');
    });

    link.addEventListener('blur', updateHeaderVisibility);
  });

  window.addEventListener('scroll', updateHeaderVisibility);

  // Hide header on page load (if intro is visible)
  updateHeaderVisibility();
});
