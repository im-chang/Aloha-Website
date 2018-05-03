$(document).ready(function() {

  
    var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true
});

$("#about").click(function() {
  $('html, body').animate({
      scrollTop: $("#about").offset().top
  }, 2000);
});

$("#shop").click(function() {
  $('html, body').animate({
      scrollTop: $("#shop").offset().top
  }, 2000);
});

$("#featured").click(function() {
  $('html, body').animate({
      scrollTop: $("#featured").offset().top
  }, 2000);
});

$("#updates").click(function() {
  $('html, body').animate({
      scrollTop: $("#updates").offset().top
  }, 2000);
});


$("#button").click(function() {
  var emailInput = $("#email").val();
  if (ValidateEmail(emailInput)) {
    alert( "Thanks for subscribing!" );
    $("#email").val("");
    e.preventDefault();
  }else{
    alert( "Please enter a valid email." );
    e.preventDefault();
  } 
});

function ValidateEmail(email){
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
    return (true);
  }
  else{
    return (false);
  }
}; 
}); // end of document.ready()