var frameIdx = 0;

var data = [
  [{ "color": "red", "x": 200, "y": 200 }],
  [{ "color": "blue", "x": 100, "y": 300 }],
  [{ "color": "purple", "x": 100, "y": 400 }],
  [{ "color": "black", "x": 300, "y": 300 }],
  [{ "color": "green", "x": 400, "y": 200 }]
];

for (var i = 0; i < 239; i++) {
  for (var j = 0; j < data.length; j++) {
    var prevX = data[j][i]["x"];
    var prevY = data[j][i]["y"];
    var nextDatum = {
      "color": data[j][i]["color"],
      "x": prevX + getRandomArbitrary(-20, 20),
      "y": prevY + getRandomArbitrary(-20, 20),
    }
    data[j].push(nextDatum);
  }
}

console.log(data)


// Write all of your code inside this function
// Code executed in this function will run when the page is ready
function pageReady() {

  //   $.get( "https://www.omdbapi.com/?s=samurai", function( response ) {
  //     console.log(response);
  //   });

  // // This gets all of our data for us
  // $.get("https://emmacunningham.github.io/hello-apis/data.json", function(data) {
  //   console.log(data)

  $('.animate').click(function() {
    setInterval(function() {
      if (frameIdx < 240) {
        data.forEach(function(dot, dotIdx) {
          $('.dot:eq(' + dotIdx + ')').animate({
            left: dot[frameIdx].x + "px",
            top: dot[frameIdx].y + "px",
          }, 100);
        });

        frameIdx++;
      }
    }, 100);
  });
  // });


}


$(document).ready(pageReady);


// 240 frames


function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}