import {Ingredient} from './ingredient.model';
import {Subject} from 'rxjs';

export class ShoppingListService {
  startedEditing = new Subject<number>();
  private ingredients: Ingredient[] = [
    new Ingredient('Orange', 5),
    new Ingredient('Apple', 10)
  ];

  getIngredients(): Ingredient[] {
    return this.ingredients;
  }

  getIngredient(index: number): Ingredient {
    return this.ingredients[index];
  }
  addIngredient(ingredient: Ingredient): void {
    this.ingredients.push(ingredient);
  }
  updateIngredient(index: number, newIngredient: Ingredient): void {
    this.ingredients[index] = newIngredient;
  }

  deleteIngredient(index: number): void {
    this.ingredients.splice(index, 1);
  }
}
