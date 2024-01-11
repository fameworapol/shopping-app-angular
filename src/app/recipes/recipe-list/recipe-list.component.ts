import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent {
  @Output()  recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'Rissoles',
      'Air fryer chicken rissoles recipe',
      'https://img.taste.com.au/h2qVkJjl/taste/2021/09/air-fryer-chicken-rissoles-recipe-173558-1.jpg'
    ),
    new Recipe(
      'Chicken Gnocchi Soup',
      'Chicken gnocchi soup is a one-pot',
      'https://hips.hearstapps.com/hmg-prod/images/chicken-and-gnocchi-soup-recipe-2-1662605159.jpg?crop=0.8888888888888888xw:1xh;center,top&resize=1200:*'
    ),
  ];
  constructor() {}

  onRecipeSelected(recipe:Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
