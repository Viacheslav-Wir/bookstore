import $ from 'jquery';
import './lib/foundation-explicit-pieces';
import slick from 'slick-carousel/slick/slick.min.js';

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





$(document).foundation();

let newBooksSlider = $('.ok-slider-block');

newBooksSlider.slick({
  
    // arrows: false,
    dots: true,
    prevArrow: ".ok-prev-arrow",
    nextArrow: ".ok-next-arrow",
    slidesToShow: 2,
    // slidesPerRow: 2,
    arrows: true,
    slidesToScroll: 1,
    slide: ('.ok-item-slide'),


    responsive: [
      {
          breakpoint: 900,
          settings: {
              // slidesToShow: 1,
              arrows: false,
              // dots: false,
          }
        },   
  ]
});

// input type number for book change plus and minus
$(function() {

  (function quantityProducts() {
    let $quantityArrowMinus = $(".ok-arrow-minus");
    let $quantityArrowPlus = $(".ok-arrow-plus");
    let $quantityNum = $(".ok-input-num");

    $quantityArrowMinus.click(quantityMinus);
    $quantityArrowPlus.click(quantityPlus);

    function quantityMinus() {
      if ($quantityNum.val() > 1) {
        $quantityNum.val(+$quantityNum.val() - 1);
      }
    }

    function quantityPlus() {
      $quantityNum.val(+$quantityNum.val() + 1);
    }
  })();

});

$(document).ready(function(){
  $('.ok-book-wrap-signle').mouseenter(
     function() {
      $( this ).addClass('hover-book');
    }
  );
  $('.ok-book-wrap-signle').mouseleave(
    function() {
     $( this ).removeClass('hover-book');
   }
 );
});


$(".ok-book-wrap-signle").click(function(){
  $(this).addClass("flip-book");
});

