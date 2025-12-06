export function initModal() {
    // Один общий обработчик для всех модальных окон
    document.addEventListener('click', function(event) {
        const target = event.target;
        
        // ОТКРЫТИЕ модальных окон
        if (target.closest('.btn-tel') || target.closest('.header-nav__btn-tel')) {
            event.preventDefault();
            event.stopPropagation();
            const modalCall = document.querySelector('.modal__call');
           if (modalCall) {
                modalCall.style.display = 'grid';
                modalCall.style.background = 'white';
                modalCall.style.position = 'fixed';
                modalCall.style.zIndex = '3';
            }
        }
        
        if (target.closest('.btn-chat') || target.closest('.header-nav__btn-chat')) {
            event.preventDefault();
            event.stopPropagation();
            const modalFeedback = document.querySelector('.modal__feedback');
            if (modalFeedback) {
                modalFeedback.style.display = 'grid';
                modalFeedback.style.background = 'white';
                modalFeedback.style.position = 'fixed';
                modalFeedback.style.zIndex = '3';
            }
        }
        
        // ЗАКРЫТИЕ модальных окон
        if (target.closest('.modal__close--call')) {
            event.preventDefault();
            event.stopPropagation();
            const modalCall = document.querySelector('.modal__call');
            if (modalCall) modalCall.style.display = 'none';
        }
        
        if (target.closest('.modal__close--feedback')) {
            event.preventDefault();
            event.stopPropagation();
            const modalFeedback = document.querySelector('.modal__feedback');
            if (modalFeedback) modalFeedback.style.display = 'none';
        }
        
        // Закрытие по левой области
        if (target.closest('.div-grid-column1')) {
            event.preventDefault();
            event.stopPropagation();
            const modalCall = document.querySelector('.modal__call');
            const modalFeedback = document.querySelector('.modal__feedback');
            if (modalCall) modalCall.style.display = 'none';
            if (modalFeedback) modalFeedback.style.display = 'none';
        }
        
    });
}