
$(window).resize(function() {

});

$(document).ready(function() {
  $("nav").delay(500).animate({"opacity": "1"}, 500);
  $(".content").delay(1000).animate({"opacity": "1"}, 500);
  $("[id*='header-']").delay(1000).animate({"opacity": "1"}, 500);
  $(".content-portfolio").delay(1000).animate({"opacity": "1"}, 500);
  $("footer").delay(500).animate({"opacity": "1"}, 500);
  
 var backgroundHeight = $(".scrolltop-intro").outerHeight(true)/1.3;

  if ($(window).width() <= 480 && $(window).height() <= 700) {
    $('html, body').animate(
        {scrollTop: $("#scrolltop-target").offset().top - backgroundHeight}, 1000
    );
  } else if ($(window).width() <= 700 && $(window).height() <= 480) {
    $('html, body').animate(
        {scrollTop: $("#scrolltop-target").offset().top - backgroundHeight}, 1000
    );
  }
   
});//end $(document).ready


//var scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();

// I consider myself a strict determinist. I believe that all of existence is on a set path based on an initial condition, and thus the future has been predetermined.