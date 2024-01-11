import { Ingredients } from './../shared/ingredients.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrl: './shoping-list.component.css',
})
export class ShopingListComponent {
  ingredients: Ingredients[] = [
    new Ingredients('apple', 50),
    new Ingredients('banana', 20),
  ];
  onIngredientAdded(ingredient: Ingredients) {
    console.log(ingredient);
    this.ingredients.push(ingredient);
  }
}
