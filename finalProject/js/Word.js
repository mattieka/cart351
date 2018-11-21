/****************************************************************************/
                              //WORD STUFF
/****************************************************************************/

/****************************************************************************/
                              //SETUP
/****************************************************************************/

function wordsSetup() {
  for (var i = 0; i < 1; i++) {
    words.push(new Magnet(width/2,height/2,100,30));
  };
}

/****************************************************************************/
                        //HANDLE MOUSE INPUT
/****************************************************************************/

wordsMouseInput = function() {
  for (var i = 0; i<words.length; i++) {
    words[i].onMousePressed = function() {
      if (draggedSprite === null) {
          draggedSprite = this;
      }
    };

    words[i].onMouseReleased = function() {
      if (draggedSprite === this) {
          draggedSprite = null;
        }
      };
  }
}

/****************************************************************************/
                        //UPDATE DRAGGED WORDS
/****************************************************************************/

function dragWord() {
  if (draggedSprite !== null) {
    draggedSprite.position.x = constrain(mouseX,poemCanvasLeft+draggedSprite.width/2,poemCanvasRight+draggedSprite.width/2);
    draggedSprite.position.y = constrain(mouseY,poemCanvasTop+draggedSprite.height/2,poemCanvasBottom-draggedSprite.height/2);
  }
}

/****************************************************************************/
                            //JSON PRELOAD
/****************************************************************************/

// a handy function that preloads all the word lists
function preloadWordLists() {
  conjunctionList = loadJSON("jsonFiles/conjunctions.json");
  determinerList = loadJSON("jsonFiles/determiners.json");
  prepositionList = loadJSON("jsonFiles/prepositions.json");
  pronounsList = loadJSON("jsonFiles/pronouns.json");
  punctuationList = loadJSON("jsonFiles/punctuation.json");
}

/****************************************************************************/
                                //END
/****************************************************************************/
