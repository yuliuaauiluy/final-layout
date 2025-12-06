export function initNavBtn() {
 initMobileMenu();
 clickBtnNav(); 
}

function initMobileMenu() {
    const openBtn = document.querySelector('.header-nav__menu-open');
    openBtn.addEventListener('click', function() {
        const modalMenu = document.querySelector('.modal-menu');
        modalMenu.style.display = 'block';
        modalMenu.style.position = 'fixed';
        modalMenu.style.background = 'white';
        modalMenu.style.zIndex = '2';
    })

    const closeBtn = document.querySelector('.modal-menu__btn-close');
    closeBtn.addEventListener('click', function() {
        const modalMenu = document.querySelector('.modal-menu');
        modalMenu.style.display = 'none';

    })
}

function clickBtnNav() {
    const profileBtn = document.querySelector('.header-nav__btn-profile');
    
    profileBtn.addEventListener('click', function() {
        const btnNav = document.querySelector('.btnClick-profile');
        
        if (btnNav.style.display === 'block') {
            btnNav.style.display = 'none';
            btnNav.style.background = '';
        } else {
            btnNav.style.display = 'block';
            btnNav.style.background = 'white';
        }
    });

    const repairBtn = document.querySelector('.header-nav__btn-repair');
    
    repairBtn.addEventListener('click', function() {
        const btnNav = document.querySelector('.btnClick-repair');
        
        if (btnNav.style.display === 'block') {
            btnNav.style.display = 'none';
            btnNav.style.background = '';
        } else {
            btnNav.style.display = 'block';
            btnNav.style.background = 'white';
        }
    });

    const checkstatusBtn = document.querySelector('.header-nav__btn-checkstatus');
    
    checkstatusBtn.addEventListener('click', function() {
        const btnNav = document.querySelector('.btnClick-checkstatus');
        
        if (btnNav.style.display === 'block') {
            btnNav.style.display = 'none';
            btnNav.style.background = '';
        } else {
            btnNav.style.display = 'block';
            btnNav.style.background = 'white';
        }
    });

    const submitBtn = document.querySelector('.btn-submit-a-request');
    
    submitBtn.addEventListener('click', function() {
        const btnNav = document.querySelector('.btnClick-submit');
        
        if (btnNav.style.display === 'block') {
            btnNav.style.display = 'none';
            btnNav.style.background = '';
        } else {
            btnNav.style.display = 'block';
            btnNav.style.background = 'white';
        }
    });

    const repairStatustBtn = document.querySelector('.btn-repair-status');
    
    repairStatustBtn.addEventListener('click', function() {
        const btnNav = document.querySelector('.btnClick-repair-status');
        
        if (btnNav.style.display === 'block') {
            btnNav.style.display = 'none';
            btnNav.style.background = '';
        } else {
            btnNav.style.display = 'block';
            btnNav.style.background = 'white';
        }
    });
    
}

