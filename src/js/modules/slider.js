import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

// Создаем объект для хранения ссылок на слайдеры
const sliders = {
  brands: null,
  devices: null,
  prices: null,
  services: null
};

export function initSliders() {
  // Первая страница (Услуги и сервисы)
  if (window.innerWidth < 1366) {  
    sliders.services = new Swiper('.main__slider', {  // сохраняем в объект
      modules: [Pagination],
      slidesPerView: 'auto',
      spaceBetween: 0,
    });
  } else {
    const servicesSlider = document.querySelector('.main__slider');
    if (servicesSlider) {
      servicesSlider.classList.add('desktop-layout__services');
    }
  } 

  // Вторая страница (Ремонт техники различных брендов)
  if (window.innerWidth < 768) {  
    sliders.brands = new Swiper('.brands-to-repair__slider', {  // сохраняем в объект
      modules: [Pagination],
      slidesPerView: 'auto',
      spaceBetween: 16,
    });
  } else if (window.innerWidth >= 768 && window.innerWidth < 1366) {
    const brandsSlider = document.querySelector('.brands-to-repair__slider');
    if (brandsSlider) {
      brandsSlider.classList.add('tablet-layout__brands');
    }
  } else if (window.innerWidth >= 1366) {
    const brandsSlider = document.querySelector('.brands-to-repair__slider');
    if (brandsSlider) {
      brandsSlider.classList.add('desktop-layout__brands');
    }
  } 

  // Третья страница (Ремонт различных видов техники)
  if (window.innerWidth < 768) {  
    sliders.devices = new Swiper('.devices-to-repair__slider', {  // сохраняем в объект
      modules: [Pagination],
      slidesPerView: 'auto',
      spaceBetween: 16,
    });
  } else if (window.innerWidth >= 768 && window.innerWidth < 1366) {
    const devicesSlider = document.querySelector('.devices-to-repair__slider');
    if (devicesSlider) {
      devicesSlider.classList.add('tablet-layout__devices');
    }
  } else if (window.innerWidth >= 1366) {
    const devicesSlider = document.querySelector('.devices-to-repair__slider');
    if (devicesSlider) {
      devicesSlider.classList.add('desktop-layout__devices');
    }
  } 

  // Четвертая страница (Цены на услуги)
  if (window.innerWidth < 768) {  
    sliders.prices = new Swiper('.prices-for-services__slider', {  // сохраняем в объект
      modules: [Pagination],
      slidesPerView: 'auto',
      spaceBetween: 16,
      pagination: {
        el: '.prices-for-services__pagination',
        clickable: true
      },
    });
  } else {
    const pricesSlider = document.querySelector('.prices-for-services__slider');
    if (pricesSlider) {
      pricesSlider.classList.add('tablet-layout__prices');
    }
  }
}

export function updateAllSliders() {

  if (sliders.brands) {
    sliders.brands.update();
    sliders.brands.updateSlides();
  }
  if (sliders.devices) {
    sliders.devices.update();
    sliders.devices.updateSlides();
  }
  if (sliders.prices) {
    sliders.prices.update();
    sliders.prices.updateSlides();
  }
  if (sliders.services) {
    sliders.services.update();
    sliders.services.updateSlides();
  }
}


