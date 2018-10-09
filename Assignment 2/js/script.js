// ---------------- P R O J E C T      I N F O R M A T I O N ---------------- //

/******************
Conksunk Galaxy (working title)
By Nat and Mattie

It's a galaxy, where you can alter things about it. like your own personal
pocket galaxy that you have control over. like youre some kinda god

******************/

// --------------- J A V A S C R I P T       O B J E C T S ----------------- //


// -------------------------- F U N C T I O N S ---------------------------- //

//                                                              P L A N E T S
//                                            this function establishes what
//                                            parameters each planet has and
//                                            how it rotates
function planet (x,y,w,h,vx,vy,color,centerX,centerY,tempAngle,hRadius,vRadius,rotateSpeed) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.vx = vx;
  this.vy = vy;
  this.color = color;
  this.centerX = centerX;
  this.centerY = centerY;
  this.tempAngle = tempAngle;
  this.hRadius = hRadius;
  this.vRadius = vRadius;
  this.rotateSpeed = rotateSpeed;

//test different orbit method

//  this.displayPlanet = function() {


  this.rotatePlanet = function() {
    fill(this.color);
    noStroke();
    push ();
      this.tempAngle = this.tempAngle + this.rotateSpeed;
      this.x = this.hRadius * cos(this.tempAngle);
      this.y = this.vRadius * sin(this.tempAngle);
      translate(canvas.width/2,canvas.height/2);
      orbit (this.x,this.y,this.w,this.h);
    pop ();

    }
//  }
}
//                                        this is how the planets are displayed
//                                   fill color and stroke are also established
/**  this.displayPlanet = function() {
    fill(this.color);
    noStroke();

    push();
      translate(this.centerX,this.centerY);
      rotate(radians(0+tempAngle));
      ellipse(this.x,this.y,this.w,this.h);
    pop();
  }
//                                          this is how the planets will rotate
  this.rotatePlanet = function() {
    tempAngle = tempAngle + 1;
  }
}
**/


/************

how this works (for the benefit of mattie, who still goes to weenie hut junior):
PUSH AND POP: changing the coordinates or whatever when trying to
translate/rotate/etc gets applied to EVERYTHING. push and pop make it so that
it's only applied to that one thing.

translate/rotate are functions in p5 (i think).
translate grabs centerX and centerY so that the rotation, which is next, uses
those two variables as an anchor point. the rotate function tells the planet
to rotate 0 radians plus the current value of tempAngle, which gets increased
every frame in the rotatePlanet function.

the ellipse has to be put in after the rotatation because if not, then the
ellipse will just Happen before it knows to rotate

*************/

//                                                   O R B I T      (P A T H S)
//                                              this function establishes what
//                                              parameters each path has.
function orbit (x,y,w,h,/*centerX,centerY*/) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
//  this.centerX = centerX;
//  this.centerY = centerY;
//                                        this is how the paths are displayed
  this.displayOrbit = function() {
    noFill();
    stroke("#FFFFFF");
    ellipse(this.x,this.y,this.w,this.h);
//    stroke("#4BEC13");
//    ellipse(this.centerX,this.centerY,10);
  }
}

// -------------------------- V A R I A B L E S ---------------------------- //
//                                                    planet variables
var planetPink;
var planetRed;
var planetOrange;
var planetYellow;
//                                                     path variables
//                                                listed from inward to outward
var orbit1A;
var orbit1B;

//                                                 animation-related variables
var tempAngle = 0;

// ----------------------------- P R E L O A D ----------------------------- //

function preload() {
}

// ----------------------------- S E T U P --------------------------------- //

function setup() {

// creating the canvas
  let canvas = createCanvas(800,450);
  background("#000000");

// initial planet values
  planetPink = new planet(canvas.width/2,canvas.height/2,30,30,0,0,"#F7ACCF",canvas.width/2,canvas.height/2,0,50,100,0.05);
  planetRed = new planet (0,0,21,21,0,0,"#AF1B3F",canvas.width/2,canvas.height/2,0);
  planetOrange = new planet (500,350,28,28,0,0,"#FF8552");
  planetYellow = new planet (600,200,70,70,0,0,"#E9B872");

// initial orbit values

  orbit1B = new orbit (canvas.width/2,canvas.height/2,150,100,canvas.width/2,canvas.height/2);


}


// ------------------------------- D R A W --------------------------------- //

function draw() {
//                                                  redraw background
background("#000000");

//                                                  display the planets
//  planetPink.displayPlanet();
//  planetRed.displayPlanet();
//  planetOrange.displayPlanet();
//  planetYellow.displayPlanet();

//                                                  make planets rotate
  planetPink.rotatePlanet();
  planetRed.rotatePlanet();

//                                                  display the orbit paths
orbit1A = new orbit (planetPink.x,planetPink.y,10,10);
console.log (orbit1A.x,orbit1A.y);
  orbit1A.displayOrbit();
  orbit1B.displayOrbit();
}
