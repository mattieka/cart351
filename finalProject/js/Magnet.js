/****************************************************************************/
                            //MAGNET OBJECT
/****************************************************************************/

/****************************************************************************/
                              //CONSTRUCTOR
/****************************************************************************/

function Magnet(x,y,w,h,wordBox,word,magnetColor) {
  this.x = x;
  this.y = y;
  this.word = word;
  this.w = this.word.length * 13.2
  this.h = h;
  this.wordBox = createSprite(this.x,this.y,this.w,this.h);

  this.wordBox.shapeColor = magnetRandomColour();
  wordSprites.add(this.wordBox);
  console.log(this.word);

  this.displayWord = function() {
    textSettings();
    text(this.word,this.wordBox.position.x,this.wordBox.position.y+this.h/5);
  };

  this.wordCollision = function() {
    this.wordBox.collide(wordSprites);
    console.log("number of sprites at collision: "+wordSprites.length)
  };
}

/****************************************************************************/
                            //DRAW FUNCTION
/****************************************************************************/

function magnetsDraw() {
  for (let i = 0; i<words.length; i++) {
    words[i].displayWord();
  }
}

/****************************************************************************/
                        //TEXT SETTINGS FUNCTION
/****************************************************************************/

function textSettings() {
  textAlign(CENTER);
  textSize(20);
  fill("#000000");
}
