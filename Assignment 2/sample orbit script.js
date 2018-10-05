var poX, posY;
var radiusX, radiusY;
var theta;

var x2;
var y2;
var rx2 = 50;
var ry2 = 50;
var theta2;

function setup() {
  createCanvas( 500, 500 );

  posX = posY = 0;

  radiusX = 150;
  radiusY = 100;

  theta = 0;
  theta2 = 0;
}

function draw() {
  background( 0 );

  theta += 0.05;

  // Calculate location of planet (relative to centre)
  posX = radiusX * cos( theta );
  posY = radiusY * sin( theta );

  // Translate to centre
  translate(width/2, height/2);

  // Translate to offset of planet
  translate(posX, posY );

  // Draw planet
  fill( 255 );
  ellipse(0,0,50,50 );

  // Calculate location of moon (relative to planet)
  x = rx2 * cos( theta2 );
  y = ry2 * sin( theta2 );

  // Translate to offset of moon
  translate(x,y);

  // Draw moon
  fill(255,0,0);
  ellipse(0,0,20,20);

  theta2 += 0.1;
}
