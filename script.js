// Write all of your code inside this function
// Code executed in this function will run when the page is ready
function pageReady() {

  // This gets all of our data for us
  $.get("https://emmacunningham.github.io/hello-apis/data.json", function(data) {
    console.log(data)
  });


  // This code runs when you click on the button
  $('.animate').click(function() {

      $('.dot').animate({
        left: "200px",
        top: "200px",
      }, 100);

  });


}


$(document).ready(pageReady);
