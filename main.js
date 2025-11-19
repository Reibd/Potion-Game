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