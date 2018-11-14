//variables
var poemCanvas;
var draggedSprite = null;
var aWord;
var newWord;
var wordButton;
var extraWordCount = 0
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
  updateCanvasVariables();
  wordsSetup();
  wordButton = new Button(poemCanvasLeft+50,poemCanvasBottom+25,100,50,"New Word","Word Button");

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
  poemCanvasBottom = poemCanvasTop+poemCanvas.h;
}
