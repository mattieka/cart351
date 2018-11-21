/*****************************************************************************
               THE COLLABORATIVE FRIDGE MAGNET POETRY PROJECT
by Mattie KA

your own virtual magnetic surface where you can write terrible poetry with
random words. you can share or save your masterpiece, or browse other people's
magnum opuses. opi?

Made for CART 351 in JS using p5 and p5.play

/****************************************************************************/
                              //VARIABLES
/****************************************************************************/

// GENERAL CANVAS-RELATED VARIABLES
var poemCanvas;

// GENERAL SPRITE-RELATED VARIABLES
var draggedSprite = null; //initialize variable of any sprite that can be dragged

// WORD-RELATED VARIABLES
var words = []; // array that stores displayed words
var listNum; //variable that stores a number that refers to a word list
var chosenWord; //variable that stores a word from JSON selected by the chooseWord function
var extraWordCount = 0 // variable that keeps count of extra words
var wordSprites; //variable for the group of all displayed words

// BUTTON RELATED VARIABLES
var buttonDistance; //calculates distance between mouse and button
var wordButton; // variable for the button that generates a new word

// JSON VARIABLES
var conjunctionListRaw;
var determinerListRaw;
var prepositionListRaw;
var pronounsListRaw;
var punctuationListRaw;

// ARRAY VARIABLES
var conjunctionList = [];
var determinerList = [];
var prepositionList = [];
var pronounsList = [];
var punctuationList = [];

//POEM CANVAS SHORTCUT VARIABLES
var poemCanvasLeft;
var poemCanvasRight;
var poemCanvasTop;
var poemCanvasBottom;

/****************************************************************************/
                              //PRELOAD
/****************************************************************************/

function preload() {
  preloadWordLists();
}

/****************************************************************************/
                                //SETUP
/****************************************************************************/

function setup() {
  convertToArray();
  console.log(conjunctionList.length);
  createCanvas(800,800);
  poemCanvas = new PoemWindow(width/2,height/2,600,height/2);
  updateCanvasVariables();
  wordsSetup();

  // create onscreen buttons
  wordButton = new Button(poemCanvasLeft+50,poemCanvasBottom+25,100,50,"New Word","Word Button");

}
/****************************************************************************/
                                //DRAW
/****************************************************************************/
function draw() {
  background(0);
  poemCanvas.display();

  wordButton.display();
  wordButton.buttonFunction();

  wordsMouseInput();
  dragWord();
  drawSprites();
  magnetsDraw();
}


/****************************************************************************/
                              //OTHER FUNCTIONS
/****************************************************************************/
// updates the variables that store the coordinates for the sides of the canvas
// for easy access
function updateCanvasVariables() {
  poemCanvasLeft = poemCanvas.x-poemCanvas.w/2;
  poemCanvasRight = poemCanvas.w;
  poemCanvasTop = poemCanvas.y-poemCanvas.h/2;
  poemCanvasBottom = poemCanvasTop+poemCanvas.h;
}
