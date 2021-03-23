import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';

export class RecipeService{
  selectedRecipe = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('A test Recipe',
      'Deescription Deescription Deescription Deescription Deescription Deescription',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563' ),
    new Recipe('A test Recipe 2',
      'Deescription Deescription',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563' )];

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  getRecipe(index: number): Recipe {
    return this.recipes[index];
  }

  setRecipes(recipes: Recipe[]): void {
    this.recipes = recipes;
  }
}
