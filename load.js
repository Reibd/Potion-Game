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

// Creates the witch idle and charge gifs
function createWitch() {

  witchChargeGIF = createImg("Game Sprites/Blue Witch/Blue_witch/witch charge.gif");
  witchIdleGIF = createImg("Game Sprites/Blue Witch/Blue_witch/witch idle.gif");

}

// Loads the black potion sprites for the shelf
function loadPotions() {

  for (let i = 0; i < 12; i++) {
      potionSprites[i] = loadImage(`Game Sprites/Pixel Potion Pack/Pixel Potion Pack - FINISHED/ALL Potions - First Frame/${Bottle.type[i]} - BLACK - 0000.png`);
  }

}

// Loads the flower sprites
function loadFlowers() {

  for (let i = 0; i < 12; i++) {
      flowerSprites[i] = loadImage(flower[i].sprite);
  }

}