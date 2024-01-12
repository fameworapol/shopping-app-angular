import { Ingredients } from './../shared/ingredients.model';
import { Component } from '@angular/core';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrl: './shoping-list.component.css',
})
export class ShopingListComponent {
  ingredients: Ingredients[] = [];

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.ingredients = this.shoppingListService.getIngredient();
    this.shoppingListService.ingredientChanged.subscribe(
      (ingredients: Ingredients[]) => {
        this.ingredients = ingredients;
      }
    );
  }

  onIngredientAdded(ingredient: Ingredients) {
    console.log(ingredient);
    this.ingredients.push(ingredient);
  }
}
