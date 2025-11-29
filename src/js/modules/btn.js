import { updateAllSliders } from '../modules/slider.js';

export function initBtn() {
  initBrandsSection();
  initDevicesSection();
}

function initBrandsSection() {
  const section = document.querySelector('.brands-to-repair');
  if (!section) return;

  const btnMore = section.querySelector('.brands-to-repair__read-more-button');
  const btnLess = section.querySelector('.brands-to-repair__show-less');
  const slides = section.querySelectorAll('.swiper-slide');
  const slider = section.querySelector('.brands-to-repair__slider');

  if (!btnMore || !btnLess || !slides.length) return;

  setupSection(btnMore, btnLess, slides, section, slider, 'brands');
}

function initDevicesSection() {
  const section = document.querySelector('.devices-to-repair');
  if (!section) return;

  const btnMore = section.querySelector('.devices-to-repair__read-more-button');
  const btnLess = section.querySelector('.devices-to-repair__show-less');
  const slides = section.querySelectorAll('.swiper-slide');
  const slider = section.querySelector('.devices-to-repair__slider');

  if (!btnMore || !btnLess || !slides.length) return;

  setupSection(btnMore, btnLess, slides, section, slider, 'devices');
}

function setupSection(btnMore, btnLess, slides, section, slider, sectionName) {

  function getVisibleCount() {
    const width = window.innerWidth;
    
    if (sectionName === 'brands') {
      if (width >= 1366) return 8;
      if (width >= 768) return 6;
      return slides.length;
    } 
    else if (sectionName === 'devices') {
      if (width >= 1366) return 4;
      if (width >= 768) return 3;
      return slides.length;
    }
    return slides.length;
  }

  function calculateHeight(showAll = false) {
    const width = window.innerWidth;
    const visibleCount = showAll ? slides.length : getVisibleCount();
    
    if (sectionName === 'brands') {
      if (width >= 1366) {
        // desktop - 2 ряда по 4 элемента + место для кнопки
        const rows = Math.ceil(visibleCount / 4);
        return (56 + (rows * 72) + ((rows - 1) * 16) + 60 + 40) + 'px'; // header + слайды + отступы + кнопка + padding
      } else if (width >= 768) {
        // tablet - 2 ряда по 3 элемента + место для кнопки
        const rows = Math.ceil(visibleCount / 3);
        return (56 + (rows * 72) + ((rows - 1) * 16) + 60 + 40) + 'px';
      }
    } else if (sectionName === 'devices') {
      if (width >= 1366) {
        // desktop - рассчитываем ряды + место для кнопки
        const rows = Math.ceil(visibleCount / 4);
        return (56 + (rows * 160) + ((rows - 1) * 32) + 60 + 40) + 'px';
      } else if (width >= 768) {
        // tablet - рассчитываем ряды + место для кнопки
        const rows = Math.ceil(visibleCount / 3);
        return (56 + (rows * 160) + ((rows - 1) * 16) + 60 + 40) + 'px';
      }
    }
    return 'auto';
  }

  function applyInitialState() {
    const visibleCount = getVisibleCount();
    const hasHidden = slides.length > visibleCount;
    
    // Убираем все классы hidden и применяем заново
    slides.forEach((card, i) => {
      card.classList.remove("hidden");
      if (i >= visibleCount) {
        card.classList.add("hidden");
      }
    });

    // Устанавливаем высоту контейнера
    section.style.height = calculateHeight(false);
    if (slider) {
      slider.style.height = 'auto';
    }

    // Управление кнопками
    if (hasHidden) {
      btnMore.classList.remove("hidden");
      btnLess.classList.add("hidden");
    } else {
      btnMore.classList.add("hidden");
      btnLess.classList.add("hidden");
    }
    
    // Обновляем слайдер
    setTimeout(() => {
      if (typeof updateAllSliders === 'function') {
        updateAllSliders();
      }
    }, 50);
  }

  // Обработчик для кнопки "Показать все"
  btnMore.addEventListener("click", () => {
    
    // Показываем все слайды
    slides.forEach((card) => {
      card.classList.remove("hidden");
    });
    
    // Увеличиваем высоту контейнера с запасом для кнопки
    section.style.height = calculateHeight(true);
    if (slider) {
      slider.style.height = 'auto';
    }
    
    // Переключаем кнопки
    btnMore.classList.add("hidden");
    btnLess.classList.remove("hidden");
    
    // Обновляем слайдер
    setTimeout(() => {
      if (typeof updateAllSliders === 'function') {
        updateAllSliders();
      }
    }, 50);
  });

  // Обработчик для кнопки "Скрыть"
  btnLess.addEventListener("click", () => {
    applyInitialState();
  });

  // Инициализация
  applyInitialState();
}