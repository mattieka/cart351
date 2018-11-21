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
}

Magnet.prototype.display = function() {
  text(chosenWord,this.x,this.y);
}
