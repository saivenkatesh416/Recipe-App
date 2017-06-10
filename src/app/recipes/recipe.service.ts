import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import {EventEmitter, Injectable} from "@angular/core";
import {shoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Shrimp','Shrimp Curry','https://i.ytimg.com/vi/kmQKXXjY2C4/hqdefault.jpg',
      [
        new Ingredient('shrimp', 50),
        new Ingredient('onions', 2),
        new Ingredient('chillies', 5),
        new Ingredient('other', 1)
      ]),
    new Recipe('Chicken','Chicken Fry',
      'https://s-media-cache-ak0.pinimg.com/736x/2b/1e/4a/2b1e4a5756cfce91445fdcff4bc359e3.jpg',
    [
      new Ingredient('chicken', 2),
      new Ingredient('onions', 2),
      new Ingredient('chillies', 5),
      new Ingredient('other', 1)
    ])
  ];

  constructor(private slService: shoppingListService){}

  getRecipes() {
      return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }
}
