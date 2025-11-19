// "The Magical Apothecary" - Rebecca Mackinnon, Ian Armstrong, ICS4U, 11/18/2025

/*
This program currently runs a short game where the player must select ingredients to match a potion recipe displayed in the top corner.
They are assigned a score out of 100 based on the accuracy of the ingredients.
There are 3 main ingredient shelves to navigate, and 4 rooms that work as the potion brewery.

References:
https://p5js.org/examples/input-elements-input-button/
https://p5js.org/reference/p5/draw/
https://editor.p5js.org/enickles/sketches/vL8STLsI0
https://editor.p5js.org/kjhollen/sketches/S1bVzeF8Z
The p5js library helped explain how to use their extremely helpful methods

https://www.w3schools.com/jsref/met_console_log.asp
w3schools was very useful for learning the basics of javascript and HTML, as well as a separate debugger

https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Strings
To load and select the right gifs, this site demonstrates how to insert variables into strings

https://ezgif.com/split
We used this site to split sprite sheets and create gifs

Assets used:
They were found on itch.io, a place where people share assets and games. These were taken from users who allowed and encouraged the use of these sprites in creating games

https://helm3t.itch.io/free-32x32-fruits-and-veggies-asset-pack/download/eyJpZCI6MTk0MDI1MSwiZXhwaXJlcyI6MTc1OTk1OTYxM30%3D.XLh00%2FJHYU3dnXT5IFB5afzw6b0%3D
https://helm3t.itch.io/cocktail-pixel-icon-pack/download/eyJleHBpcmVzIjoxNzU5OTU5Njk4LCJpZCI6MjkwNDkyNn0%3D.e4CRXbbKqIjgP%2FFe5bbgId6Ef6I%3D
https://karsiori.itch.io/pixel-art-potion-pack-animated/download/eyJpZCI6MjM3MzQ0NywiZXhwaXJlcyI6MTc1OTk1OTMyMH0%3D.rIM%2BvS25CLL5S54tr7CyOyQ%2BKEw%3D
https://9e0.itch.io/witches-pack/download/eyJleHBpcmVzIjoxNzU5OTU5ODM4LCJpZCI6ODg5MDc1fQ%3D%3D.Zl8ouP4Gvz4UFuJmM2KeakV6ldE%3D
https://karsiori.itch.io/free-pixel-art-flower-pack?download
https://styloo.itch.io/freebarassetspack
https://kaiowoka.itch.io/cauldron-cooking-pot-on-a-fire
https://pixelartmaker.com/art/2fb5c1e883e6b16

Possible future implementations:
Adding a start and finish screen for a smoother gameplay
Adding sound effects and background music
Add a day system for a longer gameplay
Add a timer system to add more difficulty

Known issues:
Some potions are coded for colours without a sprite
Recipe button overlaps with ingredients at a certain point
*/

// Declaring furniture and character variables
let shelf;
let bar;
let bgUp;
let bgDown;
let cauldrenGIF;
let witchChargeGIF;
let witchIdleGIF;

// Declaring lists and button
var shelfNumber = 0;
const mushroom = [];
const fruit = [];
const veg = [];
var selectB = [];
const flower = [];
var ingredientSprite = [];
var shelfB = [];
var potionB = [];
var flowerB = [];
var roomB = [];
var removeB;
var removeAllB;
var backB;
var recipeButton;
var roomNumber;
var selectedPotion;
var selectedFlower;
var selectedPotionSprite = 0;
var selectedFlowerSprite = 0;
var recipeIngredients= [];
var ingredientList = [];
const potionList = [];
var potionSprites = [];
var flowerSprites = [];
var potionIngredients = [];
var potionIngredientSprites = [];
var pIngredientsNum = 0;
var pColorR = 0.0;
var pColorG = 0.0;
var pColorB = 0.0;
var fType = 0;
var bType = 0;
var score = 0;
var pName = [];
pName = ["Nightvision Potion", "Regeneration Potion", "Fire Resistence Potion", "Strength Potion", "Invisibility Potion", "Potion of Sudden Death", "Beauty Potion", "Bottled Sunlight Potion", "Potion of Ash", "Potion of Misery"];


// The class for all mushroom ingredients
class Mushroom {

  constructor(name, ID, sprite) {

  this.name = name;
  this.ID = ID;
  this.sprite = sprite;

  }

}

// The class for all fruit ingredients
class Fruit {

  constructor(name, ID, sprite) {

    this.name = name;
    this.ID = ID;
    this.sprite = sprite;

  }

}

// The class for all vegtible ingredients
class Veg {

  constructor(name, ID, sprite) {

    this.name = name;
    this.ID = ID;
    this.sprite = sprite;
  
  }

}

// The class for all flower ingredients
class Flower {

  constructor(name, colour, ID, sprite) {

    this.name = name;
    this.colour = colour;
    this.ID = ID;
    this.sprite = sprite;

  }

}

// The parent class for all bottles
class Bottle {

  static type = ["Big Vial", "Bubbly Brew Bottle Rising", "Classic Jar", "Encased Potion", "Glowing Potion", "Large Bottle", "Large Jar", "Large Tonic", "Round Potion", "Small Bottle", "Small Elixir", "Small Vial"];
  static colourList = ["Black", "Blue", "Gold", "Green", "Lime", "Orange", "Pink", "Purple", "Red", "Turquoise", "Yellow"];
  brandID = 0;

  constructor(ID) {

    this.colour = Bottle.colourList[ID];
    this.ID = ID + this.brandID;

  }

  getBrandID() {
    return brandID;
  }

}

// The sub-classes for each bottle type
class BVial extends Bottle {

  static type = "Big Vial";
  brandID = 0;
  static colourList = ["Black", "Blue", "Gold", "Green", "Lime", "Orange", "Pink", "Purple", "Red", "Turquoise", "Yellow"];
  
  constructor(ID) {
    super(ID);
  }

}

class BBBR extends Bottle {

  static type = "Bubbly Brew Bottle Rising";
  brandID = 11;
  static colourList = ["Black", "Blue", "Brown", "Teal", "Gold", "Green", "Orange", "Pink", "Purple", "Red", "Yellow"];
  
  constructor(ID) {
    super(ID);
  }

}

class CJar extends Bottle {

  static type = "Classic Jar";
  brandID = 22;
  static colourList = ["Black_Gold", "Blue_Gold", "Gold", "Green", "Pink", "Purple", "Red_Gold", "Teal", "Turquoise_Gold", "Yellow"];
  
  constructor(ID) {
    super(ID);
  }

}

class EPotion extends Bottle {

  static type = "Encased Potion";
  brandID = 32;
  static colourList = ["Black_Gold", "Brown_Purple", "Brown_Green", "Gold", "Lime_Purple", "Yellow_Red"];
  
  constructor(ID) {
    super(ID);
  }

}

class GPotion extends Bottle {

  static type = "Glowing Potion";
  brandID = 38;
  static colourList = ["Black", "Blue", "Teal", "Gold", "Green", "Lime", "Pink", "Purple", "Red", "Yellow"];
  
  constructor(ID) {
    super(ID);
  }

}

class LBottle extends Bottle {

  static type = "Large Bottle";
  brandID = 48;
  static colourList = ["Black", "Blue", "Brown", "Green", "Lime", "Orange", "Pink", "Purple", "Red", "Turquoise", "Yellow"];
  
  constructor(ID) {
    super(ID);
  }

}

class LJar extends Bottle {

  static type = "Large Jar";
  brandID = 59;
  static colourList = ["Black_Gold", "Blue_Gold", "Gold", "Green", "Pink", "Purple", "Red_Gold", "Teal", "Turquoise_Gold", "Yellow"];
  
  constructor(ID) {
    super(ID);
  }

}

class LTonic extends Bottle {
  
  static type = "Large Tonic";
  brandID = 69;
  static colourList = ["Black", "Blue", "Gold", "Green", "Orange", "Pink", "Purple", "Red", "Turquoise", "Yellow"];
  
  constructor(ID) {
    super(ID);
  }

}

class RPotion extends Bottle {
  
  static type = "Round Potion";
  brandID = 80;
  static colourList = ["Black", "Blue", "Gold", "Green", "Lime", "Pink", "Orange", "Purple", "Red", "Turquoise", "Yellow"];
  
  constructor(ID) {
    super(ID);
  }

}

class SBottle extends Bottle {

  static type = "Small Bottle";
  brandID = 91;
  static colourList = ["Black_Gold", "Blue", "Gold", "Green", "Orange", "Pink", "Purple", "Red_Yellow", "Teal_Gold", "Yellow"];
  
  constructor(ID) {
    super(ID);
  }

}

class SElixir extends Bottle {

  static type = "Small Elixir";
  brandID = 101;
  static colourList = ["Black", "Blue", "Teal", "Gold", "Green", "Orange", "Pink", "Purple", "Red", "Yellow"];
  
  constructor(ID) {
    super(ID);
  }

}

class SVial extends Bottle {

  static type = "Small Vial";
  brandID = 111;
  static colourList = ["Black", "Blue", "Brown", "Gold", "Green", "Lime", "Orange", "Pink", "Purple", "Red", "Teal", "Turquoise", "Yellow"];
  
  constructor(ID) {
    super(ID);
  }

}

// Declaring all ingredients with names, color values, individual IDs and their sprites
mushroom[0] = new Mushroom("Dawn\nSinger", 0, 'Game Sprites/Pixel Mushroom Pack/Mushroom035.png'); //mushroom 35
mushroom[1] = new Mushroom("Midnight\nFungus", 1, 'Game Sprites/Pixel Mushroom Pack/Mushroom019.png'); //mushroom 19
mushroom[2] = new Mushroom("Puffglow", 2, 'Game Sprites/Pixel Mushroom Pack/Mushroom014.png'); //mushroom 14
mushroom[3] = new Mushroom("Capling", 3, 'Game Sprites/Pixel Mushroom Pack/Mushroom000.png'); //mushroom 00
mushroom[4] = new Mushroom("Scarlet\nSpore", 4, 'Game Sprites/Pixel Mushroom Pack/Mushroom002.png'); //mushroom 02
mushroom[5] = new Mushroom("Spore\nSpark", 5, 'Game Sprites/Pixel Mushroom Pack/Mushroom004.png'); //mushroom 04
mushroom[6] = new Mushroom("Glowtop", 6, 'Game Sprites/Pixel Mushroom Pack/Mushroom005.png'); //mushroom 05
mushroom[7] = new Mushroom("Bark\nShine", 7, 'Game Sprites/Pixel Mushroom Pack/Mushroom011.png'); //mushroom 11
mushroom[8] = new Mushroom("Crimson\nCap", 8, 'Game Sprites/Pixel Mushroom Pack/Mushroom016.png'); //mushroom 16
mushroom[9] = new Mushroom("Starlit\nShroom", 9, 'Game Sprites/Pixel Mushroom Pack/Mushroom022.png'); //mushroom 22
mushroom[10] = new Mushroom("Mossy\nGill", 10, 'Game Sprites/Pixel Mushroom Pack/Mushroom029.png'); //mushroom 29
mushroom[11] = new Mushroom("Feather\nShroom", 11, 'Game Sprites/Pixel Mushroom Pack/Mushroom034.png'); //mushroom 34

fruit[0] = new Fruit("Pome-\ngranate", 12, 'Game Sprites/Helm3ts_32x32_fruit_veggie_asset_pack/SLICES/SLICES_LINE/PomegranateSLICE.png'); //slice
fruit[1] = new Fruit("Passion\nFruit", 13, 'Game Sprites/Helm3ts_32x32_fruit_veggie_asset_pack/SLICES/SLICES_LINE/PassionfruitSLICE.png'); //slice
fruit[2] = new Fruit("Dragon\nFruit", 14, 'Game Sprites/Helm3ts_32x32_fruit_veggie_asset_pack/SLICES/SLICES_LINE/DragonFruitSLICE.png'); //slice
fruit[3] = new Fruit("Pine-\napple", 15, 'Game Sprites/Helm3ts_32x32_fruit_veggie_asset_pack/SLICES/SLICES_LINE/PineappleSLICE.png'); //slice
fruit[4] = new Fruit("Lemon", 16, 'Game Sprites/Helm3ts_32x32_fruit_veggie_asset_pack/SLICES/SLICES_LINE/LemonSLICE.png'); //slice
fruit[5] = new Fruit("Kiwi", 17, 'Game Sprites/Helm3ts_32x32_fruit_veggie_asset_pack/SLICES/SLICES_LINE/kiwiSLICE.png'); //slice
fruit[6] = new Fruit("Lychee", 18, 'Game Sprites/Helm3ts_32x32_fruit_veggie_asset_pack/FRUITS/FRUIT_LINE/Lychee.png'); //full
fruit[7] = new Fruit("Rasp-\nberry", 19, 'Game Sprites/Helm3ts_32x32_fruit_veggie_asset_pack/FRUITS/FRUIT_LINE/Raspberry.png'); //full
fruit[8] = new Fruit("Black-\ncurrant", 20, 'Game Sprites/Helm3ts_32x32_fruit_veggie_asset_pack/FRUITS/FRUIT_LINE/Blackcurrant.png'); //full
fruit[9] = new Fruit("Starfruit", 21, 'Game Sprites/Helm3ts_32x32_fruit_veggie_asset_pack/FRUITS/FRUIT_LINE/Starfruit.png'); //full
fruit[10] = new Fruit("Papaya", 22, 'Game Sprites/Helm3ts_32x32_fruit_veggie_asset_pack/FRUITS/FRUIT_LINE/Papaya.png'); //full
fruit[11] = new Fruit("Jackfruit", 23, 'Game Sprites/Helm3ts_32x32_fruit_veggie_asset_pack/FRUITS/FRUIT_LINE/Jackfruit.png'); //full

veg[0] = new Veg("Beetroot", 24, 'Game Sprites/Helm3ts_32x32_fruit_veggie_asset_pack/VEGGIES/VEGGIES_LINE/Beetroot.png');
veg[1] = new Veg("Garlic", 25, 'Game Sprites/Helm3ts_32x32_fruit_veggie_asset_pack/VEGGIES/VEGGIES_LINE/Garlic.png');
veg[2] = new Veg("Ginger", 26, 'Game Sprites/Helm3ts_32x32_fruit_veggie_asset_pack/VEGGIES/VEGGIES_LINE/Ginger.png');
veg[3] = new Veg("Kohlrabi", 27, 'Game Sprites/Helm3ts_32x32_fruit_veggie_asset_pack/VEGGIES/VEGGIES_LINE/Kohlrabi.png');
veg[4] = new Veg("Leek", 28, 'Game Sprites/Helm3ts_32x32_fruit_veggie_asset_pack/VEGGIES/VEGGIES_LINE/Leek.png');
veg[5] = new Veg("Turnip", 29, 'Game Sprites/Helm3ts_32x32_fruit_veggie_asset_pack/VEGGIES/VEGGIES_LINE/Turnip.png');
veg[6] = new Veg("Radish", 30, 'Game Sprites/Helm3ts_32x32_fruit_veggie_asset_pack/VEGGIES/VEGGIES_LINE/Radish.png');
veg[7] = new Veg("Parsnip", 31, 'Game Sprites/Helm3ts_32x32_fruit_veggie_asset_pack/VEGGIES/VEGGIES_LINE/Parsnip.png');
veg[8] = new Veg("Olive", 32, 'Game Sprites/Helm3ts_32x32_fruit_veggie_asset_pack/VEGGIES/VEGGIES_LINE/Olive.png');
veg[9] = new Veg("Onion", 33, 'Game Sprites/Helm3ts_32x32_fruit_veggie_asset_pack/VEGGIES/VEGGIES_LINE/RedOnion.png'); //red onion
veg[10] = new Veg("Red\nCabbage", 34, 'Game Sprites/Helm3ts_32x32_fruit_veggie_asset_pack/VEGGIES/VEGGIES_LINE/RedCabbage.png');
veg[11] = new Veg("Hot\nPepper", 35, 'Game Sprites/Helm3ts_32x32_fruit_veggie_asset_pack/VEGGIES/VEGGIES_LINE/HotPepper.png');

// Declaring all flower ingredients, their names, and the color they make the potion if they can
flower[0] = new Flower("Scilla", "Turquoise", 0, 'Game Sprites/Pixel Art Flower Pack/Pixel Art Flower Pack/Cropped Flowers/F1Teal.png'); //cropped F1 teal
flower[1] = new Flower("Solorion", "Yellow", 1, 'Game Sprites/Pixel Art Flower Pack/Pixel Art Flower Pack/Cropped Flowers/F1Yellow.png'); //cropped F1 yellow
flower[2] = new Flower("Galax", "Teal", 2, 'Game Sprites/Pixel Art Flower Pack/Pixel Art Flower Pack/Cropped Flowers/F2Teal.png'); //cropped F2 teal
flower[3] = new Flower("Azura", "Blue", 3, 'Game Sprites/Pixel Art Flower Pack/Pixel Art Flower Pack/Cropped Flowers/F4Blue.png'); //cropped F4 blue
flower[4] = new Flower("Celosia", "Pink", 4, 'Game Sprites/Pixel Art Flower Pack/Pixel Art Flower Pack/Cropped Flowers/F4Pink.png'); //cropped F4 pink
flower[5] = new Flower("Alyssum", "Orange", 5, 'Game Sprites/Pixel Art Flower Pack/Pixel Art Flower Pack/Cropped Flowers/F8Orange.png'); //cropped F8 orange
flower[6] = new Flower("Vinca", "Purple", 6, 'Game Sprites/Pixel Art Flower Pack/Pixel Art Flower Pack/Cropped Flowers/F9Purple.png'); //cropped F9 purple
flower[7] = new Flower("Ixora", "Red", 7, 'Game Sprites/Pixel Art Flower Pack/Pixel Art Flower Pack/Cropped Flowers/F9Red.png'); //cropped F9 red
flower[8] = new Flower("Aurumea", "Gold", 8, 'Game Sprites/Pixel Art Flower Pack/Pixel Art Flower Pack/Cropped Flowers/F9Yellow.png'); //cropped F9 yellow
flower[9] = new Flower("Viridus", "Lime", 9, 'Game Sprites/Pixel Art Flower Pack/Pixel Art Flower Pack/Cropped Flowers/F10Purple.png'); //cropped F10 purple
flower[10] = new Flower("Frutex", "Green", 10, 'Game Sprites/Pixel Art Flower Pack/Pixel Art Flower Pack/Bush 1 (No Flowers)/Bush 1 (no flowers) - GREEN.png'); //bush 1 no flowers green
flower[11] = new Flower("Calidus", "Brown", 11, 'Game Sprites/Pixel Art Flower Pack/Pixel Art Flower Pack/Bush 1 (No Flowers)/Bush 1 (no flowers) - WARM GREEN.png'); //bush 1 no flowers warm green

// Declares all the bottle values
function setPotionList() {

  for (let i = 0; i < 12; i++) {
    potionList[i] = [];
  }

  for (let i = 0; i < 11; i++) {
    potionList[0][i] = new BVial(i);
  }

  for (let i = 0; i < 11; i++) {
    potionList[1][i] = new BBBR(i);
  }

  for (let i = 0; i < 10; i++) {
    potionList[2][i] = new CJar(i);
  }

  for (let i = 0; i < 6; i++) {
    potionList[3][i] = new EPotion(i);
  }

  for (let i = 0; i < 10; i++) {
    potionList[4][i] = new GPotion(i);
  }

  for (let i = 0; i < 11; i++) {
    potionList[5][i] = new LBottle(i);
  }

  for (let i = 0; i < 10; i++) {
    potionList[6][i] = new LJar(i);
  }

  for (let i = 0; i < 11; i++) {
    potionList[7][i] = new LTonic(i);
  }

  for (let i = 0; i < 11; i++) {
    potionList[8][i] = new RPotion(i);
  }

  for (let i = 0; i < 10; i++) {
    potionList[9][i] = new SBottle(i);
  }

  for (let i = 0; i < 10; i++) {
    potionList[10][i] = new SElixir(i);
  }

  for (let i = 0; i < 14; i++) {
    potionList[11][i] = new SVial(i);
  }

}

// Makes one long list of names in order of ingredient ID
function setIngredientList() {

  for (let i = 0; i < 12; i++) {

    ingredientList[0][i] = mushroom[i];
    ingredientList[1][i] = fruit[i];
    ingredientList[2][i] = veg[i];

  }

}

// Creates a random recipe with 8 - 10 ingredients (mushrooms, fruits, or veg), one bottle type, and one flower takes in
// The list of ingredient names and returns the list of names of the recipe
function recipe() {

  let ingredientLog = [];
  let ingredientTypeNum = [];
  let ingredientQuantNum = [];
  let ingredientTypeList = [];
  let recipeBottle = "string";
  let temp = 0;
  let counter = 0;
  let filler = 0;

  for (let i = 0; i < 3; i++) {
    ingredientLog[i] = [];
  }

  ingredientTypeNum[0] = Math.floor(Math.random() * 2) + 1;
  ingredientTypeNum[1] = Math.floor(Math.random() * 2) + 1;
  ingredientTypeNum[2] = 1;

  for (let i = 0; i < 3; i++) {
    temp += ingredientTypeNum[i];
  }

  recipeBottle = Bottle.type[Math.floor(Math.random() * 12)];

  for (let i = 0; i < temp; i++) {
    ingredientQuantNum[i] = Math.floor(Math.random() * 2) + 1;
  }

  for (let k = 0; k < 3; k++) {
    
    for (let i = 0; i < ingredientTypeNum[k]; i++) {
      
      temp = Math.floor(Math.random() * 12);

      for (let j = 0; j < counter; j++) {
          
        if (temp == ingredientLog[k][j]) {
            
          temp = Math.floor(Math.random() * 12);
          j = 0;

        }

      }
            
      ingredientTypeList[filler] = ingredientList[k][temp].name;
      ingredientLog[k][i] = temp;
      filler++;
      counter++;

    }

  }

  filler = 0;

  for (let i = 0; i < ingredientTypeList.length; i++) {
    
    for (let j = 0; j < ingredientQuantNum[i]; j++) {
      
      recipeIngredients[filler] = ingredientTypeList[i];
      filler++;

      }

    }

  recipeIngredients[recipeIngredients.length] = recipeBottle;

  recipeIngredients[recipeIngredients.length] = flower[Math.floor(Math.random() * 12)].name;

}

// Adds the chosen ingredient to the list of ingedrients in the potion with a max of 10 ingredients
// Adds one to the number of ingredients in the potion
function ingredientButton(shelfNumber, ID) {
  
  if (pIngredientsNum < 10) {

    potionIngredients[pIngredientsNum] = ingredientList[shelfNumber][ID].name;
    
    potionIngredientSprites[pIngredientsNum] = ingredientSprite[shelfNumber][ID];
    
    pIngredientsNum = potionIngredients.length;

  }
}

// Adds the chosen bottle type to the list of ingedrients in the potion and adds one to the number of ingredients in the potion
function bottleButton(bID) {

  selectedPotion = Bottle.type[bID];
  selectedPotionSprite = potionSprites[bID];
  bType = bID;

}

// Adds the chosen flower to the list of ingedrients in the potion and adds one to the number of ingredients in the potion
// Returns the name of the color of potion that should be viewed
function flowerButton(fID) {

  selectedFlower = flower[fID].name;
  selectedFlowerSprite = flowerSprites[fID];
  fType = fID;
  
}

// Checks the bottle and flower type being used and returns a the respective flower colour according to the bottle
// Returns black otherwise
function checkColour() {

  if (bType == 0) {
    if (fType == 2 || fType == 11 || fType == 0) {
      return "Black";
    }
  }
  else if (bType == 1) {
    if (fType == 0 || fType == 11 || fType == 9) {
      return "Black";
    }
  }
  else if (bType == 8) {
    if (fType == 0 || fType == 11 || fType == 2) {
      return "Black";
    }
  }
  else if (bType == 2) {
    if (fType == 5 || fType == 9 || fType == 11) {
      return "Black";
    }
  }
  else if (bType == 3) {
    if (fType != 4 && fType != 6 && fType != 7 && fType != 8 && fType != 10) {
      return "Black";
    }
  }
  else if (bType == 4) {
    if (fType == 0 || fType == 5 || fType == 11) {
      return "Black";
    }
  }
  else if (bType == 5) {
    if (fType == 2 || fType == 8 || fType == 5) {
      return "Black";
    }
  }
  else if (bType == 6) {
    if (fType == 2 || fType == 5 || fType == 9 || fType == 11) {
      return "Black";
    }
  }
  else if (bType == 7) {
    if (fType == 2 || fType == 9 || fType == 11) {
      return "Black";
    }
  }
  else if (bType == 9) {
    if (fType == 0 || fType == 2 || fType == 9 || fType == 11) {
      return "Black";
    }
  }
  else if (bType == 10) {
    if (fType == 0 || fType == 9 || fType == 11) {
      return "Black";
    }
  }
  return flower[fType].colour;

}

// Compares the list of ingredients in the potion to the list of ingredients in the recipe
// Returns the accuracy percentage rounded to nearest integer in score
function checkPotion() {

  let check = [];
  let trueCount = 0;

  potionIngredients[pIngredientsNum] = selectedPotion;
  pIngredientsNum = potionIngredients.length;
  potionIngredients[pIngredientsNum] = selectedFlower;
  pIngredientsNum = potionIngredients.length;

  for (let i = 0; i < pIngredientsNum; i++) {

    check[i] = false;
  
  }

  for (let i = 0; i < pIngredientsNum; i++) {

    for (let j = 0; j < recipeIngredients.length; j++) {

      if (potionIngredients[i] == recipeIngredients[j]) {

        check[i] = true;
      
      }
    
    }
  
  }

  for (let i = 0; i < pIngredientsNum; i++) {

    if (check[i]) {

      trueCount++;
    
    }
  
  }
  
  score += Math.floor((trueCount / pIngredientsNum) * 100);

}

// Takes in a potion colour and creates a potion with the colour and selected bottle type
// Switches the room number to 3
// Calls checkPotion() to calculate the score and create a button with the special potion type and score
function createFinishedPotion(potionColour) {

  roomNumber = 3;
  checkPotion();
  finishScore = createButton(`Potion Created! You made a ${pName[pIngredientsNum -  3]}!\nYour score is ${score}/100!`);
  potionGif = createImg(`Game Sprites/Pixel Potion Pack/Pixel Potion Pack - FINISHED/Potion Gifs/${Bottle.type[bType]}/${potionColour} ${Bottle.type[bType]}.gif`);

}

// Draws the finished potion and score button
function drawFinishedPotion() {

  finishScore.position(30, 30).size(400, 200).style('font-size', '32px');
  potionGif.position(465, 55).size(150, 150);

}

// Loads the furniture sprites
function loadRoom() {

  shelf = loadImage('Game Sprites/Bar Pack/individuals sprite/shelf.png');
  bar = loadImage('Game Sprites/Bar Pack/individuals sprite/bar.png');
  bgUp = loadImage('Game Sprites/Bar Pack/individuals sprite/wall_bar.png');
  bgDown = loadImage('Game Sprites/Bar Pack/individuals sprite/floor_bar.png');
  cauldrenGIF = createImg("Game Sprites/Cauldren Set/Red Cauldren Gif.gif");
  
}

// Loads the ingredient sprites
function loadIngredients() {

  for (let j = 0; j < 3; j++) {
    for (let i = 0; i < 12; i++) {
      ingredientSprite[j][i] = loadImage(ingredientList[j][i].sprite);
    }
  }

}

// Draws the furniture according to the room number
function drawRoom() {

  image(bgUp, 0, 0, width, height - 150);
  image(bgDown, -235, height - 150, width + 470, 150);
  image(bar, 615, 265, 635, 235);

  if (roomNumber != 3) {

    image(shelf, 0, 95, 585, 405);
    cauldrenGIF.hide();

  }

  if (roomNumber == 3) {

    cauldrenGIF.position(195, 325).size(192, 192).show();

  }

}

// Creates the witch idle and charge gifs
function createWitch() {

  witchChargeGIF = createImg("Game Sprites/Blue Witch/Blue_witch/witch charge.gif");
  witchIdleGIF = createImg("Game Sprites/Blue Witch/Blue_witch/witch idle.gif");

}

// Draws the witch gifs
// Takes in the room number and changes the position of the witch on the last room
function drawWitch(roomNumber) {

  if (roomNumber != 3 ) {

    witchIdleGIF.size(160, 240).position(900, 340).show();
    witchChargeGIF.hide();

  }

  if (roomNumber == 3) {

    witchChargeGIF.size(240, 240). position(0, 290).show();
    witchIdleGIF.hide();

  }

}

// Creates a button to display the recipe
function createRecipeButton() {

  let temp = "";

  for (let i = 0; i < recipeIngredients.length; i++) {

    temp += recipeIngredients[i];
    temp += "<br>"; 
  
  }

  recipeButton = createButton("Recipe" + "<br>" + "<br>" + temp);

}

// Draws the recipe button
function drawRecipeButton() {

  recipeButton.position(1090, 30).size(140, 225).show();

}

// Draws the ingredients based on the shelf number
function drawIngredients(shelfNumber) {

  let x = [40, 230, 415];
  let y = [140, 235, 325, 415];

  for (let i = 0; i < 12; i++){
    image(ingredientSprite[shelfNumber][i], x[i % 3], y[Math.floor(i / 3)], 64, 64);
  }

}

// Creates ingredient buttons for selection
function createIngredientButtons() {

  for (let j = 0; j < 3; j++) {
    for (let i = 0; i < 12; i++) {
      selectB[j][i] = createButton(ingredientList[j][i].name);
    }
  }

}

// Draws the ingredient buttons depending on the shelf number and hides them when switching rooms
function drawIngredientButtons(shelfNumber, roomNumber) {

  for (let i = 0; i < 12; i++) {
    selectB[shelfNumber][i].size(60, 60).show();
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

  for (let j = 0; j < 3; j++) {
    if (shelfNumber != j || roomNumber) {
      for (let i = 0; i < 12; i++) {
        selectB[j][i].hide();
      }
    }
  }  

}

// Links each ingredient button to its respective function for selection
function selectIngredient() {

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 12; j++) {
      selectB[i][j].mousePressed(() => ingredientButton(i, j));
    }
  }

}

// Creates buttons to switch shelves
function createShelfButtons() {

  shelfB[0] = createButton("See Mushrooms");
  shelfB[1] = createButton("See Fruits");
  shelfB[2] = createButton("See Vegetables");

}

// Activates and deactivates buttons depending on the shelf
// Hides the buttons when switching rooms
function drawShelfButtons(shelfNumber, roomNumber) {

  if (!roomNumber) {

    for (let i = 0; i < 3; i++) {
      shelfB[i].size(100, 40).removeAttribute('disabled').show();
    }

    shelfB[shelfNumber].attribute('disabled', '');

    shelfB[0].position(65, 520);
    shelfB[1].position(250, 520);
    shelfB[2].position(435, 520);

  }

  else {

    for (let i = 0; i < 3; i++) {
      shelfB[i].hide();
    }

  }

}

// Makes the shelf buttons change the shelf on click
function selectShelfButton() {

  for (let i = 0; i < 3; i++) {
    shelfB[i].mousePressed(() => shelfNumber = i);
  }

}

// Creates remove buttons
function createRemoveButtons() {

  removeB = createButton("Remove\nOne");
  removeAllB = createButton("Remove\nAll");

}

// Draws the remove buttons in the ingredient selection room and hides them otherwise
// Takes the roomNumber
function drawRemoveButtons(roomNumber) {

  if (!roomNumber) {

    removeB.position(655, 390).size(100, 40).show().removeAttribute('disabled');
    removeAllB.position(760, 390).size(100, 40).show().removeAttribute('disabled');
    
    if (!pIngredientsNum) {

      removeB.attribute('disabled', '');
      removeAllB.attribute('disabled', '');

    }

  }

  else {

    removeB.hide();
    removeAllB.hide();

  }

}

// Links the remove buttons to their respective functions
function selectRemoveButtons() {

  removeB.mousePressed(() => removeLast());
  removeAllB.mousePressed(() => removeAll());

}

// Loads the black potion sprites for the shelf
function loadPotions() {

  for (let i = 0; i < 12; i++) {
      potionSprites[i] = loadImage(`Game Sprites/Pixel Potion Pack/Pixel Potion Pack - FINISHED/ALL Potions - First Frame/${Bottle.type[i]} - BLACK - 0000.png`);
  }

}

// Draws the potions on the shelf
function drawPotions() {

  let x = [40, 230, 415];
  let y = [140, 235, 325, 415];

  for (let i = 0; i < 12; i++) {
    image(potionSprites[i], x[i % 3], y[Math.floor(i / 3)], 64, 64);
  }

}

// Create the potion selection buttons
function createPotionButtons() {

  for (let i = 0; i < 12; i++) {
    potionB[i] = createButton(Bottle.type[i]);
  }

}

// Draws the potion buttons and hides them when switching rooms
function drawPotionButtons(roomNumber) {

  for (let i = 0; i < 12; i++) {
      potionB[i].size(60, 60).show();
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
      
      potionB[i * 3 + j].position(x, y);
    
    }
  
  }

  if (roomNumber != 1) {
    for (let i = 0; i < 12; i++) {
      potionB[i].hide();
    }
  }       

}

// Links the potion buttons to their respective functions
function selectPotionButtons() {

  for (let i = 0; i < 12; i++) {
    potionB[i].mousePressed(() => bottleButton(i));
  }

}

// Loads the flower sprites
function loadFlowers() {

  for (let i = 0; i < 12; i++) {
      flowerSprites[i] = loadImage(flower[i].sprite);
  }

}

// Draws the flowers on the shelf
function drawFlowers() {
  
  let x = [40, 230, 415];
  let y = [140, 235, 325, 415];

  for (let i = 0; i < 12; i++) {
    image(flowerSprites[i], x[i % 3], y[Math.floor(i / 3)], 64, 64);
  }

}

// Creates the flower buttons
function createFlowerButtons() {

  for (let i = 0; i < 12; i++) {
    flowerB[i] = createButton(flower[i].name);
  }

}

// Draws the flower buttons and hides them when changing rooms
// Takes in the roomNumber
function drawFlowerButtons(roomNumber) {

  for (let i = 0; i < 12; i++) {
      flowerB[i].size(60, 60).show();
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
      
      flowerB[i * 3 + j].position(x, y);
    
    }
  
  }

  if (roomNumber != 2) {
    for (let i = 0; i < 12; i++) {
      flowerB[i].hide();
    }
  }       

}

// Links the flower buttons to their respective function
function selectFlowerButtons() {

  for (let i = 0; i < 12; i++) {
    flowerB[i].mousePressed(() => flowerButton(i));
  }

}

// Creates the transition buttons
function createTransitionButtons() {

  roomB[0] = createButton("To\nPotion\nRoom");
  roomB[1] = createButton("Select\na\nFlower");
  roomB[2] = createButton("Finish\nPotion");

  backB = createButton("Back");

}

// Draws the transition buttons depending on the room
// Takes in the roomNumber
function drawTransitionButtons(roomNumber) {

  for (let i = 0; i < 3; i++) {
    
    roomB[i].hide().position(1115, 390).size(100, 40);
    
    if (roomNumber == i) {

      roomB[i].show().removeAttribute('disabled');
    
    }
  
  }

  if (!pIngredientsNum) {

    roomB[0].attribute('disabled', '');
  
  }

  if (!selectedPotion) {

    roomB[1].attribute('disabled', '');
  
  }

  if (!selectedFlower) {

    roomB[2].attribute('disabled', '');
  
  }

  if (roomNumber) {

    backB.position(1115, 520).size(100, 40).removeAttribute('disabled');
  
  }
  
  else {

    backB.position(1115, 520).size(100, 40).attribute('disabled', '');
  
  }

  if (roomNumber == 3) {

    backB.hide();
  
  }

}

// Makes the transition buttons change the room number appropriately
// Links the finish potion button to the correct functions
function selectTransitionButtons() {

  roomB[0].mousePressed(() => roomNumber = 1);
  roomB[1].mousePressed(() => roomNumber = 2);
  roomB[2].mousePressed(() => createFinishedPotion(checkColour()));

  backB.mousePressed(() => roomNumber--);

}

// Draws the selected ingredient list when selecting ingredients
// Takes in the roomNumber
function drawIngredientList(roomNumber) {

  if (roomNumber == 0) {
    for (let i = 0; i < pIngredientsNum; i++) {
      image(potionIngredientSprites[i], 600 + i * 65, 215, 64, 64);
    }
  }

}

// Draws the selected potion in the potion selection room
// Takes in roomNumber
function drawSelectedPotion(roomNumber) {

  if (roomNumber == 1 && selectedPotionSprite) {
      image(selectedPotionSprite, 665, 215, 64, 64);
  }

}

// Draws the selected flower in the flower selection room
// Takes in roomNumber
function drawSelectedFlower(roomNumber) {

  if (roomNumber == 2 && selectedFlowerSprite) {
      image(selectedFlowerSprite, 665, 215, 64, 64);
  }

}

// Runs once at start-up
// Loads and sets all the ingredient sprites and lists, and primes all the buttons
function setup() {

  // Setting lists as 2D arrays
  for (let i = 0; i < 3; i++) {

    ingredientSprite[i] = [];
    ingredientList[i] = [];
    selectB[i] = [];

  }

  roomNumber = 0;

  // Setting the ingredients and recipes
  setIngredientList();
  setPotionList();
  recipe();

  // Loads all the images
  loadRoom();
  loadIngredients();
  loadPotions();
  loadFlowers();

  // Creates the canvas
  createCanvas(1250, 550);

  // Creates all the buttons and gifs
  createIngredientButtons();
  createShelfButtons();
  createPotionButtons();
  createFlowerButtons();
  createTransitionButtons();
  createRemoveButtons();
  createRecipeButton();
  createWitch();

  // Links all the buttons
  selectTransitionButtons();
  selectRemoveButtons();
  selectIngredient();
  selectPotionButtons();
  selectFlowerButtons();
  selectShelfButton();

  // Ensures the buttons hide properly at start-up
  drawFlowerButtons(roomNumber);
  drawPotionButtons(roomNumber);

}

// Runs 60 times per second
// Draws all the sprites and buttons repeatedly
// Uses roomNumber and shelfNumber to organise functions
function draw() {
  
  // Always draws the furniture
  drawRoom(roomNumber);

  // For the first room
  if (roomNumber == 0) {

    drawIngredients(shelfNumber);
    drawIngredientList(roomNumber);

  }

  // Draws all the buttons and gifs
  drawTransitionButtons(roomNumber);
  drawPotionButtons(roomNumber);
  drawFlowerButtons(roomNumber);
  drawIngredientButtons(shelfNumber, roomNumber);
  drawRemoveButtons(roomNumber);
  drawShelfButtons(shelfNumber, roomNumber);
  drawRecipeButton();
  drawWitch(roomNumber);

  // For the second room
  if (roomNumber == 1) {
    
    drawPotions();
    drawSelectedPotion(roomNumber);

  }

  // For the third room
  if (roomNumber == 2) {

    drawFlowers();
    drawSelectedFlower(roomNumber);

  }

  // For the fourth and final room
  if (roomNumber == 3) {

    drawFinishedPotion();

  }
  
}

// Removes the last ingredient added from the list of ingrdients in the potion and shortens the array
function removeLast() {

  let pos = 0;
  
  pos = pIngredientsNum - 1;

  potionIngredients.splice(pos, 1);
  potionIngredientSprites.splice(pos, 1);

  pIngredientsNum = potionIngredients.length;

}

// Removes all ingredients from the list of ingredients in the potion and makes the array 0 long
function removeAll() {

  potionIngredients.splice(0);
  potionIngredientSprites.splice(0);
  pIngredientsNum = 0;
  
}