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

// Takes in a potion colour and creates a potion with the colour and selected bottle type
// Switches the room number to 3
// Calls checkPotion() to calculate the score and create a button with the special potion type and score
function createFinishedPotion(potionColour) {

  roomNumber = 3;
  checkPotion();
  finishScore = createButton(`Potion Created! You made a ${pName[pIngredientsNum -  3]}!\nYour score is ${score}/100!`);
  potionGif = createImg(`Game Sprites/Pixel Potion Pack/Pixel Potion Pack - FINISHED/Potion Gifs/${Bottle.type[bType]}/${potionColour} ${Bottle.type[bType]}.gif`);

}