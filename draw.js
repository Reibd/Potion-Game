// Draws the finished potion and score button
function drawFinishedPotion() {

  finishScore.position(30, 30).size(400, 200).style('font-size', '32px');
  potionGif.position(465, 55).size(150, 150);

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

// Draws the potions on the shelf
function drawPotions() {

  let x = [40, 230, 415];
  let y = [140, 235, 325, 415];

  for (let i = 0; i < 12; i++) {
    image(potionSprites[i], x[i % 3], y[Math.floor(i / 3)], 64, 64);
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

// Draws the flowers on the shelf
function drawFlowers() {
  
  let x = [40, 230, 415];
  let y = [140, 235, 325, 415];

  for (let i = 0; i < 12; i++) {
    image(flowerSprites[i], x[i % 3], y[Math.floor(i / 3)], 64, 64);
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