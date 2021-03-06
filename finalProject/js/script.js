/*****************************************************************************
               THE COLLABORATIVE FRIDGE MAGNET POETRY PROJECT
by Mattie KA

your own virtual magnetic surface where you can write terrible poetry with
random words. you can share or save your masterpiece, or browse other people's
magnum opuses. opi?

Made for CART 351 in JS using p5, jQuery, p5.dom, and p5.play

/****************************************************************************/
                              //VARIABLES
/****************************************************************************/

// GENERAL CANVAS-RELATED VARIABLES--------------------------------------------
var poemCanvas;

// GENERAL SPRITE-RELATED VARIABLES--------------------------------------------
var draggedSprite = null; //initialize variable of any sprite that can be dragged
var draggedWordIndex = 0;
var wordSprites; //variable for the group of all displayed words

// WORD-RELATED VARIABLES -----------------------------------------------------
var words = []; // array that stores displayed words
var listNum; //variable that stores a number that refers to a word list
var chosenWord; //variable that stores a word from JSON selected by the chooseWord function

// word-counting variables
var extraWordCount = 0 // variable that keeps count of extra words
var startCoreWordCount = 0;
var startParticleCount = 0;
var startSpecialCount = 0;

// BUTTON RELATED VARIABLES----------------------------------------------------
var buttonDistance; //calculates distance between mouse and button
var magnetColor;

// individual buttons
var wordButton; // variable for the button that generates a new word
var particleButton;
var wordEndingsButton;
var specialWordsButton;

// button states
var wordEndingButtonsState = "off";
var specialButtonsState = "off";
var submitButtonState = "off";

// button category arrays
var allWordEndingButtons = [];
var allSpecialButtons = [];
var endingButtonIndex = 0;
var specialButtonIndex = 0;

// misc variables
var filename;
var author;
var trashCanImage;

// JSON VARIABLES -------------------------------------------------------------
var conjunctionListRaw;
var determinerListRaw;
var prepositionListRaw;
var pronounsListRaw;
var punctuationListRaw;
var profanityListRaw;
var popCultureListRaw;
var slangListRaw;
var coreParticleListRaw;

// ARRAY VARIABLES ------------------------------------------------------------
var conjunctionList = [];
var determinerList = [];
var prepositionList = [];
var pronounsList = [];
var punctuationList = [];
var mainWordList = [];
var profanityList = [];
var popCultureList = [];
var slangList = [];
var coreParticleList = [];

//POEM CANVAS SHORTCUT VARIABLES ----------------------------------------------
var poemCanvasLeft;
var poemCanvasRight;
var poemCanvasTop;
var poemCanvasBottom;
var poemCanvasRandomX;
var poemCanvasRandomY;

/****************************************************************************/
                              //PRELOAD
/****************************************************************************/

function preload() {
  preloadWordLists();
  trashCanImage = loadImage("assets/trash.png");
}

/****************************************************************************/
                                //SETUP
/****************************************************************************/

function setup() {
  convertToArray();
  //console.log(conjunctionList.length);
 createCanvas(800,800);
  poemCanvas = new PoemWindow(width/2,height/2,600,height/2);
  updateCanvasVariables();
  wordsSetup();
  trashSetup();


  // create onscreen buttons
  submitButton = new Button(poemCanvasLeft+490,poemCanvasBottom+25,100,50,"Submit","Save Button");
  saveButton = new Button (poemCanvasLeft+490,poemCanvasBottom+25,100,50,"Upload Poem","Save Button");

  wordButton = new Button(poemCanvasLeft+50,poemCanvasBottom+25,100,50,"New Word","Word Button");
  particleButton = new Button(poemCanvasLeft+160,poemCanvasBottom+25,100,50,"New Particle","Word Button");

  wordEndingsButton = new Button(poemCanvasLeft+270,poemCanvasBottom+25,100,50,"Word Endings","Word Button");
  specialWordsButton = new Button(poemCanvasLeft+380,poemCanvasBottom+25,100,50,"Extras","Word Button");

  allWordEndingButtons.push (new Button(poemCanvasLeft+270,poemCanvasBottom+25,100,50,"ly","Ending Button"));
  allWordEndingButtons.push (new Button(poemCanvasLeft+270,poemCanvasBottom+25,100,50,"s","Ending Button"));
  allWordEndingButtons.push (new Button(poemCanvasLeft+270,poemCanvasBottom+25,100,50,"ing","Ending Button"));
  allWordEndingButtons.push (new Button(poemCanvasLeft+270,poemCanvasBottom+25,100,50,"ed","Ending Button"));
  allWordEndingButtons.push (new Button(poemCanvasLeft+270,poemCanvasBottom+25,100,50,"es","Ending Button"));
  allWordEndingButtons.push (new Button(poemCanvasLeft+270,poemCanvasBottom+25,100,50,"d","Ending Button"));
  allWordEndingButtons.push (new Button(poemCanvasLeft+270,poemCanvasBottom+25,100,50,"er","Ending Button"));
  allWordEndingButtons.push (new Button(poemCanvasLeft+270,poemCanvasBottom+25,100,50,"ier","Ending Button"));
  allWordEndingButtons.push (new Button(poemCanvasLeft+270,poemCanvasBottom+25,100,50,"y","Ending Button"));
  allWordEndingButtons.push (new Button(poemCanvasLeft+270,poemCanvasBottom+25,100,50,"en","Ending Button"));

  allSpecialButtons.push (new Button(poemCanvasLeft+380,poemCanvasBottom+25,100,50,"Profanity","Extra Button"));
  allSpecialButtons.push (new Button(poemCanvasLeft+380,poemCanvasBottom+25,100,50,"Pop Culture","Extra Button"));
  allSpecialButtons.push (new Button(poemCanvasLeft+380,poemCanvasBottom+25,100,50,"Slang","Extra Button"));

}
/****************************************************************************/
                                //DRAW
/****************************************************************************/
function draw() {
  background(0);

  poemCanvas.display();

  wordButton.display();
  wordButton.buttonFunction();

  particleButton.display();
  particleButton.buttonFunction();

  checkWordEndingButtonState();
  checkSpecialButtonState();


  wordEndingsButton.display();
  wordEndingsButton.buttonFunction();

  allWordEndingButtons[endingButtonIndex].buttonFunction();

  specialWordsButton.display();
  specialWordsButton.buttonFunction();

  allSpecialButtons[specialButtonIndex].buttonFunction();



  wordsMouseInput();
  dragWord();
  drawSprites();
  magnetsDraw();

  //checkSubmitButtonState();
  saveButton.display();
  saveButton.buttonFunction();

  //submitButton.buttonFunction();
}


/****************************************************************************/
                              //OTHER FUNCTIONS
/****************************************************************************/
// updates the variables that store the coordinates for the sides of the canvas
// for easy access
function updateCanvasVariables() {
  poemCanvasLeft = poemCanvas.x-poemCanvas.w/2;
  poemCanvasRight = poemCanvasLeft+poemCanvas.w;
  poemCanvasTop = poemCanvas.y-poemCanvas.h/2;
  poemCanvasBottom = poemCanvasTop+poemCanvas.h;
}

// shortcut for random position on poem canvas
function poemCanvasRandomXY() {
  poemCanvasRandomX = random(poemCanvasLeft+50,poemCanvasRight-50);
  poemCanvasRandomY = random(poemCanvasTop+15,poemCanvasBottom-15);
}

function magnetRandomColour() {
    colorMode(HSB);
    magnetColor = color(random(0,255),random(20,60),random(90,100));
    return magnetColor;
}
