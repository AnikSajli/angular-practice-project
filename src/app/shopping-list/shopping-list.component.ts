import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from './ingredient.model';
import {ShoppingListService} from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
  }

  // onIngredientAdded(ingredient: Ingredient): void {
  //   this.ingredients.push(ingredient);
  // }
  onEditItem(index: number): void {
    this.shoppingListService.startedEditing.next(index);
  }
}
