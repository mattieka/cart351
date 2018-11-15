/****************************************************************************/
                              //WORD STUFF
/****************************************************************************/

/****************************************************************************/
                              //SETUP
/****************************************************************************/

function wordsSetup() {
  for (var i = 0; i < 1; i++) {
    words.push(createSprite(width/2,height/2,100,30));
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
    draggedSprite.position.x = mouseX;
    draggedSprite.position.y = mouseY;
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
