let bg;

function setup() {
  bg = loadImage('Game Sprites/Bar Pack/individual sprite/shelf.png');
  createCanvas(391, 114);
}

function draw() {
  background(0);
}

function Mushroom(name, R, G, B, ID){
  this.name = "name";
  this.R = 0.0;
  this.G = 0.0;
  this.B = 0.0;
  this.ID = 0;
}

const DawnSinger = new Mushroom("Dawn Singer", 0.84, 0.24, 0.58, 1); //mushroom 35
const MidnightFungus = new Mushroom("Midnight Fungus", 0.58, 0.68, 0.84, 2); //mushroom 19
const Puffglow = new Mushroom("Puffglow", 0.54, 0.67, 0.73, 3); //mushroom 14
const Capling = new Mushroom("Capling", 0.86, 0.71, 0.62, 4); //mushroom 00
const ScarletSpore = new Mushroom("Scarlet Spore", 0.99, 0.34, 0.26, 5); //mushroom 02
const SporeSpark = new Mushroom("Spore Spark", 0.83, 0.78, 0.73, 6); //mushroom 04
const Glowtop = new Mushroom("Glowtop", 0.94, 0.92, 0.34, 7); //mushroom 05
const BarkShine = new Mushroom("Bark Shine", 0.63, 0.38, 0.15, 8); //mushroom 11
const CrimsonCap = new Mushroom("Crimson Cap", 0.78, 0.14, 0.03, 9); //mushroom 16
const StarlitShroom = new Mushroom("Starlit Shroom", 0.82, 0.50, 0.92, 10); //mushroom 22
const MossyGill = new Mushroom("Mossy Gill", 0.52, 0.76, 0.11, 11); //mushroom 29
const FeatherShroom = new Mushroom("Feather Shroom", 0.96, 0.78, 0.36, 12); //mushroom 34
