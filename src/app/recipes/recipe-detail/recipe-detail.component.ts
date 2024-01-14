import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css',
})
export class RecipeDetailComponent {
  recipe: Recipe;
  id: number;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      //get params from path
      this.id = +params['id'];
      console.log('recipe = ', this.recipe);
      this.recipe = this.recipeService.getRecipe(this.id);
    });
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientToShoppingList(this.recipe.ingredient);
  }

  onEditComponent() {
    //this.router.navigate(['edit'], { relativeTo: this.route }); //relativeTo:this.route ต่อกับ path ปัจจุบัน
    this.router.navigate(['../', this.id, 'edit'], { relativeTo: this.route }); //ต่อ path ได้
  }
}
