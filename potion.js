let bg;

function setup() {
  bg = loadImage('Game Sprites/Bar Pack/individual sprite/shelf.png');
  createCanvas(391, 114);
}

function draw() {
  background(0);
}

function Mushroom(name, R, G, B){
  this.name = name;
  this.R = R;
  this.G = G;
  this.B = B;
}

const pShroom = new DawnSinger(dawnSinger, 0.84, 0.24, 0.58);
