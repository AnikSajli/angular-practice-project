import {NgModule} from '@angular/core';
import {RecipesComponent} from './recipes/recipes.component';
import {RecipeListComponent} from './recipes/recipe-list/recipe-list.component';
import {RecipeDetailsComponent} from './recipes/recipe-details/recipe-details.component';
import {RecipeItemComponent} from './recipes/recipe-list/recipe-item/recipe-item.component';
import {RecipeStartComponent} from './recipes/recipe-start/recipe-start.component';
import {EditRecipeComponent} from './recipes/edit-recipe/edit-recipe.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailsComponent,
    RecipeItemComponent,
    RecipeStartComponent,
    EditRecipeComponent,
  ],

  imports: [
    RouterModule,
    CommonModule,
    ReactiveFormsModule
  ],

  exports: [
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailsComponent,
    RecipeItemComponent,
    RecipeStartComponent,
    EditRecipeComponent,
  ]
})
export class RecipesModule {

}
