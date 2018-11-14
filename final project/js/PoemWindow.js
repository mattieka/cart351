function PoemWindow(x,y,w,h) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
}

PoemWindow.prototype.display = function() {
  rectMode(CENTER);
  fill(255);
  noStroke();
  rect(this.x,this.y,this.w,this.h);
}
