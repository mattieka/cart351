/****************************************************************************/
                              //BUTTON OBJECT
/****************************************************************************/

/****************************************************************************/
                              //CONSTRUCTOR
/****************************************************************************/

function Button(x,y,w,h,text,type) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.text = text;
  this.type = type;

}

/****************************************************************************/
                            //DISPLAY FUNCTION
/****************************************************************************/

Button.prototype.display = function() {
  rectMode(CENTER);
  fill("#BDABF1");
  noStroke();
  rect(this.x,this.y,this.w,this.h);
  textAlign(CENTER);
  fill(0);
  text(this.text,this.x,this.y);
}



/****************************************************************************/
        //BUTTON FUNCTION FUNCTION (makes button do what its meant to)
/****************************************************************************/

Button.prototype.buttonFunction = function() {
  buttonDistance = dist(mouseX,mouseY,this.x,this.y);
  if (this.text === "New Word" && buttonDistance < this.w/2 && buttonDistance < this.h/2) {
    if (mouseWentDown() === true && extraWordCount < 5) {
      console.log("clicked");
      let chosenWord = chooseWord();
      poemCanvasRandomXY();
      words.push(new Magnet(poemCanvasRandomX,poemCanvasRandomY,100,30,this.wordBox,chosenWord));
      extraWordCount = extraWordCount + 1;
      console.log("number of sprites: "+wordSprites.length);
      console.log("number of words: "+words.length);
    }
  }

  if (this.text === "New Particle" && buttonDistance < this.w/2 && buttonDistance < this.h/2) {
    if (mouseWentDown() === true && extraWordCount < 5) {
      let chosenWord = chooseParticle();
      poemCanvasRandomXY();
      words.push(new Magnet(poemCanvasRandomX,poemCanvasRandomY,100,30,this.wordBox,chosenWord));
      extraWordCount = extraWordCount + 1;
    }
  }

  if (this.text === "Word Endings" && buttonDistance < this.w/2 && buttonDistance < this.h/2) {
    if (mouseWentDown() === true) {
      if (endingButtonIndex === 0 && wordEndingButtonsState === "off") {
        wordEndingButtonsState = "on";
        allWordEndingButtons[endingButtonIndex].y = this.y + 60;
      }
      else if (endingButtonIndex === 0 && wordEndingButtonsState === "on") {
        endingButtonIndex = endingButtonIndex + 1;
        allWordEndingButtons[endingButtonIndex].y = this.y + 60;
      }
      else if (endingButtonIndex > 0 && endingButtonIndex < allWordEndingButtons.length-1){
        endingButtonIndex = endingButtonIndex + 1;
        allWordEndingButtons[endingButtonIndex].y = this.y + 60;
      }
      else if (endingButtonIndex === allWordEndingButtons.length-1){
        wordEndingButtonsState = "off";
        endingButtonIndex = endingButtonIndex + 1;
        endingButtonIndex = 0;
      }
      console.log(allWordEndingButtons[endingButtonIndex]);
      console.log(endingButtonIndex);
    }
  }

  if (this.type === "Ending Button" && buttonDistance < this.w/2 && buttonDistance < this.h/2) {
    if (mouseWentDown() === true) {
      console.log("clicked");
      poemCanvasRandomXY();
      words.push(new Magnet(poemCanvasRandomX,poemCanvasRandomY,100,30,this.wordBox,this.text));
    }
  }

  if (this.text === "Extras" && buttonDistance < this.w/2 && buttonDistance < this.h/2) {
    if (mouseWentDown() === true) {
      if (specialButtonIndex === 0 && specialButtonsState === "off") {
        specialButtonsState = "on";
        allSpecialButtons[endingButtonIndex].y = this.y + 60;
      }
      else if (specialButtonIndex === 0 && specialButtonsState === "on") {
        specialButtonIndex = specialButtonIndex + 1;
        allSpecialButtons[specialButtonIndex].y = this.y + 60;
      }
      else if (specialButtonIndex > 0 && specialButtonIndex < allSpecialButtons.length-1){
        specialButtonIndex = specialButtonIndex + 1;
        allSpecialButtons[specialButtonIndex].y = this.y + 60;
      }
      else if (specialButtonIndex === allSpecialButtons.length-1){
        specialButtonsState = "off";
        specialButtonIndex = specialButtonIndex + 1;
        specialButtonIndex = 0;
      }
    }
  }

  if (this.type === "Extra Button" && buttonDistance < this.w/2 && buttonDistance < this.h/2) {
    if (mouseWentDown() === true) {
      console.log("clicked");
      poemCanvasRandomXY();
      if (this.text === "Profanity") {
        let chosenWord = chooseProfanity();
      }

      if (this.text === "Pop Culture") {
        let chosenWord = choosePopCulture();
      }

      if (this.text === "Slang") {
        let chosenWord = chooseSlang();
      }
      words.push(new Magnet(poemCanvasRandomX,poemCanvasRandomY,100,30,this.wordBox,chosenWord));
    }
  }

  if (this.text === "Upload Poem" && buttonDistance < this.w/2 && buttonDistance < this.h/2) {
    if (mouseWentDown() === true) {
      let input = createInput();
      input.position(this.x-this.w/2,poemCanvasTop+this.y+this.h);
      let button = createButton('submit');
      button.position(input.x + input.width + 10,input.y);
      button.mousePressed(savePoem);
    }
  }

}

/****************************************************************************/
                          //CHECK BUTTON STATES
/****************************************************************************/

// WORD ENDINGS
function checkWordEndingButtonState() {
  if (wordEndingButtonsState === "on") {
    showWordEndingButtons();
  }

  if (wordEndingButtonsState === "off") {
    hideWordEndingButtons();
  }
}

// SPECIAL
function checkSpecialButtonState() {
  if (specialButtonsState === "on") {
    showSpecialButtons();
  }

  if (specialButtonsState === "off") {
    hideSpecialButtons();
  }
}

/****************************************************************************/
                              //SHOW BUTTONS
/****************************************************************************/

// WORD ENDINGS
function showWordEndingButtons() {
  allWordEndingButtons[endingButtonIndex].display();
}

// SPECIAL
function showSpecialButtons() {
  allSpecialButtons[specialButtonIndex].display();
}

/****************************************************************************/
                              //HIDE BUTTONS
/****************************************************************************/

// WORD ENDINGS
function hideWordEndingButtons() {
  endingButtonIndex = 0;
  allWordEndingButtons.y = wordEndingsButton.y;
}

// SPECIAL
function hideSpecialButtons() {
  specialButtonIndex = 0;
  allSpecialButtons.y = specialWordsButton.y;
}

/****************************************************************************/
                                //NOTES
/****************************************************************************/

/* Listing button types that need to exist, for my own benefit.

Word generation:
  - noun
  - verb
  - adjective
  - adverb (maybe just make endings so adjectives can also be used as adverbs?)
  - pronouns
  - preposition
  - conjunction
  - determiner
  - punctuation
  - pop culture/profaniy/slang (extras)

Word Endings:
  - s
  - ly
  - ing
  - ed
  - es
  - d
  - er
  - ier
  - y
  - en

 **ALLOW THESE GUYS TO OVERLAP??**

*/
/****************************************************************************/
                                //END
/****************************************************************************/
