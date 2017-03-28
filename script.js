var frameIdx = 0;

// Write all of your code inside this function
// Code executed in this function will run when the page is ready
function pageReady() {

    $.get( "https://www.omdbapi.com/?s=samurai", function( response ) {
      console.log(response);
    });

  // This gets all of our data for us
  $.get("https://emmacunningham.github.io/hello-apis/data.json", function(data) {
    console.log(data)

  $('.animate').click(function() {
    setInterval(function() {
      if (frameIdx < data.length) {
        var dot = data[frameIdx];

        $('.dot').animate({
          left: dot.x + "px",
          top: dot.y + "px",
        }, 100);
        frameIdx++;
      }
    }, 100);
  });
  });


}


$(document).ready(pageReady);


// 240 frames
// var data = [{ "name": "cp3", "x": 300, "y": 300 }];

// for (var i = 0; i < 239; i++) {
//   console.log(data[i]["x"])
//   var prevX = data[i]["x"];
//   var prevY = data[i]["y"];
//   var nextDatum = {
//     "name": "cp3",
//     "x": prevX + getRandomArbitrary(-10, 10),
//     "y": prevY + getRandomArbitrary(-10, 10),
//   }
//   data.push(nextDatum);
// }

// console.log(data)

// function getRandomArbitrary(min, max) {
//     return Math.random() * (max - min) + min;
// }