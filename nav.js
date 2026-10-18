// Shared mobile nav drawer, used by every page.
(function () {
    const navToggle = document.getElementById('navToggle');
    const mobileNav = document.getElementById('mobileNav');
    const mobileNavOverlay = document.getElementById('mobileNavOverlay');
    if (!navToggle || !mobileNav || !mobileNavOverlay) return;

    function openNav() {
        document.body.classList.add('nav-open');
        mobileNav.classList.add('is-open');
        navToggle.setAttribute('aria-expanded', 'true');
    }
    function closeNav() {
        document.body.classList.remove('nav-open');
        mobileNav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
    }

    navToggle.addEventListener('click', () => {
        document.body.classList.contains('nav-open') ? closeNav() : openNav();
    });
    mobileNavOverlay.addEventListener('click', closeNav);
    mobileNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeNav));
})();
