$(document).ready(function() {
    $(".button").append("<button>Subscribe</button>");
    $('button').css('color', 'white');
    $("button").on("click", function(event) {
        event.preventDefault();
        var inputValue = $('input').val(); 
        alert("Thank you for Sub");
      });
      


  }); // end of document.ready()
  