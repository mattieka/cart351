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

  if (this.text === "Word Endings" && this.w/2 && buttonDistance < this.h/2) {
    if (mouseWentDown() === true) {
      if(endingButtonIndex==allWordEndingButtons.length-1){
        endingButtonIndex =0;
      }
      else {
        endingButtonIndex++;
      }
     showWordEndingButtons();
    }
  }
}

function showWordEndingButtons() {

  console.log(endingButtonIndex);
  allWordEndingButtons[endingButtonIndex];
  /* i wanna
  - have extra buttons behind original
  - have the first one slide up to its position, cycle thru them by clicking
    on the first button
  */

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
