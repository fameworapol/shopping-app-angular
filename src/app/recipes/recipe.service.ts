import { Ingredients } from './../shared/ingredients.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { ShoppingListService } from '../shoping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  constructor(private shoppingListService: ShoppingListService) {}

  private recipes: Recipe[] = [
    new Recipe(
      'Rissoles',
      'Air fryer chicken rissoles recipe',
      'https://img.taste.com.au/h2qVkJjl/taste/2021/09/air-fryer-chicken-rissoles-recipe-173558-1.jpg',
      [new Ingredients('Meat', 1), new Ingredients('French Fire', 2)]
    ),
    new Recipe(
      'Chicken Gnocchi Soup',
      'Chicken gnocchi soup is a one-pot',
      'https://hips.hearstapps.com/hmg-prod/images/chicken-and-gnocchi-soup-recipe-2-1662605159.jpg?crop=0.8888888888888888xw:1xh;center,top&resize=1200:*',
      [new Ingredients('Burger', 11), new Ingredients('Milk', 21)]
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientToShoppingList(ingredient: Ingredients[]) {
    this.shoppingListService.addIngredients(ingredient);
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }
}
