import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // @Output() recipeWasSelected = new EventEmitter<Recipe>();
  // >> got rid of our own eventemitter after injecting a service
  recipes: Recipe[];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  // takes arg of type recipe
  // no longer needed after we used services and dependency injection
  // onRecipeSelected(recipe: Recipe) {
  //  this.recipeWasSelected.emit(recipe);
  // }
}


// url for jpeg needs to be of certain type
