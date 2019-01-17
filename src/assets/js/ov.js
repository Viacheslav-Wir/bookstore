import $ from 'jquery';

import './lib/foundation-explicit-pieces';
import slick from 'slick-carousel/slick/slick.min.js';

$(document).foundation();

let newBooksSlider = $('.vo-slider-block');
newBooksSlider.slick({
    // arrows: false,
    dots: true,
    slide: '.vo-slider-main',
    appendDots: '.vo-slider-block__dots'
});