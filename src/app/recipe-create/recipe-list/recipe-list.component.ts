import { Component, OnInit, Input } from '@angular/core';

import { RecipeCreateComponent } from '../recipe-create/recipe-create.component';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
