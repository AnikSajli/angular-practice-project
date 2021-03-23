import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RecipesComponent} from './recipes.component';
import {AuthGuard} from '../auth/auth.guard';
import {RecipeStartComponent} from './recipe-start/recipe-start.component';
import {EditRecipeComponent} from './edit-recipe/edit-recipe.component';
import {RecipeDetailsComponent} from './recipe-details/recipe-details.component';

// @ts-ignore
const routes: Routes = [
  {
    path: '',
    component: RecipesComponent,
    canActivate: [AuthGuard],
    children: [
      {path: '', component: RecipeStartComponent},
      {path: 'new', component: EditRecipeComponent},
      {path: ':id', component: RecipeDetailsComponent},
      {path: ':id/edit', component: EditRecipeComponent},
      ]
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RecipesRoutingModule {

}
