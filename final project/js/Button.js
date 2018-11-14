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
      words.push(createSprite(random(poemCanvasLeft+50,poemCanvasRight-50),random(poemCanvasTop+15,poemCanvasBottom-15),100,30));
      extraWordCount = extraWordCount + 1;
    }
  }
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

*/
/****************************************************************************/
                                //END
/****************************************************************************/
