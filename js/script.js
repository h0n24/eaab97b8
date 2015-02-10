//@prepros-prepend _jquery-2.1.3.min.js
//@prepros-prepend _bootstrap.min.js
//@prepros-prepend _modernizr.min.js
//@prepros-prepend _photoswipe.min.js
//@prepros-prepend _photoswipe-ui-default.min.js
//@prepros-prepend _jquery-ui-1.11.2.custom.min.js


$(document).ready(function() {

/*
----
slouží pouze k debugování !! prosím odstranit z ostré verze !!
---- 
*/

$('.sidemenu .header').click(function(){
  $('.sidemenu .item').removeClass('active');
  $(this).parent().toggleClass('active');
  event.preventDefault()
});

$('#button-to-click').trigger("click");



/*
----
funkce
---- 
*/

/* scrolling middle block, důležité kvůli pozadí, v iteraci zrušeno */

//$('body').mousedown(function(e){if(e.button==1)return false});

/*
var pageheight = document.getElementsByTagName("body")[0].offsetHeight;
setTimeout(function(){ $('.sidemenu').css("min-height",pageheight); }, 60);

setTimeout(function(){ $('.sidemenu').css("min-height",$('html').height()); }, 700);

$(window).resize(function() {
  $('.sidemenu').css("min-height",$('html').height());
});
*/

$('.menu-link').click(function() {
  $('body').toggleClass('sidemenu-active');
  event.preventDefault();
});


/* Košík */

$(".item-label-wrap input:radio").click(function(){
  $(this).parents(".col-md-6").children().children().removeClass("active");
  $(this).parent().addClass("active");
});


/* PhotoSwipe */

$(".photo_swipe_gallery").click(function(){
  openPhotoSwipe();
});

/* Slider */

$("#slider").slider({
  range: true,
  min: 0,
  max: 3200,
  values: [0, 2400],
  slide: function(event, ui) {
    $("#slider-min").text("€ " + ui.values[0]);
    $("#slider-max").text("€ " + ui.values[1]);
  }
});

$("#slider-min").text("€ " + $("#slider").slider("values", 0));
$("#slider-max").text("€ " + $("#slider").slider("values", 1));

$("#slider_params").slider({
  min: 0,
  max: 2,
  value: 1,
  slide: function(event, ui) {
    if (ui.value == 0) {
      $(".fyzicke").removeClass("active");
      $(".technicke").addClass("active");
      $("#fyzicke").css("opacity",0.5);
    }
    else if (ui.value == 2) {
      $(".technicke").removeClass("active");
      $(".fyzicke").addClass("active");
      $("#technicke").css("opacity",0.5);
    }
    else {
      $(".technicke").removeClass("active");
      $(".fyzicke").removeClass("active");
      $("#technicke,#fyzicke").css("opacity",1);
    };
  }
});

$(".technicke").click(function(){
  if($(this).hasClass("active")){
    $(".technicke").removeClass("active");
    $("#slider_params").slider('value',1);
    $("#technicke,#fyzicke").css("opacity",1);
  } else {
    $(".fyzicke").removeClass("active");
    $("#slider_params").slider('value',0);
    $(this).addClass("active");
    $("#fyzicke").css("opacity",0.5);
  }

});

$(".fyzicke").click(function(){
  if($(this).hasClass("active")){
    $(".fyzicke").removeClass("active");
    $("#slider_params").slider('value',1);
    $("#technicke,#fyzicke").css("opacity",1); 
    
  } else {
    $(".technicke").removeClass("active");
    $("#slider_params").slider('value',2);
    $(this).addClass("active");
    $("#technicke").css("opacity",0.5);
  }
});

$("#slider-vaha").slider({
  orientation: "vertical",
  min: 0,
  max: 5,
  value: 2,
  slide: function(event, ui) {
    var val = 6 + 1 - ui.value;
    $(".vaha-vyska-hrace .vaha").removeClass("active");
    $(".vaha-vyska-hrace .vaha:nth-child("+val+")").addClass("active");
  }
});

$(".vaha-vyska-hrace .vaha").click(function(){
  var index = 6 - $(this).index();
  $(".vaha-vyska-hrace .vaha").removeClass("active");
  $("#slider-vaha").slider('value',index);
  $(this).addClass("active");
});

$("#slider-vyska").slider({
  orientation: "vertical",
  min: 0,
  max: 5,
  value: 4,
  slide: function(event, ui) {
    var val = 6 + 1 - ui.value;
    $(".vaha-vyska-hrace .vyska").removeClass("active");
    $(".vaha-vyska-hrace .vyska:nth-child("+val+")").addClass("active");
  }
});

$(".vaha-vyska-hrace .vyska").click(function(){
  var index = 6 - $(this).index();
  $(".vaha-vyska-hrace .vyska").removeClass("active");
  $("#slider-vyska").slider('value',index);
  $(this).addClass("active");
});

$(".menu-link").click(function(){
  $(window).scrollTop(0);
});

$("#parametry").click(function(){
  $('.wrap-col-params').toggle();
});


}); //document ready