export function initMobileMenu() {
    const openBtn = document.querySelector('.header-nav__menu-open');
    openBtn.addEventListener('click', function() {
        const modalMenu = document.querySelector('.modal-menu');
        modalMenu.style.display = 'block';
    })

    const closeBtn = document.querySelector('.modal-menu__btn-close');
    closeBtn.addEventListener('click', function() {
        const modalMenu = document.querySelector('.modal-menu');
        modalMenu.style.display = 'none';

    })
}