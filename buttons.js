// Adds the chosen ingredient to the list of ingedrients in the potion with a max of 10 ingredients
// Adds one to the number of ingredients in the potion
function ingredientButton(shelfNumber, ID) {
  
  if (pIngredientsNum < 10) {

    potionIngredients[pIngredientsNum] = ingredientList[shelfNumber][ID].name;
    
    potionIngredientSprites[pIngredientsNum] = ingredientSprite[shelfNumber][ID];
    
    pIngredientsNum = potionIngredients.length;

  }
  
}

// Adds the chosen flower to the list of ingedrients in the potion and adds one to the number of ingredients in the potion
// Returns the name of the color of potion that should be viewed
function flowerButton(fID) {

  selectedFlower = flower[fID].name;
  selectedFlowerSprite = flowerSprites[fID];
  fType = fID;
  
}

// Adds the chosen bottle type to the list of ingedrients in the potion and adds one to the number of ingredients in the potion
function bottleButton(bID) {

  selectedPotion = Bottle.type[bID];
  selectedPotionSprite = potionSprites[bID];
  bType = bID;

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

// Creates ingredient buttons for selection
function createIngredientButtons() {

  for (let j = 0; j < 3; j++) {
    for (let i = 0; i < 12; i++) {
      selectB[j][i] = createButton(ingredientList[j][i].name);
    }
  }

}

// Creates buttons to switch shelves
function createShelfButtons() {

  shelfB[0] = createButton("See Mushrooms");
  shelfB[1] = createButton("See Fruits");
  shelfB[2] = createButton("See Vegetables");

}

// Creates remove buttons
function createRemoveButtons() {

  removeB = createButton("Remove\nOne");
  removeAllB = createButton("Remove\nAll");

}

// Create the potion selection buttons
function createPotionButtons() {

  for (let i = 0; i < 12; i++) {
    potionB[i] = createButton(Bottle.type[i]);
  }

}

// Creates the flower buttons
function createFlowerButtons() {

  for (let i = 0; i < 12; i++) {
    flowerB[i] = createButton(flower[i].name);
  }

}

// Creates the transition buttons
function createTransitionButtons() {

  roomB[0] = createButton("To\nPotion\nRoom");
  roomB[1] = createButton("Select\na\nFlower");
  roomB[2] = createButton("Finish\nPotion");

  backB = createButton("Back");

}