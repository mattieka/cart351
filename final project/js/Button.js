function Button(x,y,w,h,text,type) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.text = text;
  this.type = type;
}

Button.prototype.display = function() {
  rectMode(CENTER);
  fill("#BDABF1");
  noStroke();
  rect(this.x,this.y,this.w,this.h);
  textAlign(CENTER);
  fill(0);
  text(this.text,this.x,this.y);
}

Button.prototype.buttonFunction = function() {
  buttonDistance = dist(mouseX,mouseY,this.x,this.y);
  if (this.text === "New Word" && buttonDistance < this.w/2 && buttonDistance < this.h/2) {
    if (mouseWentDown() === true) {
      console.log("clicked");
      words.push(createSprite(random(poemCanvasLeft,poemCanvasRight),random(poemCanvasTop,poemCanvasBottom),100,30));
    }
    else {

    }
  }
}
