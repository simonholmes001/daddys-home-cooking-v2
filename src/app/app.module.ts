import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RpageComponent } from './pages/rpage/rpage.component';
import { RecipeCreateComponent } from './create-recipes/create-recipes/create-recipes.component';
import { RecipeListComponent } from './create-recipes/list-recipes/list-recipes.component';
import { ModifyRecipesComponent } from './create-recipes/modify-recipes/modify-recipes.component';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    RpageComponent,
    RecipeCreateComponent,
    RecipeListComponent,
    ModifyRecipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
