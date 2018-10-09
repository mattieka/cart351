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

  this.rotatePlanet = function() {
      this.tempAngle = this.tempAngle + this.rotateSpeed;
      this.x = this.hRadius * cos(this.tempAngle);
      this.y = this.vRadius * sin(this.tempAngle);
      translate(width/2,height/2);
      fill(this.color);
      noStroke();
      ellipse(this.x,this.y,this.w,this.h);
    }
}

// -------------------------- V A R I A B L E S ---------------------------- //
//                                                    planet variables
var planetPink;
//                                                     path variables
//                                                listed from inward to outward


//                                                 animation-related variables
var tempAngle = 0;

// ----------------------------- P R E L O A D ----------------------------- //



function preload() {
}

// ----------------------------- S E T U P --------------------------------- //

function setup() {

// creating the canvas
  createCanvas(800,450);
  planetPink = new planet (width/2,height/2,30,30,0,0,"#F7ACCF",width/2,height/2,0,50,100,0.04);
}


// ------------------------------- D R A W --------------------------------- //

function draw() {
//                                                  redraw background
  background("#000000");
  planetPink.rotatePlanet();
}
