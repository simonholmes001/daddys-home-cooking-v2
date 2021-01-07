import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { RpageComponent } from './pages/rpage/rpage.component';
import { RecipeCreateComponent } from './recipe-create/recipe-create/recipe-create.component';
import { RecipeListComponent } from './recipe-create/recipe-list/recipe-list.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'recipes', component: RecipesComponent },
  { path: 'recipe-page', component: RpageComponent },
  { path: 'recipe-create', component: RecipeCreateComponent },
  { path: 'recipe-list', component: RecipeListComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to `home`
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
