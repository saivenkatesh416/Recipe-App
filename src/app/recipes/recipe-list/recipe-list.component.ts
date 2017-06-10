import {Component, OnInit} from '@angular/core';

import { Recipe } from '../recipe.model';
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  /*@Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Shrimp','Shrimp Curry','https://i.ytimg.com/vi/kmQKXXjY2C4/hqdefault.jpg'),
    new Recipe('Chicken','Chicken Fry','https://s-media-cache-ak0.pinimg.com/736x/2b/1e/4a/2b1e4a5756cfce91445fdcff4bc359e3.jpg')
  ]; Moved it to recipe.service.ts*/

  recipes: Recipe[];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes  = this.recipeService.getRecipes();
  }

  /*onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }removed when using services */

}
