import $ from 'jquery';

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