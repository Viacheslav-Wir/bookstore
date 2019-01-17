import $ from 'jquery';
import 'what-input';

// Foundation JS relies on a global varaible. In ES6, all imports are hoisted
// to the top of the file so if we used`import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
// require('foundation-sites');

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
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