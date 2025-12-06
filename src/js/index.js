import '../styles/imports.scss';

import { initBtn } from './modules/btn.js';
import { initNavBtn} from './modules/menu.js';
import { initSliders } from './modules/slider.js';
import { initModal } from './modules/modal.js';

// Инициализация при загрузке DOM
document.addEventListener('DOMContentLoaded', function() {
  initBtn();
  initSliders();
  initNavBtn();
  initModal();
});