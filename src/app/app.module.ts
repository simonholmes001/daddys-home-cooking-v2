import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RpageComponent } from './pages/rpage/rpage.component';
import { RecipeCreateComponent } from './recipe-create/recipe-create/recipe-create.component';
import { RecipeListComponent } from './recipe-create/recipe-list/recipe-list.component';


@NgModule({
  declarations: [
    AppComponent,
    RpageComponent,
    RecipeCreateComponent,
    RecipeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
