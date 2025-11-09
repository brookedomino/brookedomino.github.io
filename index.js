document.addEventListener('DOMContentLoaded', () => {
  const logo = document.querySelector('.logo');
  const navLinks = document.querySelectorAll('.nav-link');

  const handleClick = (el, bounceClass) => {
    if (!el) return;
    el.addEventListener('click', (e) => {
      const href = el.getAttribute('href') || '';
      if (!href.startsWith('#')) return; // don't block real links
      e.preventDefault();

      // restart bounce
      el.classList.remove(bounceClass);
      void el.offsetWidth; // reflow to replay
      el.classList.add(bounceClass);

      // scroll
      const target = href === '#top' ? document.body : document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };

  handleClick(logo, 'bounce-logo-anim');
  navLinks.forEach(link => handleClick(link, 'bounce-anim'));
});

