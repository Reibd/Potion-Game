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

// Makes one long list of names in order of ingredient ID
function setIngredientList() {

  for (let i = 0; i < 12; i++) {

    ingredientList[0][i] = mushroom[i];
    ingredientList[1][i] = fruit[i];
    ingredientList[2][i] = veg[i];

  }

}