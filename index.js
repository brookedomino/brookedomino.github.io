document.addEventListener('DOMContentLoaded', () => {
    const logo = document.querySelector('.logo');
    const navLinks = document.querySelectorAll('.nav-link');

    const handleClick = (link, bounceClass) => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            // restart animation
            link.classList.remove(bounceClass);
            void link.offsetWidth; // force reflow
            link.classList.add(bounceClass);

            // scroll immediately while animation plays
            const href = link.getAttribute('href');
            const target = document.querySelector(href);

            if (!target || href === '#top' || href === '#') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    };

    handleClick(logo, 'bounce-logo-anim');
    navLinks.forEach(link => handleClick(link, 'bounce-anim'));
});

/* Layout the image + text side-by-side */
.about-content {
  display: flex;
  align-items: flex-start;
  gap: 28px;
  margin-top: 16px;
}

/* Constrain the headshot explicitly and prevent stretching */
.about-photo {
  width: clamp(160px, 24vw, 280px);
  height: auto;
  flex: 0 0 auto;          /* don’t let flexbox stretch it */
  border-radius: 12px;
  object-fit: cover;
}

/* If you previously set img { width:100% } or .about img { width:100% },
   this will safely override it just for the headshot. */
.about .about-photo {
  width: clamp(160px, 24vw, 280px);
}

/* Mobile stacking */
@media (max-width: 700px) {
  .about-content {
    flex-direction: column;
    text-align: left;
  }
  .about-photo {
    width: 70%;
    max-width: 320px;
  }
}

