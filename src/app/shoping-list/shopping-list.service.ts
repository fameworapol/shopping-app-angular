import { EventEmitter } from '@angular/core';
import { Ingredients } from './../shared/ingredients.model';

export class ShoppingListService {
  ingredientChanged = new EventEmitter<Ingredients[]>();
  ingredients: Ingredients[] = [
    new Ingredients('apple', 50),
    new Ingredients('banana', 20),
  ];

  getIngredient() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredients) {
    this.ingredients.push(ingredient);
    this.ingredientChanged.emit(this.ingredients.slice());
  }
}
