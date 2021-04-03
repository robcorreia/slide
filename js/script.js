import { SlideNav } from './slide.js';

const slide = new SlideNav('.slide', '.slide-wrapper');
slide.init();
slide.addArrow('.btn-prev', '.btn-next');
slide.addControl();
console.log(slide);

