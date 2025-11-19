// Links each ingredient button to its respective function for selection
function selectIngredient() {

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 12; j++) {
      selectB[i][j].mousePressed(() => ingredientButton(i, j));
    }
  }

}

// Makes the shelf buttons change the shelf on click
function selectShelfButton() {

  for (let i = 0; i < 3; i++) {
    shelfB[i].mousePressed(() => shelfNumber = i);
  }

}

// Links the remove buttons to their respective functions
function selectRemoveButtons() {

  removeB.mousePressed(() => removeLast());
  removeAllB.mousePressed(() => removeAll());

}

// Links the potion buttons to their respective functions
function selectPotionButtons() {

  for (let i = 0; i < 12; i++) {
    potionB[i].mousePressed(() => bottleButton(i));
  }

}

// Links the flower buttons to their respective function
function selectFlowerButtons() {

  for (let i = 0; i < 12; i++) {
    flowerB[i].mousePressed(() => flowerButton(i));
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