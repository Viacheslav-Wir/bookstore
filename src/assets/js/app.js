import $ from 'jquery';
import 'what-input';

// Foundation JS relies on a global varaible. In ES6, all imports are hoisted
// to the top of the file so if we used`import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
require('foundation-sites');

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';

$(document).foundation();

// $(window).on('resize', function () {
//     if($(window).width() <= 600){
//         (function($) {
//             $(function() {
//                 $('a.tabs__caption').each(function() {
//                     $(this).find('ul').each(function(i) {
//                     $(this).click(function(){
//                     $(this).addClass('active').siblings().removeClass('active')
//                     .find('ul.tabs__content').removeClass('active').eq(i).addClass('active');
//                     });
//                     });
//                     });
//                 })
//             })(jQuery)
//     }
// })

// Menu header adaptive give class for section
const menuTogle = $('.ok-menu-toggle, .ok-menu-adatpive');
const mobNav = $('.ok-menu-adatpive');
const burg = $('.ok-menu-toggle');    
menuTogle.on('click', () => mobNav.toggleClass('ok-open'));
menuTogle.on('click', () => burg .toggleClass('ok-click')); 

//show pass for form

let pass = $('#ok-show-pass__form');
$('button.ok-show-password').click(function() {
  pass.attr('type', pass.attr('type') === 'password' ? 'text' : 'password');
});