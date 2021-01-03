import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-create',
  templateUrl: './recipe-create.component.html',
  styleUrls: ['./recipe-create.component.scss']
})
export class RecipeCreateComponent implements OnInit {

  recipeName = '';
  newRecipe = '';

  onAddRecipe() {
    this.newRecipe = this.recipeName;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
