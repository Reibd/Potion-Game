let shelf;
let recipeIngredients= [];
let ingredientList = [];
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
let potionIngredient = [];

function setup() {
  shelf = loadImage('Game Sprites/Bar Pack/individual sprite/shelf.png');
  createCanvas(391, 114);
}

function draw() {
  background(220);
  image(shelf, 0, 0, width, height);
}

function Mushroom(name, R, G, B, ID){
  this.name = name;
  this.R = R;
  this.G = G;
  this.B = B;
  this.ID = ID;
}

function Bottle(type, colour, ID){
  this.type = type;
  this.colour = colour;
  this.ID = ID;
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

  const BVialBlack = new Bottle("Big Vial", "Black", 0);
  const BVialBlue = new Bottle("Big Vial", "Blue", 1);
  const BVialGold = new Bottle("Big Vial", "Gold", 2);
  const BVialGreen = new Bottle("Big Vial", "Green", 3);
  const BVialLime = new Bottle("Big Vial", "Lime", 4);
  const BVialOrange = new Bottle("Big Vial", "Orange", 5);
  const BVialPink = new Bottle("Big Vial", "Pink", 6);
  const BVialPurple = new Bottle("Big Vial", "Purple", 7);
  const BVialRed = new Bottle("Big Vial", "Red", 8);
  const BVialTurquise = new Bottle("Big Vial", "Turquise", 9);
  const BVialYellow = new Bottle("Big Vial", "Yellow", 10);
  const BBBRBlack = new Bottle("Bubbly Brew Bottle Rising", "Black", 11);
  const BBBRBlue = new Bottle("Bubbly Brew Bottle Rising", "Blue", 12);
  const BBBRBrown = new Bottle("Bubbly Brew Bottle Rising", "Brown", 13);
  const BBBRCyan = new Bottle("Bubbly Brew Bottle Rising", "Cyan", 14);
  const BBBRGold = new Bottle("Bubbly Brew Bottle Rising", "Gold", 15);
  const BBBRGreen = new Bottle("Bubbly Brew Bottle Rising", "Green", 16);
  const BBBROrange = new Bottle("Bubbly Brew Bottle Rising", "Orange", 17);
  const BBBRPink = new Bottle("Bubbly Brew Bottle Rising", "Pink", 18);
  const BBBRPurple = new Bottle("Bubbly Brew Bottle Rising", "Purple", 19);
  const BBBRRed = new Bottle("Bubbly Brew Bottle Rising", "Red", 20);
  const BBBRYellow = new Bottle("Bubbly Brew Bottle Rising", "Yellow", 21);
  const CJarBlack_Gold = new Bottle("Classic Jar", "Black_Gold", 22);
  const CJarBlue_Gold = new Bottle("Classic Jar", "Blue_Gold", 23);
  const CJarGold = new Bottle("Classic Jar", "Gold", 24);
  const CJarGreen = new Bottle("Classic Jar", "Green", 25);
  const CJarPink = new Bottle("Classic Jar", "Pink", 26);
  const CJarPurple = new Bottle("Classic Jar", "Purple", 27);
  const CJarRed_Gold = new Bottle("Classic Jar", "Red_Gold", 28);
  const CJarTeal = new Bottle("Classic Jar", "Teal", 29);
  const CJarTurquoise_Gold = new Bottle("Classic Jar", "Turquoise_Gold", 30);
  const CJarYellow = new Bottle("Classic Jar", "Yellow", 31);
  const EPotionBlack_Gold = new Bottle("Encased Potion", "Black_Gold", 32);
  const EPotionBrown_Purple = new Bottle("Encased Potion", "Brown_Purple", 33);
  const EPotionBrown_Green = new Bottle("Encased Potion", "Brown_Green", 34);
  const EPotionGold = new Bottle("Encased Potion", "Gold", 35);
  const EPotionLime_Purple = new Bottle("Encased Potion", "Lime_Purple", 36);
  const EPotionYellow_Red = new Bottle("Encased Potion", "Yellow_Red", 37);
  const GPotionBlack = new Bottle("Glowing Potion", "Black", 38);
  const GPotionBlue = new Bottle("Glowing Potion", "Blue", 39);
  const GPotionCyan = new Bottle("Glowing Potion", "Cyan", 40);
  const GPotionGold = new Bottle("Glowing Potion", "Gold", 41);
  const GPotionGreen = new Bottle("Glowing Potion", "Green", 42);
  const GPotionLime = new Bottle("Glowing Potion", "Lime", 43);
  const GPotionPink = new Bottle("Glowing Potion", "Pink", 44);
  const GPotionPurple = new Bottle("Glowing Potion", "Purple", 45);
  const GPotionRed = new Bottle("Glowing Potion", "Red", 46);
  const GPotionYellow = new Bottle("Glowing Potion", "Yellow", 47);
  const LBottleBlack = new Bottle("Large Bottle", "Black", 48);
  const LBottleBlue = new Bottle("Large Bottle", "Blue", 49);
  const LBottleBrown = new Bottle("Large Bottle", "Brown", 51);
  const LBottleGreen = new Bottle("Large Bottle", "Green", 52);
  const LBottleLime = new Bottle("Large Bottle", "Lime", 53);
  const LBottlePink = new Bottle("Large Bottle", "Pink", 54);
  const LBottlePurple = new Bottle("Large Bottle", "Purple", 55);
  const LBottleRed = new Bottle("Large Bottle", "Red", 56);
  const LBottleTurquoise = new Bottle("Large Bottle", "Turquoise", 57);
  const LBottleYellow = new Bottle("Large Bottle", "Yellow", 58);
  const LJarBlack_Gold = new Bottle("Large Jar", "Black_Gold", 59);
  const LJarBlue_Gold = new Bottle("Large Jar", "Blue_Gold", 60);
  const LJarGold = new Bottle("Large Jar", "Gold", 61);
  const LJarGreen = new Bottle("Large Jar", "Green", 62);
  const LJarPink = new Bottle("Large Jar", "Pink", 63);
  const LJarPurple = new Bottle("Large Jar", "Purple", 64);
  const LJarRed_Gold = new Bottle("Large Jar", "Red_Gold", 65);
  const LJarTeal = new Bottle("Large Jar", "Teal", 66);
  const LJarTurquoise_Gold = new Bottle("Large Jar", "Turquoise_Gold", 67);
  const LJarYellow = new Bottle("Large Jar", "Yellow", 68);
  const LTonicBlack = new Bottle("Large Tonic", "Black", 69);
  const LTonicBlue = new Bottle("Large Tonic", "Blue", 70);
  const LTonicGold = new Bottle("Large Tonic", "Gold", 71);
  const LTonicGreen = new Bottle("Large Tonic", "Green", 72);
  const LTonicOrange = new Bottle("Large Tonic", "Orange", 73);
  const LTonicPink = new Bottle("Large Tonic", "Pink", 74);
  const LTonicPurple = new Bottle("Large Tonic", "Purple", 75);
  const LTonicRed = new Bottle("Large Tonic", "Red", 76);
  const LTonicTurquoise = new Bottle("Large Tonic", "Turquoise", 78);
  const LTonicYellow = new Bottle("Large Tonic", "Yellow", 79);
  const RPotionBlack = new Bottle("Round Potion", "Black", 80);
  const RPotionBlue = new Bottle("Round Potion", "Blue", 81);
  const RPotionGold = new Bottle("Round Potion", "Gold", 82);
  const RPotionGreen = new Bottle("Round Potion", "Green", 83);
  const RPotionLime = new Bottle("Round Potion", "Lime", 84);
  const RPotionMagenta = new Bottle("Round Potion", "Magenta", 85);
  const RPotionOrange = new Bottle("Round Potion", "Orange", 86);
  const RPotionPurple = new Bottle("Round Potion", "Purple", 87);
  const RPotionRed = new Bottle("Round Potion", "Red", 88);
  const RPotionTurquoise = new Bottle("Round Potion", "Turquoise", 89);
  const RPotionYellow = new Bottle("Round Potion", "Yellow", 90);
  const SBottleBlack_Gold = new Bottle("Small Bottle", "Black_Gold", 91);
  const SBottleBlue = new Bottle("Small Bottle", "Blue", 92);
  const SBottleGold = new Bottle("Small Bottle", "Gold", 93);
  const SBottleGreen = new Bottle("Small Bottle", "Green", 94);
  const SBottleOrange = new Bottle("Small Bottle", "Orange", 95);
  const SBottlePink = new Bottle("Small Bottle", "Pink", 96);
  const SBottlePurple = new Bottle("Small Bottle", "Purple", 97);
  const SBottleRed_Yellow = new Bottle("Small Bottle", "Red_Yellow", 98);
  const SBottleTeal_Gold = new Bottle("Small Bottle", "Teal_Gold", 99);
  const SBottleYellow = new Bottle("Small Bottle", "Yellow", 100);
  const SElixirBlack = new Bottle("Small Elixir", "Black", 101);
  const SElixirBlue = new Bottle("Small Elixir", "Blue", 102);
  const SElixirCyan = new Bottle("Small Elixir", "Cyan", 103);
  const SElixirGold = new Bottle("Small Elixir", "Gold", 104);
  const SElixirGreen = new Bottle("Small Elixir", "Green", 105);
  const SElixirOrange = new Bottle("Small Elixir", "Orange", 106);
  const SElixirPink = new Bottle("Small Elixir", "Pink", 107);
  const SElixirPurple = new Bottle("Small Elixir", "Purple", 108);
  const SElixirRed = new Bottle("Small Elixir", "Red", 108);
  const SElixirYellow = new Bottle("Small Elixir", "Yellow", 110);
  const SVialBlack = new Bottle("Small Vial", "Black", 111);
  const SVialBlue = new Bottle("Small Vial", "Blue", 112);
  const SVialBrown = new Bottle("Small Vial", "Brown", 111);
  const SVialDarkGreen = new Bottle("Small Vial", "DarkGreen", 113);
  const SVialGold = new Bottle("Small Vial", "Gold", 114);
  const SVialGreen = new Bottle("Small Vial", "Green", 115);
  const SVialLime = new Bottle("Small Vial", "Lime", 116);
  const SVialOrange = new Bottle("Small Vial", "Orange", 117);
  const SVialPink = new Bottle("Small Vial", "Pink", 118);
  const SVialPurple = new Bottle("Small Vial", "Purple", 119);
  const SVialRed = new Bottle("Small Vial", "Red", 120);
  const SVialTeal = new Bottle("Small Vial", "Teal", 121);
  const SVialTurquoise = new Bottle("Small Vial", "Turquoise", 122);
  const SVialYellow = new Bottle("Small Vial", "Yellow", 123);

  
function setMushrooms(){
  let ingredientList = [];

  ingredientList[DawnSinger.ID] = DawnSinger.name;
  ingredientList[MidnightFungus.ID] = MidnightFungus.name;
  ingredientList[Puffglow.ID] = Puffglow.name;
  ingredientList[Capling.ID] = Capling.name;
  ingredientList[ScarletSpore.ID] = ScarletSpore.name;
  ingredientList[SporeSpark.ID] = SporeSpark.name;
  ingredientList[Glowtop.ID] = Glowtop.name;
  ingredientList[BarkShine.ID] = BarkShine.name;
  ingredientList[CrimsonCap.ID] = CrimsonCap.name;
  ingredientList[StarlitShroom.ID] = StarlitShroom.name;
  ingredientList[MossyGill.ID] = MossyGill.name;
  ingredientList[FeatherShroom.ID] = FeatherShroom.name;

  return ingredientList;
}

function setBottleList(){
  let bottleList = [];

  bottleList[0] = "Big Vial";
  bottleList[1] = "Bubbly Brew Bottle";
  bottleList[2] = "Classic Jar";
  bottleList[3] = "Encased Potion";
  bottleList[4] = "Glowing Potion";
  bottleList[5] = "Large Bottle";
  bottleList[6] = "Large Jar";
  bottleList[7] = "Large Tonic";
  bottleList[8] = "Round Potion";
  bottleList[9] = "Small Bottle";
  bottleList[10] = "Small Elixir";
  bottleList[11] = "Small Vial";

  return bottleList;
}

function setBigVialList(){
  let BigVialList = [];

  BigVialList[0] = BVialBlack.name;
  BigVialList[1] = BVialBlue.name;
  BigVialList[2] = BVialGold.name;
  BigVialList[3] = BVialGreen.name;
  BigVialList[4] = BVialLime.name;
  BigVialList[5] = BVialOrange.name;
  BigVialList[6] = BVialPink.name;
  BigVialList[7] = BVialPurple.name;
  BigVialList[8] = BVialRed.name;
  BigVialList[9] = BVialTurquise.name;
  BigVialList[10] = BVialYellow.name;

  return BigVialList;
}

function setBubblyBrewBottleRisingList(){
  let BubblyBrewBottleRisingList = [];

  BubblyBrewBottleRisingList[0] = BBBRBlack.name;
  BubblyBrewBottleRisingList[1] = BBBRBlue.name;
  BubblyBrewBottleRisingList[2] = BBBRBrown.name;
  BubblyBrewBottleRisingList[3] = BBBRCyan.name;
  BubblyBrewBottleRisingList[4] = BBBRGold.name;
  BubblyBrewBottleRisingList[5] = BBBRGreen.name;
  BubblyBrewBottleRisingList[6] = BBBROrange.name;
  BubblyBrewBottleRisingList[7] = BBBRPink.name;
  BubblyBrewBottleRisingList[8] = BBBRPurple.name;
  BubblyBrewBottleRisingList[9] = BBBRRed.name;
  BubblyBrewBottleRisingList[10] = BBBRYellow.name;

  return BubblyBrewBottleRisingList;
}

function setClassicJarList(){
  let ClassicJarList = [];

  ClassicJarList[0] = CJarBlack_Gold.name;
  ClassicJarList[1] = CJarBlue_Gold.name;
  ClassicJarList[2] = CJarGold.name;
  ClassicJarList[3] = CJarGreen.name;
  ClassicJarList[4] = CJarPink.name;
  ClassicJarList[5] = CJarPurple.name;
  ClassicJarList[6] = CJarRed_Gold.name;
  ClassicJarList[7] = CJarTeal.name;
  ClassicJarList[8] = CJarTurquoise_Gold.name;
  ClassicJarList[9] = CJarYellow.name;

  return ClassicJarList;
}

function setEncasedPotionList(){
  let EncasedPotionList = [];

  EncasedPotionList[0] = EPotionBlack_Gold.name;
  EncasedPotionList[1] = EPotionBrown_Purple;
  EncasedPotionList[2] = EPotionBrown_Green;
  EncasedPotionList[3] = EPotionGold.name;
  EncasedPotionList[4] = EPotionLime_Purple.name;
  EncasedPotionList[5] = EPotionYellow_Red.name;

  return EncasedPotionList;
}

function setGlowingPotionList(){
  let GlowingPotionList = [];

  GlowingPotionList[0] = GPotionBlack.name;
  GlowingPotionList[1] = GPotionBlue.name;
  GlowingPotionList[2] = GPotionCyan.name;
  GlowingPotionList[3] = GPotionGold.name;
  GlowingPotionList[4] = GPotionGreen.name;
  GlowingPotionList[5] = GPotionLime.name;
  GlowingPotionList[6] = GPotionPink.name;
  GlowingPotionList[7] = GPotionPurple.name;
  GlowingPotionList[8] = GPotionRed.name;
  GlowingPotionList[9] = GPotionYellow.name;

  return GlowingPotionList;
}

function setLargeBottleList(){
  let LargeBottleList = [];

  LargeBottleList[0] = LBottleBlack.name;
  LargeBottleList[1] = LBottleBlue.name;
  LargeBottleList[2] = LBottleBrown.name;
  LargeBottleList[3] = LBottleGreen.name;
  LargeBottleList[4] = LBottleLime.name;
  LargeBottleList[5] = LBottlePink.name;
  LargeBottleList[6] = LBottlePurple.name;
  LargeBottleList[7] = LBottleRed.name;
  LargeBottleList[8] = LBottleTurquoise.name;

  return LargeBottleList;
}

function setLargeJarList(){
  let LargeJarList = [];

  LargeJarList[0] = LJarBlack_Gold.name;
  LargeJarList[1] = LJarBlue_Gold.name;
  LargeJarList[0] = LJarGold.name;
  LargeJarList[3] = LJarGreen.name;
  LargeJarList[4] = LJarPink.name;
  LargeJarList[5] = LJarPurple.name;
  LargeJarList[6] = LJarRed_Gold.name;
  LargeJarList[7] = LJarTeal.name;
  LargeJarList[8] = LJarTurquoise_Gold.name;
  LargeJarList[9] = LJarYellow.name;

  return LargeJarList;
}

function setLargeTonicList(){
  let LargeTonicList = [];

  LargeTonicList[0] = LTonicBlack.name;
  LargeTonicList[1] = LTonicBlue.name;
  LargeTonicList[2] = LTonicGold.name;
  LargeTonicList[3] = LTonicGreen.name;
  LargeTonicList[4] = LTonicOrange.name;
  LargeTonicList[5] = LTonicPink.name;
  LargeTonicList[6] = LTonicPurple.name;
  LargeTonicList[7] = LTonicRed.name;
  LargeTonicList[8] = LTonicTurquoise.name;
  LargeTonicList[9] = LTonicYellow.name;

  return LargeTonicList;
}

function setRoundPotionList(){
  let RoundPotionList = [];

  RoundPotionList[0] = RPotionBlack.name;
  RoundPotionList[1] = RPotionBlue.name;
  RoundPotionList[2] = RPotionGold.name;
  RoundPotionList[3] = RPotionGreen.name;
  RoundPotionList[4] = RPotionLime.name;
  RoundPotionList[5] = RPotionMagenta.name;
  RoundPotionList[6] = RPotionOrange.name;
  RoundPotionList[7] = RPotionPurple.name;
  RoundPotionList[8] = RPotionRed.name;
  RoundPotionList[9] = RPotionTurquoise.name;
  RoundPotionList[10] = RPotionYellow.name;

  return RoundPotionList;
}

function setSmallBottleList(){
  let SmallBottleList = [];

  SmallBottleList[0] = SBottleBlack_Gold.name;
  SmallBottleList[1] = SBottleBlue.name;
  SmallBottleList[2] = SBottleGold.name;
  SmallBottleList[3] = SBottleGreen.name;
  SmallBottleList[4] = SBottleOrange.name;
  SmallBottleList[5] = SBottlePink.name;
  SmallBottleList[6] = SBottlePurple.name;
  SmallBottleList[7] = SBottleRed_Yellow.name;
  SmallBottleList[8] = SBottleTeal_Gold.name;
  SmallBottleList[9] = SBottleYellow.name;

  return SmallBottleList;
}

function setSmallElixirList(){
  let SmallElixirList = [];

  SmallElixirList[0] = SElixirBlack.name;
  SmallElixirList[1] = SElixirBlue.name;
  SmallElixirList[2] = SElixirCyan.name;
  SmallElixirList[3] = SElixirGold.name;
  SmallElixirList[4] = SElixirGreen.name;
  SmallElixirList[5] = SElixirOrange.name;
  SmallElixirList[6] = SElixirPink.name;
  SmallElixirList[7] = SElixirPurple.name;
  SmallElixirList[8] = SElixirRed.name;
  SmallElixirList[9] = SElixirYellow.name;

  return SmallElixirList;
}

function setSmallVialList(){
  let SmallVialList = [];

  SmallVialList[0] = SVialBlack.name;
  SmallVialList[1] = SVialBlue.name;
  SmallVialList[2] = SVialBrown.name;
  SmallVialList[3] = SVialDarkGreen.name;
  SmallVialList[4] = SVialGold.name;
  SmallVialList[5] = SVialGreen.name;
  SmallVialList[6] = SVialLime.name;
  SmallVialList[7] = SVialOrange.name;
  SmallVialList[8] = SVialPink.name;
  SmallVialList[9] = SVialPurple.name;
  SmallVialList[10] = SVialRed.name;
  SmallVialList[11] = SVialTeal.name;
  SmallVialList[12] = SVialTurquoise.name;
  SmallVialList[13] = SVialYellow.name;

  return SmallVialList;
}

function recipe(ingredientList, bottleList){
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
    ingredientTypeList[i] = ingredientList[temp];
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


ingredientList = setMushrooms();

bottleList = setBottleList();

recipeIngredients = recipe(ingredientList, bottleList);


