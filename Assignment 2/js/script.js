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
//                                            parameters each planet has.
function planet (x,y,w,h,vx,vy,color) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.vx = vx;
  this.vy = vy;
  this.color = color;
//                                        this is how the planets are displayed
  this.displayPlanet = function() {
    fill(this.color);
    noStroke();
    ellipse(this.x,this.y,this.w,this.h);
  }
}

//                                                   O R B I T      (P A T H S)
//                                              this function establishes what
//                                              parameters each path has.
function orbit (x,y,w,h) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;  
//                                        this is how the paths are displayed
  this.displayOrbit = function() {
    noFill();
    stroke("#FFFFFF");
    ellipse(this.x,this.y,this.w,this.h);
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

// ----------------------------- P R E L O A D ----------------------------- //

function preload() {
}


// ----------------------------- S E T U P --------------------------------- //

function setup() {

// creating the canvas
  let canvas = createCanvas(800,450);
  background("#000000");

// initial planet values
  planetPink = new planet(100,100,80,80,0,0,"#F7ACCF");
  planetRed = new planet (200,200,100,100,0,0,"#AF1B3F");
  planetOrange = new planet (500,350,150,150,0,0,"#FF8552");
  planetYellow = new planet (600,200,70,70,0,0,"#E9B872");

// initial orbit values
  orbit1A = new orbit (canvas.width/2,canvas.height/2,300,300);
  console.log (orbit1A.x,orbit1A.y);
}


// ------------------------------- D R A W --------------------------------- //

function draw() {
//                                                  display the planets
  planetPink.displayPlanet();
  planetRed.displayPlanet();
  planetOrange.displayPlanet();
  planetYellow.displayPlanet();
//                                                  display the orbit paths
  orbit1A.displayOrbit();
}
