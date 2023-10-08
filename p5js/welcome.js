var message = "01110111 01100101 01101100 01100011 01101111 01101101 01100101 00100001";
var first = ""
var last = ""

var isChanged = false;

/// Time inbetween each run of "scollMessage()"
let timer = 500;
let nextChange = timer;


function setup() {
  var canvasDiv = document.getElementById('welcome-container');
  var width = canvasDiv.offsetWidth;
  var sketchCanvas = createCanvas(width,50);
  sketchCanvas.parent("welcome-container");

  /// Setting length of message to width of screen
  for (var i = 525; i < width; i += 525){
    message += message;
  }
}

function scrollMessage(state){
  text(message, 0, 30);
  if (state)
    message = message.substring(1) + first;
}

function draw() {
  background("blue");
  fill("white");

  isChanged = false;
  if (millis() > nextChange){
    isChanged = true;
    first = message.substring(0,1);
    nextChange = millis() + timer;
  }
  scrollMessage(isChanged)
}