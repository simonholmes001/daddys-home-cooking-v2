import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { RpageComponent } from './pages/rpage/rpage.component';
import { RecipeCreateComponent } from './create-recipes/create-recipes/create-recipes.component';
import { RecipeListComponent } from './create-recipes/list-recipes/list-recipes.component';
import { ModifyRecipesComponent } from './create-recipes/modify-recipes/modify-recipes.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'recipes', component: RecipesComponent },
  { path: 'recipe-page', component: RpageComponent },
  { path: 'create-recipes', component: RecipeCreateComponent },
  { path: 'list-recipes', component: RecipeListComponent },
  { path: 'modify-recipes/:id', component: ModifyRecipesComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to `home`
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
