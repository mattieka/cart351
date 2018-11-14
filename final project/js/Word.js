var words = [];

function wordsSetup() {

  for (var i = 0; i < 1; i++) {
    words.push(createSprite(width/2,height/2,100,30));
  };

  this.onMousePressed = function() {
    if (draggedSprite === null) {
        draggedSprite = this;
    }
  };

  this.onMouseReleased = function() {
    if (draggedSprite === this) {
        draggedSprite = null;
      }
  };
}
//--//
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

//-------------//

function dragWord() {
  if (draggedSprite !== null) {
    draggedSprite.position.x = mouseX;
    draggedSprite.position.y = mouseY;
  }
}
