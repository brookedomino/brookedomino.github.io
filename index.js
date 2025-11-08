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
