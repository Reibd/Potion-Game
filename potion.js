let shelf;
let bar;
let bgUp;
let bgDown;
let board;
let cauldren;


var shelfNumber = 0;
const mushroom = [];
const fruit = [];
const veg = [];
let selectB = [];

for (let i = 0; i < 3; i++) {
  selectB[i] = [];
}
let ingredientSprite = [];
for (let i = 0; i < 3; i++) {
  ingredientSprite[i] = [];
}

let roomB = [];
let recipeIngredients= [];
let ingredientNameList = [];
let bottleList = [];
let mushroomNameList = [];
let fruitNameList = [];
let vegNameList = [];
var BigVialList = [];
var BubblyBrewBottleRisingList = [];
var ClassicJarList = [];
var EncasedPotionList = [];
var GlowingPotionList = [];
var LargeBottleList = [];
var LargeJarList = [];
var LargeTonicList = [];
var RoundPotionList = [];
var SmallBottleList = [];
var SmallElixirList = [];
var SmallVialList = [];
var potionIngredients = [];
var pIngredientsNum = potionIngredients.length;
var pColorR = 0.0;
var pColorG = 0.0;
var pColorB = 0.0;
var gamePoints = 0;


class Mushroom {
  constructor(name, R, G, B, ID, sprite) {
  this.name = name;
  this.R = R;
  this.G = G;
  this.B = B;
  this.ID = ID;
  this.sprite = sprite;
  }
}

class Fruit {
  constructor(name, R, G, B, ID, sprite) {
  this.name = name;
  this.R = R;
  this.G = G;
  this.B = B;
  this.ID = ID;
  this.sprite = sprite;
  }
}

class Veg {
  constructor(name, R, G, B, ID, sprite) {
  this.name = name;
  this.R = R;
  this.G = G;
  this.B = B;
  this.ID = ID;
  this.sprite = sprite;
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

class BVial extends Bottle {
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

  mushroom[0] = new Mushroom("Dawn\nSinger", 0.84, 0.24, 0.58, 0, 'Game Sprites/Pixel Mushroom Pack/Mushroom035.png'); //mushroom 35
  mushroom[1] = new Mushroom("Midnight\nFungus", 0.58, 0.68, 0.84, 1, 'Game Sprites/Pixel Mushroom Pack/Mushroom019.png'); //mushroom 19
  mushroom[2] = new Mushroom("Puffglow", 0.54, 0.67, 0.73, 2, 'Game Sprites/Pixel Mushroom Pack/Mushroom014.png'); //mushroom 14
  mushroom[3] = new Mushroom("Capling", 0.86, 0.71, 0.62, 3, 'Game Sprites/Pixel Mushroom Pack/Mushroom000.png'); //mushroom 00
  mushroom[4] = new Mushroom("Scarlet\nSpore", 0.99, 0.34, 0.26, 4, 'Game Sprites/Pixel Mushroom Pack/Mushroom002.png'); //mushroom 02
  mushroom[5] = new Mushroom("Spore\nSpark", 0.83, 0.78, 0.73, 5, 'Game Sprites/Pixel Mushroom Pack/Mushroom004.png'); //mushroom 04
  mushroom[6] = new Mushroom("Glowtop", 0.94, 0.92, 0.34, 6, 'Game Sprites/Pixel Mushroom Pack/Mushroom005.png'); //mushroom 05
  mushroom[7] = new Mushroom("Bark\nShine", 0.63, 0.38, 0.15, 7, 'Game Sprites/Pixel Mushroom Pack/Mushroom011.png'); //mushroom 11
  mushroom[8] = new Mushroom("Crimson\nCap", 0.78, 0.14, 0.03, 8, 'Game Sprites/Pixel Mushroom Pack/Mushroom016.png'); //mushroom 16
  mushroom[9] = new Mushroom("Starlit\nShroom", 0.82, 0.50, 0.92, 9, 'Game Sprites/Pixel Mushroom Pack/Mushroom022.png'); //mushroom 22
  mushroom[10] = new Mushroom("Mossy\nGill", 0.52, 0.76, 0.11, 10, 'Game Sprites/Pixel Mushroom Pack/Mushroom029.png'); //mushroom 29
  mushroom[11] = new Mushroom("Feather\nShroom", 0.96, 0.78, 0.36, 11, 'Game Sprites/Pixel Mushroom Pack/Mushroom034.png'); //mushroom 34

  fruit[0] = new Fruit("Pome-\ngranate", 0.87, 0.22, 0.23, 12, 'Game Sprites/Helm3ts_32x32_fruit_veggie_asset_pack/SLICES/SLICES_LINE/PomegranateSLICE.png'); //slice
  fruit[1] = new Fruit("Passion\nFruit", 0.98, 0.76, 0.17, 13, 'Game Sprites/Helm3ts_32x32_fruit_veggie_asset_pack/SLICES/SLICES_LINE/PassionfruitSLICE.png'); //slice
  fruit[2] = new Fruit("Dragon\nFruit", 0.99, 0.82, 0.87, 14, 'Game Sprites/Helm3ts_32x32_fruit_veggie_asset_pack/SLICES/SLICES_LINE/DragonFruitSLICE.png'); //slice
  fruit[3] = new Fruit("Pine-\napple", 0.98, 0.83, 0.17, 15, 'Game Sprites/Helm3ts_32x32_fruit_veggie_asset_pack/SLICES/SLICES_LINE/PineappleSLICE.png'); //slice
  fruit[4] = new Fruit("Lemon", 0.98, 0.97, 0.71, 16, 'Game Sprites/Helm3ts_32x32_fruit_veggie_asset_pack/SLICES/SLICES_LINE/LemonSLICE.png'); //slice
  fruit[5] = new Fruit("Kiwi", 0.56, 0.85, 0.41, 17, 'Game Sprites/Helm3ts_32x32_fruit_veggie_asset_pack/SLICES/SLICES_LINE/kiwiSLICE.png'); //slice
  fruit[6] = new Fruit("Lychee", 0.87, 0.26, 0.43, 18, 'Game Sprites/Helm3ts_32x32_fruit_veggie_asset_pack/FRUITS/FRUIT_LINE/Lychee.png'); //full
  fruit[7] = new Fruit("Rasp-\nberry", 0.53, 0.02, 0.18, 19, 'Game Sprites/Helm3ts_32x32_fruit_veggie_asset_pack/FRUITS/FRUIT_LINE/Raspberry.png'); //full
  fruit[8] = new Fruit("Black-\ncurrant", 0.27, 0.35, 0.63, 20, 'Game Sprites/Helm3ts_32x32_fruit_veggie_asset_pack/FRUITS/FRUIT_LINE/Blackcurrant.png'); //full
  fruit[9] = new Fruit("Starfruit", 0.93, 0.94, 0.32, 21, 'Game Sprites/Helm3ts_32x32_fruit_veggie_asset_pack/FRUITS/FRUIT_LINE/Starfruit.png'); //full
  fruit[10] = new Fruit("Papaya", 0.93, 0.38, 0.24, 22, 'Game Sprites/Helm3ts_32x32_fruit_veggie_asset_pack/FRUITS/FRUIT_LINE/Papaya.png'); //full
  fruit[11] = new Fruit("Jackfruit", 0.57, 0.59, 0.25, 23, 'Game Sprites/Helm3ts_32x32_fruit_veggie_asset_pack/FRUITS/FRUIT_LINE/Jackfruit.png'); //full
  
  veg[0] = new Veg("Beetroot", 0.52, 0.05, 0.12, 24, 'Game Sprites/Helm3ts_32x32_fruit_veggie_asset_pack/VEGGIES/VEGGIES_LINE/Beetroot.png');
  veg[1] = new Veg("Garlic", 0.98, 0.97, 0.94, 25, 'Game Sprites/Helm3ts_32x32_fruit_veggie_asset_pack/VEGGIES/VEGGIES_LINE/Garlic.png');
  veg[2] = new Veg("Ginger", 0.76, 0.71, 0.55, 26, 'Game Sprites/Helm3ts_32x32_fruit_veggie_asset_pack/VEGGIES/VEGGIES_LINE/Ginger.png');
  veg[3] = new Veg("Kohlrabi", 0.46, 0.70, 0.33, 27, 'Game Sprites/Helm3ts_32x32_fruit_veggie_asset_pack/VEGGIES/VEGGIES_LINE/Kohlrabi.png');
  veg[4] = new Veg("Leek", 0.73, 0.87, 0.46, 28, 'Game Sprites/Helm3ts_32x32_fruit_veggie_asset_pack/VEGGIES/VEGGIES_LINE/Leek.png');
  veg[5] = new Veg("Turnip", 0.43, 0.08, 0.31, 29, 'Game Sprites/Helm3ts_32x32_fruit_veggie_asset_pack/VEGGIES/VEGGIES_LINE/Turnip.png');
  veg[6] = new Veg("Radish", 0.68, 0.14, 0.20, 30, 'Game Sprites/Helm3ts_32x32_fruit_veggie_asset_pack/VEGGIES/VEGGIES_LINE/Radish.png');
  veg[7] = new Veg("Parsnip", 0.94, 0.84, 0.55, 31, 'Game Sprites/Helm3ts_32x32_fruit_veggie_asset_pack/VEGGIES/VEGGIES_LINE/Parsnip.png');
  veg[8] = new Veg("Olive", 0.78, 0.71, 0.01, 32, 'Game Sprites/Helm3ts_32x32_fruit_veggie_asset_pack/VEGGIES/VEGGIES_LINE/Olive.png');
  veg[9] = new Veg("Onion", 0.83, 0.82, 0.64, 33, 'Game Sprites/Helm3ts_32x32_fruit_veggie_asset_pack/VEGGIES/VEGGIES_LINE/RedOnion.png'); //red onion
  veg[10] = new Veg("Red\nCabbage", 0.99, 0.42, 0.97, 34, 'Game Sprites/Helm3ts_32x32_fruit_veggie_asset_pack/VEGGIES/VEGGIES_LINE/RedCabbage.png');
  veg[11] = new Veg("Hot\nPepper", 0.68, 0.14, 0.20, 35, 'Game Sprites/Helm3ts_32x32_fruit_veggie_asset_pack/VEGGIES/VEGGIES_LINE/HotPepper.png');
  
function setPotionList() {

  for (let i = 0; i < 11; i++) {
    BigVialList[i] = new BVial(i);
  }

  for (let i = 0; i < 11; i++) {
    BubblyBrewBottleRisingList[i] = new BBBR(i);
  }

  for (let i = 0; i < 10; i++) {
    ClassicJarList[i] = new CJar(i);
  }

  for (let i = 0; i < 6; i++) {
    EncasedPotionList[i] = new EPotion(i);
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
    LargeTonicList[i] = new LTonic(i);
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

    mushroomNameList[i] = mushroom[i].name;
  }

  return mushroomNameList;
}

function setFruits(){

  for (let i = 0; i < 12; i++) {

    fruitNameList[i] = fruit[i].name;
  }

  return fruitNameList;
}

function setVegs(){

  for (let i = 0; i < 12; i++) {

    vegNameList[i] = veg[i].name;
  }

  return vegNameList;
}

function setIngedientList(mushroomNameList, fruitNameList, vegNameList){

  for (let i = 0; i < mushroomNameList.length; i++){
    ingredientNameList[i] = mushroomNameList[i];
  }

  for (let i = mushroomNameList.length; i < fruitNameList.length; i++){
    ingredientNameList[i] = fruitNameList[i];
  }

  for (let i = mushroomNameList.length + fruitNameList.length; i < vegNameList.length; i++){
    ingredientNameList[i] = vegNameList[i];
  }

  return ingredientNameList;
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
  potionIngredients[potionIngredients.length] = ingredientNameList[ID];

  pIngredientsNum = potionIngredients.length;

  if (ID < 12){
  pColorR = (pColorR + mushroom[ID].R) / (pIngredientsNum) * 255;

  pColorG = (pColorG + mushroom[ID].G) / (pIngredientsNum) * 255;

  pColorB = (pColorB + mushroom[ID].B) / (pIngredientsNum) * 255;
  }

  if (ID < 24 && ID > 11){
  pColorR = (pColorR + fruit[ID].R) / (pIngredientsNum) * 255;

  pColorG = (pColorG + fruit[ID].G) / (pIngredientsNum) * 255;

  pColorB = (pColorB + fruit[ID].B) / (pIngredientsNum) * 255;
  }

  if (ID > 23){
  pColorR = (pColorR + veg[ID].R) / (pIngredientsNum) * 255;

  pColorG = (pColorG + veg[ID].G) / (pIngredientsNum) * 255;

  pColorB = (pColorB + veg[ID].B) / (pIngredientsNum) * 255;
  }
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
    return BVial.colourList[0];
  } 
  else if ((pColorG > 0.4 && pColorG < 0.7) && pColorR > 0.4 && pColorB < 0.6){
    return BVial.colourList[8];
  }
  else if (pColorB < 0.6 && (pColorG > 0.6 && pColorG < 0.7) && pColorR > 0.6){
    return BVial.colourList[5];
  } 
  else if ((pColorG > 0.7 && pColorG < 0.9) && pColorR > 0.4 && pColorB < 0.6){
    return BVial.colourList[2];
  }
  else if (pColorG > 0.9 && pColorR > 0.9 && pColorB > 0.6){
    return BVial.colourList[10];
  }
  else if (pColorG > 0.9 && (pColorR < 0.9 && pColorR > 0.51) && pColorB > 0.6){
    return BVial.colourList[4];
  }
  else if (pColorB < 0.6 && pColorG > 0.4 && pColorR < 0.51){
    return BVial.colourList[3];
  }
  else if (pColorB > 0.6 && pColorG > 0.6 && pColorR < 0.51){
    return BVial.colourList[9];
  }
  else if (pColorB > 0.6 && pColorG < 0.6 && pColorR < 0.4){
    return BVial.colourList[1];
  }
  else if (pColorB > 0.6 && pColorG < 0.6 && pColorR > 0.4){
    return BVial.colourList[7];
  }
  else if (pColorB < 0.6 && pColorG < 0.6 && pColorR > 0.4){
    return BVial.colourList[6];
  }
  else {
    return BVial.colourList[0];
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

function loadRoom() {

  shelf = loadImage('Game Sprites/Bar Pack/individuals sprite/shelf.png');
  bar = loadImage('Game Sprites/Bar Pack/individuals sprite/bar.png');
  bgUp = loadImage('Game Sprites/Bar Pack/individuals sprite/wall_bar.png');
  board = loadImage('Game Sprites/Bar Pack/individuals sprite/Greenboard_weird_writing.png');
  bgDown = loadImage('Game Sprites/Bar Pack/individuals sprite/floor_bar.png');
  //cauldren = loadGif('Game Sprites/Cauldren Set/Red Cauldren Gif.gif');

}

function loadIngredients() {

  for (let i = 0; i < 12; i++) {
    ingredientSprite[0][i] = loadImage(mushroom[i].sprite);
  }

  for (let i = 0; i < 12; i++) {
    ingredientSprite[1][i] = loadImage(fruit[i].sprite);
  }

  for (let i = 0; i < 12; i++) {
    ingredientSprite[2][i] = loadImage(veg[i].sprite);
  }

}

function drawRoom() {

  image(bgUp, 0, 0, width, height - 150);
  image(bgDown, -235, height - 150, width + 470, 150);
  image(shelf, 0, 95, 585, 405);
  image(bar, 615, 265, 635, 235);
  image(board, width - 285, 0, 235, 145);
  //image(cauldren, 600, 100, 96, 96);

}

function drawIngredients(shelf) {

  image(ingredientSprite[shelf][0], 40, 140, 64, 64);
  image(ingredientSprite[shelf][1], 230, 140, 64, 64);
  image(ingredientSprite[shelf][2], 415, 140, 64, 64);
  image(ingredientSprite[shelf][3], 40, 235, 64, 64);
  image(ingredientSprite[shelf][4], 230, 235, 64, 64);
  image(ingredientSprite[shelf][5], 415, 235, 64, 64);
  image(ingredientSprite[shelf][6], 40, 325, 64, 64);
  image(ingredientSprite[shelf][7], 230, 325, 64, 64);
  image(ingredientSprite[shelf][8], 415, 325, 64, 64);
  image(ingredientSprite[shelf][9], 40, 415, 64, 64);
  image(ingredientSprite[shelf][10], 230, 415, 64, 64);
  image(ingredientSprite[shelf][11], 415, 415, 64, 64);

}

function hideIngredients(shelf) {


  for (let i = 0; i < 12; i++) {
    ingredientSprite[shelf][i].hide();
  }

}

function createIngredientButtons() {

  for (let i = 0; i < 12; i++) {
    selectB[0][i] = createButton(mushroom[i].name);
  }

  for (let i = 0; i < 12; i++) {
    selectB[1][i] = createButton(fruit[i].name);
  }

  for (let i = 0; i < 12; i++) {
    selectB[2][i] = createButton(veg[i].name);
  }
  
}

function drawIngredientButtons(shelfNumber) {

  for (let i = 0; i < 12; i++) {
    selectB[shelfNumber][i].size(60, 60);
    selectB[shelfNumber][i].show();
  }

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 3; j++) {
      let x = 120 + j * 190 - 5 * j;
      if (j == 0) {
        x -= 5;
      }
      let y = 155 + i * 90;
      if (i == 3) {
        y += 5;
      }
      selectB[shelfNumber][i * 3 + j].position(x, y);
    }
  }

}

function hideIngredientButtons(shelfNumber) {

  if (shelfNumber != 0) {
    for (let i = 0; i < 12; i++) {
    selectB[shelfNumber][0].hide();
    }
  }

  if (shelfNumber != 1) {
    for (let i = 0; i < 12; i++) {
    selectB[shelfNumber][1].hide();
    }
  }

  if (shelfNumber != 2) {
    for (let i = 0; i < 12; i++) {
    selectB[shelfNumber][2].hide();
    }
  }
  

}

function selectIngredient(shelf) {

  for (let i = 0; i < 12; i++) {
    selectB[shelf][i].mousePressed(ingredientButton[shelf][i]);
  }

}

function createShelfButtons() {

  roomB[0] = createButton("See Mushrooms");
  roomB[1] = createButton("See Fruits");
  roomB[2] = createButton("See Vegetables");

}

function drawShelfButtons(shelf) {

  for (let i = 0; i < 3; i++) {
    roomB[i].size(100, 40);
    roomB[i].style('background-color', 'white');
  }

  roomB[shelf].style('background-color', 'yellow');

  roomB[0].position(65, 520);
  roomB[1].position(250, 520);
  roomB[2].position(435, 520);

}

function selectShelfButton() {

  for (let i = 0; i < 3; i++) {
    roomB[i].mousePressed(() => shelfNumber = i);
  }

}

function setup() {

  loadRoom();
  loadIngredients();
  createCanvas(1250, 550);
  createIngredientButtons();
  createShelfButtons();
  
  selectShelfButton();

}

function draw() {
  
  
  drawRoom();
  drawShelfButtons(shelfNumber);
  drawIngredients(shelfNumber);
  drawIngredientButtons(shelfNumber);
  hideIngredientButtons(shelfNumber);


}

function cauldrenColor(){
  //the cauldron color is pColorR, pColorG, pColorB in RGB values
}

function deleteLast(){
  let pos = 0;
  
  pos = potionIngredients.length - 1;

  potionIngredients.splice(pos, 1);

  pIngredientsNum = potionIngredients.length;
}

function deleteAll(){
  potionIngredients.splice(0);

  pIngredientsNum = potionIngredients.length;
}

function game() {

  ingredientNameList = setMushrooms();

  bottleList = setBottleList();

  recipeIngredients = recipe(ingredientNameList, bottleList);

  selectIngredient();

  selectShelfButton();

  

  
  gamePoints += checkPotion(recipeIngredients); 
}