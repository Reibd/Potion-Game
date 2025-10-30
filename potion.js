let bg;
let MArray;
let recipeIngredients;
let ingredientTypeNum = Math.floor(Math.random() * 4) + 3;
let ingredientQuantNum;
let ingredientLog;
let ingredientList;

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

const DawnSinger = new Mushroom("Dawn Singer", 0.84, 0.24, 0.58, 0); //mushroom 35
const MidnightFungus = new Mushroom("Midnight Fungus", 0.58, 0.68, 0.84, 1); //mushroom 19
const Puffglow = new Mushroom("Puffglow", 0.54, 0.67, 0.73, 2); //mushroom 14
const Capling = new Mushroom("Capling", 0.86, 0.71, 0.62, 3); //mushroom 00
const ScarletSpore = new Mushroom("Scarlet Spore", 0.99, 0.34, 0.26, 4); //mushroom 02
const SporeSpark = new Mushroom("Spore Spark", 0.83, 0.78, 0.73, 5); //mushroom 04
const Glowtop = new Mushroom("Glowtop", 0.94, 0.92, 0.34, 6); //mushroom 05
const BarkShine = new Mushroom("Bark Shine", 0.63, 0.38, 0.15, 7); //mushroom 11
const CrimsonCap = new Mushroom("Crimson Cap", 0.78, 0.14, 0.03, 8); //mushroom 16
const StarlitShroom = new Mushroom("Starlit Shroom", 0.82, 0.50, 0.92, 9); //mushroom 22
const MossyGill = new Mushroom("Mossy Gill", 0.52, 0.76, 0.11, 10); //mushroom 29
const FeatherShroom = new Mushroom("Feather Shroom", 0.96, 0.78, 0.36, 11); //mushroom 34

for (let i = 0; i < ingredientTypeNum; i++){
  ingredientQuantNum[i] = Math.floor(Math.random() * 3) + 1;
}

  DawnSinger.name = ingredientList[DawnSinger.ID];
  MidnightFungus.name = ingredientList[MidnightFungus.ID];
  Puffglow.name = ingredientList[Puffglow.ID];
  Capling.name = ingredientList[Capling.ID];
  ScarletSpore.name = ingredientList[ScarletSpore.ID];
  SporeSpark.name = ingredientList[SporeSpark.ID];
  Glowtop.name = ingredientList[Glowtop.ID];
  BarkShine.name = ingredientList[BarkShine.ID];
  CrimsonCap.name = ingredientList[CrimsonCap.ID];
  StarlitShroom.name = ingredientList[StarlitShroom.ID];
  MossyGill.name = ingredientList[MossyGill.ID];
  FeatherShroom.name = ingredientList[FeatherShroom.ID];

  for (let i = 0; i < 12; i++){
    document.getElementById("demo").innerHTML = ingredientList[i];
}