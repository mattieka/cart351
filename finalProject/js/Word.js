/****************************************************************************/
                              //WORD STUFF
/****************************************************************************/

/****************************************************************************/
                              //SETUP
/****************************************************************************/

function wordsSetup() {
  wordSprites = new Group;
  for (var i = 0; i < 1; i++) {
    let chosenWord = chooseWord();
    words.push(new Magnet(width/2,height/2,100,30,this.wordBox,chosenWord));

  };
}

/****************************************************************************/
                        //HANDLE MOUSE INPUT
/****************************************************************************/

wordsMouseInput = function() {
  for (let i = 0; i<words.length; i++) {
    words[i].wordBox.onMousePressed = function() {
      if (draggedSprite === null) {
        //console.log(i);
        draggedSprite = words[i].wordBox;
      }
    };

    words[i].wordBox.onMouseReleased = function() {
      if (draggedSprite === words[i].wordBox) {
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
    draggedSprite.collide(wordSprites);
  }
}

/****************************************************************************/
                        //RANDOMLY SELECT WORD LIST
/****************************************************************************/

function chooseWord() {
  switch(listNum = floor(random(0,6))) {
    case 0: {chosenWordObj = conjunctionList[floor(random(0,conjunctionList.length))];
            chosenWord = chosenWordObj.conjunction;
            break;}
    case 1: {chosenWordObj = determinerList[floor(random(0,determinerList.length))];
            chosenWord = chosenWordObj.determiner;
            break;}
    case 2: {chosenWordObj = prepositionList[floor(random(0,prepositionList.length))];
            chosenWord = chosenWordObj.preposition;
            break;}
    case 3: {chosenWordObj = pronounsList[floor(random(0,pronounsList.length))];
            chosenWord = chosenWordObj.pronoun;
            break;}
    case 4: {chosenWordObj = punctuationList[floor(random(0,punctuationList.length))];
            chosenWord = chosenWordObj.punctuation;
            break;}
    case 5: {chosenWordObj = mainWordList[floor(random(0,mainWordList.length))];
            chosenWord = chosenWordObj;
            break;}
  }
  console.log(listNum,chosenWord);
  return chosenWord;
}

/****************************************************************************/
                            //JSON PRELOAD
/****************************************************************************/

// a handy function that preloads all the word lists
function preloadWordLists() {
  conjunctionListRaw = loadJSON("jsonFiles/conjunctions.json");
  determinerListRaw = loadJSON("jsonFiles/determiners.json");
  prepositionListRaw = loadJSON("jsonFiles/prepositions.json");
  pronounsListRaw = loadJSON("jsonFiles/pronouns.json");
  punctuationListRaw = loadJSON("jsonFiles/punctuation.json");
  mainWordList = loadStrings("jsonFiles/2of5core.txt");
}

/****************************************************************************/
                            //CONVERT JSON TO ARRAY
/****************************************************************************/
function convertToArray() {
  conjunctionList = conjunctionListRaw.conjunctionArray;
  determinerList = determinerListRaw.determinerArray;
  prepositionList = prepositionListRaw.prepositionArray;
  pronounsList = pronounsListRaw.pronounsArray;
  punctuationList = punctuationListRaw.punctuationArray;
}


/****************************************************************************/
                                //END
/****************************************************************************/
