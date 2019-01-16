import $ from 'jquery';

$(window).resize(function() {
    if ( $(window).width() < 500 ) {

$(".tabs li a").on("click", function(e){
  e.stopPropagation();
  $(".tabs li, .tab").removeClass("current");
  $(this).parent("a").addClass("current");
  let href = $(this).attr("href");
  $(".tab" + href).addClass("current");
    return false;
        });
    }
});