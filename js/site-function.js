var currentTallest = 0;
var currentRowStart = 0;
var rowDivs = new Array();

function setConformingHeight(el, newHeight) {
 // set the height to something new, but remember the original height in case things change
 el.data("originalHeight", (el.data("originalHeight") == undefined) ? (el.height()) : (el.data("originalHeight")));
 el.height(newHeight);
}

function getOriginalHeight(el) {
 // if the height has changed, send the originalHeight
 return (el.data("originalHeight") == undefined) ? (el.height()) : (el.data("originalHeight"));
}

function columnConform() {

 // find the tallest DIV in the row, and set the heights of all of the DIVs to match it.
 $('div.blocks').each(function(index) {

  if(currentRowStart != $(this).offset().top) {

   // we just came to a new row.  Set all the heights on the completed row
   for(currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) setConformingHeight(rowDivs[currentDiv], currentTallest);

   // set the variables for the new row
   rowDivs.length = 0; // empty the array
   currentRowStart = $(this).offset().top;
   currentTallest = getOriginalHeight($(this));
   rowDivs.push($(this));

  } else {

   // another div on the current row.  Add it to the list and check if it's taller
   rowDivs.push($(this));
   currentTallest = (currentTallest < getOriginalHeight($(this))) ? (getOriginalHeight($(this))) : (currentTallest);

  }
  // do the last row
  for(currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) setConformingHeight(rowDivs[currentDiv], currentTallest);

 });

}


$(window).resize(function() {
 columnConform();
});

$(document).ready(function() {
  //$("#nav-bar").delay(1400).animate({"opacity": "1"}, 500);
  //$("#content").delay(100).animate({"opacity": "1"}, 750);
  //$("div#banner ul li").animate({left: "-=50px"}, 500 );
 columnConform();
  
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