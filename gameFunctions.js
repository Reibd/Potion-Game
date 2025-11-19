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
  let temp = 0;

  potionIngredients[pIngredientsNum] = selectedPotion;
  pIngredientsNum = potionIngredients.length;
  potionIngredients[pIngredientsNum] = selectedFlower;
  pIngredientsNum = potionIngredients.length;

  if (pIngredientsNum > recipeIngredients.length) {

    temp = pIngredientsNum;
  } 
  
  else {
    temp = recipeIngredients.length;
  }

  for (let i = 0; i < temp; i++) {
    check[i] = false;
  }

  for (let i = 0; i < temp; i++) {

    for (let j = 0; j < recipeIngredients.length; j++) {

      if (potionIngredients[i] == recipeIngredients[j]) {
        
        check[i] = true;
      
      }
    
    }
  
  }

  for (let i = 0; i < temp; i++) {

    if (check[i]) {
      
      trueCount++;
    
    }
  
  }

  score += Math.floor((trueCount / temp) * 100);
  
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