/****************************************************************************/
                            //MAGNET OBJECT
/****************************************************************************/

/****************************************************************************/
                              //CONSTRUCTOR
/****************************************************************************/

function Magnet(x,y,w,h,wordBox,word) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.wordBox = createSprite(this.x,this.y,this.w,this.h);
  this.word = word;
  wordSprites.add(this.wordBox);

  this.displayWord = function() {
    textSettings();
    text(this.word,this.wordBox.position.x,this.wordBox.position.y+this.h/5);
  };

  this.wordCollision = function() {
    this.wordBox.collide(wordSprites);
  }
}

/****************************************************************************/
                            //DRAW FUNCTION
/****************************************************************************/

function magnetsDraw() {
  for (let i = 0; i<words.length; i++) {
    words[i].displayWord();
    words[i].wordCollision();
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
