let shelf;
let bar;
let bgUp;
let bgDown;
let board;
let cauldren;


let mushroom = [];
let selectB = [];
let ingredientSprite = [];
let recipeIngredients= [];
let ingredientNameList = [];
let bottleList = [];
let BigVialList = [];
let BubblyBrewBottleRisingList = [];
let ClassicJarList = [];
let EncasedPotionList = [];
let GlowingPotionList = [];
let LargeBottleList = [];
let LargeJarList = [];
let LargeTonicList = [];
let RoundPotionList = [];
let SmallBottleList = [];
let SmallElixirList = [];
let SmallVialList = [];
var potionIngredients = [];
var pIngredientsNum = potionIngredients.length;
var pColorR = 0.0;
var pColorG = 0.0;
var pColorB = 0.0;
var gamePoints = 0;


class Mushroom {
  constructor(name, R, G, B, ID) {
  this.name = name;
  this.R = R;
  this.G = G;
  this.B = B;
  this.ID = ID;
  }
}

class Bottle {
  type = ["Big Vial", "Bubbly Brew Bottle Rising", "Classic Jar", "Encased Potion", "Glowing Potion", "Large Bottle", "Large Jar", "Large Tonic", "Round Potion", "Small Bottle", "Small Elixir", "Small Vial"];
  brandID = 0;
  colourList = ["Black", "Blue", "Gold", "Green", "Lime", "Orange", "Pink", "Purple", "Red", "Turquoise", "Yellow"];
  constructor(ID) {
  this.colour = colourList[ID];
  this.ID = ID + BrandID;
  }
}

class Bvial extends Bottle {
  type = "Big Vial";
  brandID = 0;
  colourList = ["Black", "Blue", "Gold", "Green", "Lime", "Orange", "Pink", "Purple", "Red", "Turquoise", "Yellow"];
  constructor(ID) {
    super(ID);
  }
}

class BBBR extends Bottle {
  type = "Bubbly Brew Bottle Rising";
  brandID = 11;
  colourList = ["Black", "Blue", "Brown", "Cyan", "Gold", "Green", "Orange", "Pink", "Purple", "Red", "Yellow"];
  constructor(ID) {
    super(ID);
  }
}

class CJar extends Bottle {
  type = "Classic Jar";
  brandID = 22;
  colourList = ["Black_Gold", "Blue_Gold", "Gold", "Green", "Pink", "Purple", "Red_Gold", "Teal", "Turquoise_Gold", "Yellow"];
  constructor(ID) {
    super(ID);
  }
}

class EPotion extends Bottle {
  type = "Encased Potion";
  brandID = 32;
  colourList = ["Black_Gold", "Brown_Purple", "Brown_Green", "Gold", "Lime_Purple", "Yellow_Red"];
  constructor(ID) {
    super(ID);
  }
}

class GPotion extends Bottle {
  type = "Glowing Potion";
  brandID = 38;
  colourList = ["Black", "Blue", "Cyan", "Gold", "Green", "Lime", "Pink", "Purple", "Red", "Yellow"];
  constructor(ID) {
    super(ID);
  }
}

class LBottle extends Bottle {
  type = "Large Bottle";
  brandID = 48;
  colourList = ["Black", "Blue", "Brown", "Green", "Lime", "Orange", "Pink", "Purple", "Red", "Turquoise", "Yellow"];
  constructor(ID) {
    super(ID);
  }
}

class LJar extends Bottle {
  type = "Large Jar";
  brandID = 59;
  colourList = ["Black_Gold", "Blue_Gold", "Gold", "Green", "Pink", "Purple", "Red_Gold", "Teal", "Turquoise_Gold", "Yellow"];
  constructor(ID) {
    super(ID);
  }
}

class LTonic extends Bottle {
  type = "Large Tonic";
  brandID = 69;
  colourList = ["Black", "Blue", "Gold", "Green", "Orange", "Pink", "Purple", "Red", "Turquoise", "Yellow"];
  constructor(ID) {
    super(ID);
  }
}

class RPotion extends Bottle {
  type = "Round Potion";
  brandID = 80;
  colourList = ["Black", "Blue", "Gold", "Green", "Lime", "Magenta", "Orange", "Purple", "Red", "Turquoise", "Yellow"];
  constructor(ID) {
    super(ID);
  }
}

class SBottle extends Bottle {
  type = "Small Bottle";
  brandID = 91;
  colourList = ["Black_Gold", "Blue", "Gold", "Green", "Orange", "Pink", "Purple", "Red_Yellow", "Teal_Gold", "Yellow"];
  constructor(ID) {
    super(ID);
  }
}

class SElixir extends Bottle {
  type = "Small Elixir";
  brandID = 101;
  colourList = ["Black", "Blue", "Cyan", "Gold", "Green", "Orange", "Pink", "Purple", "Red", "Yellow"];
  constructor(ID) {
    super(ID);
  }
}

class SVial extends Bottle {
  type = "Small Vial";
  brandID = 111;
  colourList = ["Black", "Blue", "Brown", "DarkGreen", "Gold", "Green", "Lime", "Orange", "Pink", "Purple", "Red", "Teal", "Turquoise", "Yellow"];
  constructor(ID) {
    super(ID);
  }
}

  mushroom[0] = new Mushroom("Dawn\nSinger", 0.84, 0.24, 0.58, 0); //mushroom 35
  mushroom[1] = new Mushroom("Midnight\nFungus", 0.58, 0.68, 0.84, 1); //mushroom 19
  mushroom[2] = new Mushroom("Puffglow", 0.54, 0.67, 0.73, 2); //mushroom 14
  mushroom[3] = new Mushroom("Capling", 0.86, 0.71, 0.62, 3); //mushroom 00
  mushroom[4] = new Mushroom("Scarlet\nSpore", 0.99, 0.34, 0.26, 4); //mushroom 02
  mushroom[5] = new Mushroom("Spore\nSpark", 0.83, 0.78, 0.73, 5); //mushroom 04
  mushroom[6] = new Mushroom("Glowtop", 0.94, 0.92, 0.34, 6); //mushroom 05
  mushroom[7] = new Mushroom("Bark\nShine", 0.63, 0.38, 0.15, 7); //mushroom 11
  mushroom[8] = new Mushroom("Crimson\nCap", 0.78, 0.14, 0.03, 8); //mushroom 16
  mushroom[9] = new Mushroom("Starlit\nShroom", 0.82, 0.50, 0.92, 9); //mushroom 22
  mushroom[10] = new Mushroom("Mossy\nGill", 0.52, 0.76, 0.11, 10); //mushroom 29
  mushroom[11] = new Mushroom("Feather\nShroom", 0.96, 0.78, 0.36, 11); //mushroom 34
  
function setPotionList() {

  for (let i = 0; i < 11; i++) {
    BigVialList[i] = new BVial(i);
  }

  for (let i = 0; i < 11; i++) {
    BubblyBrewBottleRisingList[i] = new BBBR(i);
  }

  for (let i = 0; i < 10; i++) {
    ClassicJarListList[i] = new CJar(i);
  }

  for (let i = 0; i < 6; i++) {
    EncasedPotionList[i] = new Epotion(i);
  }

  for (let i = 0; i < 10; i++) {
    GlowingPotionList[i] = new GPotion(i);
  }

  for (let i = 0; i < 11; i++) {
    LargeBottleList[i] = new LBottle(i);
  }

  for (let i = 0; i < 10; i++) {
    LargeJarList[i] = new LJar(i);
  }

  for (let i = 0; i < 11; i++) {
    LargeTonicList[i] = new Ltonic(i);
  }

  for (let i = 0; i < 11; i++) {
    RoundPotionList[i] = new RPotion(i);
  }

  for (let i = 0; i < 10; i++) {
    SmallBottleList[i] = new SBottle(i);
  }

  for (let i = 0; i < 10; i++) {
    SmallElixirList[i] = new SElixir(i);
  }

  for (let i = 0; i < 14; i++) {
    SmallVialList[i] = new SVial(i);
  }

}


function setMushrooms(){

  for (let i = 0; i < 12; i++) {

    ingredientNameList[i] = mushroom[i].name;
  }


}

function setBottleList(){

  bottleList = ["Big Vial", "Bubbly Brew Bottle Rising", "Classic Jar", "Encased Potion", "Glowing Potion", "Large Bottle", "Large Jar", "Large Tonic", "Round Potion", "Small Bottle", "Small Elixir", "Small Vial"];

  return bottleList;
}

function recipe(ingredientNameList, bottleList){
  let recipeIngredients = [];
  let ingredientLog = [];
  let ingredientTypeNum = 0;
  let ingredientQuantNum = [];
  let ingredientTypeList = [];
  let recipeBottle = "string";

  ingredientTypeNum = Math.floor(Math.random() * 4) + 3;

  recipeBottle = bottleList[Math.floor(Math.random() * 12)];

  for (let i = 0; i < ingredientTypeNum; i++){
    ingredientQuantNum[i] = Math.floor(Math.random() * 3) + 1;
  }

  for (let i = 0; i < ingredientTypeNum; i++){
    let temp = Math.floor(Math.random() * 12);
    for (let j = 0; j < ingredientLog.length; j++){
        if (temp == ingredientLog[j]){
            temp = Math.floor(Math.random() * 12);
            j = 0;
        }
    }
    ingredientTypeList[i] = ingredientNameList[temp];
    ingredientLog[i] = temp;
  }

  for (let i = 0; i < ingredientTypeList.length; i++){
    for (let j = 0; j < ingredientQuantNum[i]; j++){
      recipeIngredients[j] = ingredientTypeList[i];
    }
  }

  recipeIngredients[recipeIngredients.length + 1] = recipeBottle;

  return recipeIngredients;
}

function ingredientButton(ID){
  potionIngredients[potionIngredients.length] = mushroom[ID].name;

  pIngredientsNum = potionIngredients.length;

  pColorR = (pColorR + mushroom[ID].R) / (255 * pIngredientsNum);

  pColorG = (pColorG + mushroom[ID].G) / (255 * pIngredientsNum);

  pColorB = (pColorB + mushroom[ID].B) / (255 * pIngredientsNum);
}



function checkPotion(recipeIngredients){
  let check = [false];
  let trueCount = 0;
  let points = 0;

  for (let i = 0; i < potionIngredients.length; i++){
    check[i] = false;
  }

  for (let i = 0; i < potionIngredients.length; i++){
    for (let j = 0; j < recipeIngredients.length; j++){
      if (potionIngredients[i] == recipeIngredients[j]){
        check[i] = true;
      }
    }
  }

  for (let i = 0; i < potionIngredients.length; i++){
    if (check[i] == true){
      trueCount++;
    }
  }

  points = (trueCount/potionIngredients.length) * 1000;

  return points;
}

function BigVialB(){
  potionIngredients[potionIngredients.length] = bottleList[0];

  if (pColorR < 0.4 && pColorG < 0.4 && pColorB < 0.4){
    return BVialBlack.name;
  } 
  else if ((pColorG > 0.4 && pColorG < 0.7) && pColorR > 0.4 && pColorB < 0.6){
    return BVialRed.name;
  }
  else if (pColorB < 0.6 && (pColorG > 0.6 && pColorG < 0.7) && pColorR > 0.6){
    return BVialOrange.name;
  } 
  else if ((pColorG > 0.7 && pColorG < 0.9) && pColorR > 0.4 && pColorB < 0.6){
    return BVialGold.name;
  }
  else if (pColorG > 0.9 && pColorR > 0.9 && pColorB > 0.6){
    return BVialYellow.name;
  }
  else if (pColorG > 0.9 && (pColorR < 0.9 && pColorR > 0.51) && pColorB > 0.6){
    return BVialLime.name;
  }
  else if (pColorB < 0.6 && pColorG > 0.4 && pColorR < 0.51){
    return BVialGreen.name;
  }
  else if (pColorB > 0.6 && pColorG > 0.6 && pColorR < 0.51){
    return BVialTurquise.name;
  }
  else if (pColorB > 0.6 && pColorG < 0.6 && pColorR < 0.4){
    return BVialBlue.name;
  }
  else if (pColorB > 0.6 && pColorG < 0.6 && pColorR > 0.4){
    return BVialPurple.name;
  }
  else if (pColorB < 0.6 && pColorG < 0.6 && pColorR > 0.4){
    return BVialPink.name;
  }
  else {
    return BVialBlack.name;
  }
}

function BubblyBrewBottleRisingB(){
  potionIngredients[potionIngredients.length] = bottleList[1];

  if (pColorR < 0.4 && pColorG < 0.4 && pColorB < 0.4){
    return BBBRBlack.name;
  }
  else if ((pColorG > 0.2 && pColorG < 0.5) && (pColorR > 0.4 && pColorR < 0.8) && pColorB < 0.6){
    return BBBRBrown.name;
  } 
  else if ((pColorG > 0.4 && pColorG < 0.7) && pColorR > 0.4 && pColorB < 0.6){
    return BBBRRed.name;
  }
  else if (pColorB < 0.6 && (pColorG > 0.6 && pColorG < 0.7) && pColorR > 0.6){
    return BBBROrange.name;
  } 
  else if ((pColorG > 0.7 && pColorG < 0.9) && pColorR > 0.4 && pColorB < 0.6){
    return BBBRGold.name;
  }
  else if (pColorG > 0.9 && pColorR > 0.9 && pColorB > 0.6){
    return BBBRYellow.name;
  }
  else if (pColorB < 1 && pColorG > 0.4 && pColorR < 0.51){
    return BBBRGreen.name;
  }
  else if (pColorB > 0.6 && pColorG > 0.6 && pColorR < 0.51){
    return BBBRCyan.name;
  }
  else if (pColorB > 0.6 && pColorG < 0.6 && pColorR < 0.4){
    return BBBRBlue.name;
  }
  else if (pColorB > 0.6 && pColorG < 0.6 && pColorR > 0.4){
    return BBBRPurple.name;
  }
  else if (pColorB < 0.6 && pColorG < 0.6 && pColorR > 0.4){
    return BBBRPink.name;
  }
  else {
    return BBBRBlack.name;
  }
}

ingredientNameList = setMushrooms();

bottleList = setBottleList();

recipeIngredients = recipe(ingredientNameList, bottleList);

gamePoints += checkPotion(recipeIngredients);

function loadRoom() {

  shelf = loadImage('Game Sprites/Bar Pack/individuals sprite/shelf.png');
  bar = loadImage('Game Sprites/Bar Pack/individuals sprite/bar.png');
  bgUp = loadImage('Game Sprites/Bar Pack/individuals sprite/wall_bar.png');
  board = loadImage('Game Sprites/Bar Pack/individuals sprite/Greenboard_weird_writing.png');
  bgDown = loadImage('Game Sprites/Bar Pack/individuals sprite/floor_bar.png');
  //cauldren = loadGif('Game Sprites/Cauldren Set/Red Cauldren Gif.gif');

}

function loadIngredients() {

  ingredientSprite[DawnSinger.ID] = loadImage('Game Sprites/Pixel Mushroom Pack/Mushroom035.png');
  ingredientSprite[MidnightFungus.ID] = loadImage('Game Sprites/Pixel Mushroom Pack/Mushroom019.png');
  ingredientSprite[Puffglow.ID] = loadImage('Game Sprites/Pixel Mushroom Pack/Mushroom014.png');
  ingredientSprite[Capling.ID] = loadImage('Game Sprites/Pixel Mushroom Pack/Mushroom000.png');
  ingredientSprite[ScarletSpore.ID] = loadImage('Game Sprites/Pixel Mushroom Pack/Mushroom002.png');
  ingredientSprite[SporeSpark.ID] = loadImage('Game Sprites/Pixel Mushroom Pack/Mushroom004.png');
  ingredientSprite[Glowtop.ID] = loadImage('Game Sprites/Pixel Mushroom Pack/Mushroom005.png');
  ingredientSprite[BarkShine.ID] = loadImage('Game Sprites/Pixel Mushroom Pack/Mushroom011.png');
  ingredientSprite[CrimsonCap.ID] = loadImage('Game Sprites/Pixel Mushroom Pack/Mushroom016.png');
  ingredientSprite[StarlitShroom.ID] = loadImage('Game Sprites/Pixel Mushroom Pack/Mushroom022.png');
  ingredientSprite[MossyGill.ID] = loadImage('Game Sprites/Pixel Mushroom Pack/Mushroom029.png');
  ingredientSprite[FeatherShroom.ID] = loadImage('Game Sprites/Pixel Mushroom Pack/Mushroom034.png');

}

function drawRoom() {

  image(bgUp, 0, 0, width, height - 150);
  image(bgDown, -235, height - 150, width + 470, 150);
  image(shelf, 0, 95, 585, 405);
  image(bar, 615, 265, 635, 235);
  image(board, width - 285, 0, 235, 145);
  //image(cauldren, 600, 100, 96, 96);

}

function drawIngredients() {

  image(ingredientSprite[0], 40, 140, 64, 64);
  image(ingredientSprite[1], 230, 140, 64, 64);
  image(ingredientSprite[2], 415, 140, 64, 64);
  image(ingredientSprite[3], 40, 235, 64, 64);
  image(ingredientSprite[4], 230, 235, 64, 64);
  image(ingredientSprite[5], 415, 235, 64, 64);
  image(ingredientSprite[6], 40, 325, 64, 64);
  image(ingredientSprite[7], 230, 325, 64, 64);
  image(ingredientSprite[8], 415, 325, 64, 64);
  image(ingredientSprite[9], 40, 415, 64, 64);
  image(ingredientSprite[10], 230, 415, 64, 64);
  image(ingredientSprite[11], 415, 415, 64, 64);

}

function createIngredientButtons() {

  for (let i = 0; i < 12; i++) {
    selectB[i] = createButton(mushroom[i].name);
  }
  
}

function drawIngredientButtons() {

  for (let i = 0; i < 12; i++) {
    selectB[i].size(60, 60);
  }

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 3; j++) {
      let x = 120 + j * 190 - 5 * j;
      if (j == 0) {
        x -= 5;
      }
      let y = 155 + i * 90;
      if (i == 3) {
        y -= 5;
      }
      selectB[i * 3 + j].position(x, y);
    }
  }

}

function selectIngredient() {

  for (let i = 0; i < 12; i++) {
    selectB[i].mousePressed(ingredientButton[i]);
  }

}

function setup() {

  loadRoom();
  loadIngredients();
  createCanvas(1250, 550);
  createIngredientButtons();

}

function draw() {
  
  drawRoom();
  drawIngredients();
  drawIngredientButtons();

}

function game() {
  selectIngredient();

}