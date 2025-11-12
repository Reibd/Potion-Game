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
var selectB = [];
const flower = [];

for (let i = 0; i < 3; i++) {
  selectB[i] = [];
}

let ingredientSprite = [];
for (let i = 0; i < 3; i++) {
  ingredientSprite[i] = [];
}

var roomB = [];
let recipeIngredients= [];
let ingredientNameList = [];
let bottleList = [];
let mushroomNameList = [];
let fruitNameList = [];
let vegNameList = [];
let ingredientList = [];
let flowerNameList = [];
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
var pIngredientsNum = 0;
var pColorR = 0.0;
var pColorG = 0.0;
var pColorB = 0.0;
var bType = 0;
var money = 0;

//the class for all mushroom ingredients
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
//the class for all fruit ingredients
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
//the class for all vegtible ingredients
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
//the class for all flower ingredients
class Flower {
  constructor(name, colour, ID, sprite) {
  this.name = name;
  this.colour = colour;
  this.ID = ID;
  this.sprite = sprite;
  }
}
//the parent class for all bottles
class Bottle {
  static type = ["Big Vial", "Bubbly Brew Bottle Rising", "Classic Jar", "Encased Potion", "Glowing Potion", "Large Bottle", "Large Jar", "Large Tonic", "Round Potion", "Small Bottle", "Small Elixir", "Small Vial"];
  brandID = 0;
  colourList = ["Black", "Blue", "Gold", "Green", "Lime", "Orange", "Pink", "Purple", "Red", "Turquoise", "Yellow"];
  constructor(ID) {
  this.colour = colourList[ID];
  this.ID = ID + BrandID;
  }
  getBrandID(){
    return brandID;
  }
}
//the sub-classes for each bottle type
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
  colourList = ["Black", "Blue", "Brown", "Teal", "Gold", "Green", "Orange", "Pink", "Purple", "Red", "Yellow"];
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
  colourList = ["Black", "Blue", "Teal", "Gold", "Green", "Lime", "Pink", "Purple", "Red", "Yellow"];
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
  colourList = ["Black", "Blue", "Gold", "Green", "Lime", "Pink", "Orange", "Purple", "Red", "Turquoise", "Yellow"];
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
  colourList = ["Black", "Blue", "Teal", "Gold", "Green", "Orange", "Pink", "Purple", "Red", "Yellow"];
  constructor(ID) {
    super(ID);
  }
}
class SVial extends Bottle {
  type = "Small Vial";
  brandID = 111;
  colourList = ["Black", "Blue", "Brown", "Gold", "Green", "Lime", "Orange", "Pink", "Purple", "Red", "Teal", "Turquoise", "Yellow"];
  constructor(ID) {
    super(ID);
  }
}

//Declaring all ingredients with names, color values, individual IDs and their sprites
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
  
  //declaring all flower ingredients, their names, and the color they make the potion if they can
  flower[0] = new Flower("Scilla", "Turquoise", 0); //cropped F1 teal
  flower[1] = new Flower("Solorion", "Yellow", 1); //cropped F1 yellow
  flower[2] = new Flower("Galax", "Teal", 2); //cropped F2 teal
  flower[3] = new Flower("Azura", "Blue", 3); //cropped F4 blue
  flower[4] = new Flower("Celosia", "Pink", 4); //cropped F4 pink
  flower[5] = new Flower("Alyssum", "Orange", 5); //cropped F8 orange
  flower[6] = new Flower("Vinca", "Purple", 6); //cropped F9 purple
  flower[7] = new Flower("Ixora", "Red", 7); //cropped F9 red
  flower[8] = new Flower("Aurumea", "Gold", 8); //cropped F9 yellow
  flower[9] = new Flower("Viridus", "Lime", 9); //cropped F10 purple
  flower[10] = new Flower("Frutex", "Green", 10); //bush 1 no flowers green
  flower[11] = new Flower("Calidus", "Brown", 11); //bush 1 no flowers warm green

//declares all the bottle values
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

//organises the ingredient types into lists of their names
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

//makes one long list of names in order of ingredient ID
function setIngedientList(mushroomNameList, fruitNameList, vegNameList){

  for (let i = 0; i < 12; i++) {
    ingredientNameList[i] = mushroomNameList[i];
    ingredientNameList[i + 12] = fruitNameList[i];
    ingredientNameList[i + 24] = vegNameList[i];
  }

  return ingredientNameList;
}

//creates a random recipe with 8 - 10 ingredients (mushrooms, fruits, or veg), one bottle type, and one flower takes in
//the list of ingredient names and returns the list of names of the recipe
function recipe(ingredientNameList){
  let recipeIngredients = [];
  let ingredientLog = [];
  let ingredientTypeNum = 0;
  let ingredientQuantNum = [];
  let ingredientTypeList = [];
  let recipeBottle = "string";

  ingredientTypeNum = Math.floor(Math.random() * 5) + 4;

  recipeBottle = Bottle.type[Math.floor(Math.random() * 12)];

  for (let i = 0; i < ingredientTypeNum; i++){
    ingredientQuantNum[i] = Math.floor(Math.random() * 2) + 1;
  }

  for (let i = 0; i < ingredientTypeNum; i++){
    let temp = Math.floor(Math.random() * 36);
    for (let j = 0; j < ingredientLog.length; j++){
        if (temp == ingredientLog[j]){
            temp = Math.floor(Math.random() * 36);
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

  recipeIngredients[recipeIngredients.length] = recipeBottle;

  recipeIngredients[recipeIngredients.length] = flower[Math.floor(Math.random() * 12)].name;

  return recipeIngredients;
}

//adds the chosen ingredient to the list of ingedrients in the potion and changes the color of the potion
//adds one to the number of ingredients in the potion
function ingredientButton(ID){
  potionIngredients[potionIngredients.length] = ingredientNameList[(shelfNumber * 12) + ID];

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

//adds the chosen bottle type to the list of ingedrients in the potion and adds one to the number of ingredients in the potion
function bottleButton(bID){
  potionIngredients[potionIngredients.length] = Bottle.type[bID];

  pIngredientsNum = potionIngredients.length;

  bType = bID;
}

//adds the chosen flower to the list of ingedrients in the potion and adds one to the number of ingredients in the potion
//returns the name of the color of potion that should be viewed *TO CHANGE*
function flowerButton(fID){
  potionIngredients[potionIngredients.length] = flower[fID].name;

  pIngredientsNum = potionIngredients.length;

  if (bType == 0){
    if (fID == 2 || fID == 11){
      return "black";
    }
  }
  else if (bType == 1){
    if (fID == 0 || fID == 11){
      return "black";
    }
  }
  else if (bType == 2){
    if (fID == 5 || fID == 9 || fID == 11){
      return "black";
    }
  }
  else if (bType == 3){
    if (fID != 4 && fID != 6 && fID != 7 && fID != 8 && fID != 10){
      return "black";
    }
  }
  else if (bType == 4){
    if (fID == 0 || fID == 5 || fID == 11){
      return "black";
    }
  }
  else if (bType == 5){
    if (fID == 2 || fID == 8){
      return "black";
    }
  }
  else if (bType == 6){
    if (fID == 2 || fID == 9 || fID == 11){
      return "black";
    }
  }
  else if (bType == 7){
    if (fID == 2 || fID == 9 || fID == 11){
      return "black";
    }
  }
  else if (bType == 8){
    if (fID == 2 || fID == 11){
      return "black";
    }
  }
  else if (bType == 9){
    if (fID == 2 || fID == 9 || fID == 11){
      return "black";
    }
  } 
  else if (bType == 10){
    if (fID == 0 || fID == 9 || fID == 11){
      return "black";
    }
  }
  else{
    return flower[fID].colour;
  }
}

//compares the list of ingredients in the potion to the list of ingredients in the recipe
//returns the accuracy percentage rounded to nearest integer in money
function checkPotion(recipeIngredients){
  let check = [false];
  let trueCount = 0;

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

  
  money += Math.floor((trueCount / pIngredientsNum) * 100);
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

function drawIngredients(shelfNumber) {

  image(ingredientSprite[shelfNumber][0], 40, 140, 64, 64);
  image(ingredientSprite[shelfNumber][1], 230, 140, 64, 64);
  image(ingredientSprite[shelfNumber][2], 415, 140, 64, 64);
  image(ingredientSprite[shelfNumber][3], 40, 235, 64, 64);
  image(ingredientSprite[shelfNumber][4], 230, 235, 64, 64);
  image(ingredientSprite[shelfNumber][5], 415, 235, 64, 64);
  image(ingredientSprite[shelfNumber][6], 40, 325, 64, 64);
  image(ingredientSprite[shelfNumber][7], 230, 325, 64, 64);
  image(ingredientSprite[shelfNumber][8], 415, 325, 64, 64);
  image(ingredientSprite[shelfNumber][9], 40, 415, 64, 64);
  image(ingredientSprite[shelfNumber][10], 230, 415, 64, 64);
  image(ingredientSprite[shelfNumber][11], 415, 415, 64, 64);

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
      selectB[0][i].hide();
    }
  }

  if (shelfNumber != 1) {
    for (let i = 0; i < 12; i++) {
      selectB[1][i].hide();
    }
  }

  if (shelfNumber != 2) {
    for (let i = 0; i < 12; i++) {
      selectB[2][i].hide();
    }
  }
  

}

function selectIngredient(shelfNumber) {

  for (let i = 0; i < 12; i++) {
    selectB[shelfNumber][i].mousePressed(() => ingredientButton((shelfNumber * 12) + i));
  }

}

function createShelfButtons() {

  roomB[0] = createButton("See Mushrooms");
  roomB[1] = createButton("See Fruits");
  roomB[2] = createButton("See Vegetables");

}

function drawShelfButtons(shelfNumber) {

  for (let i = 0; i < 3; i++) {
    roomB[i].size(100, 40);
    roomB[i].style('background-color', 'white');
  }

  roomB[shelfNumber].style('background-color', 'yellow');

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
  for (let i = 0; i < 3; i++) {
    hideIngredientButtons(i);
  }
  
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

//removes the last ingredient added from the list of ingrdients in the potion and shortens the array
function deleteLast(){
  let pos = 0;
  
  pos = potionIngredients.length - 1;

  potionIngredients.splice(pos, 1);

  pIngredientsNum = potionIngredients.length;
}

//removes all ingredients from the list of ingredients in the potion and makes the array 0 long
function deleteAll(){
  potionIngredients.splice(0);

  pIngredientsNum = potionIngredients.length;
}

function game() {

  ingredientNameList(mushroomNameList, fruitNameList, vegNameList)

  bottleList = setBottleList();

  recipeIngredients = recipe(ingredientNameList, bottleList);

  

  
  gamePoints += checkPotion(recipeIngredients); 
}