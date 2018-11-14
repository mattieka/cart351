//variables
var poemCanvas;
var draggedSprite = null;
var aWord;
var newWord;
var wordButton;
var buttonDistance;

//poem canvas shortcut variables
var poemCanvasLeft;
var poemCanvasRight;
var poemCanvasTop;
var poemCanvasBottom;

//SETUP

function setup() {
  createCanvas(800,800);
  poemCanvas = new PoemWindow(width/2,height/2,600,height/2);
  wordsSetup();
  wordButton = new Button(300,300,100,50,"New Word","Word Button");
  updateCanvasVariables();
}

//DRAW
function draw() {
  background(0);
  poemCanvas.display();

  wordButton.display();
  wordButton.buttonFunction();


  wordsMouseInput();
  dragWord();
  drawSprites();
}


//-----// OTHER FUNCTIONS

function updateCanvasVariables() {
  poemCanvasLeft = poemCanvas.x-poemCanvas.w/2;
  poemCanvasRight = poemCanvas.w;
  poemCanvasTop = poemCanvas.y-poemCanvas.h/2;
  poemCanvasBottom = poemCanvas.h;
}
