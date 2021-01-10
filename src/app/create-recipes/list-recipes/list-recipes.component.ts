import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './list-recipes.component.html',
  styleUrls: ['./list-recipes.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: any[] | undefined;
  uri: any;

  constructor(private taskService: TaskService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.taskService.listRecipes().subscribe((recipes: any) => {
      this.recipes = recipes;
    });
  }

  deleteRecipe(uri: string) {
    this.taskService.deleteRecipe(`${uri}`).subscribe((response: any) => {
      this.taskService.listRecipes().subscribe((recipes: any) => {
        this.recipes = recipes;
      });
    });
  }

}
