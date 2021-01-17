import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-modify-recipes',
  templateUrl: './modify-recipes.component.html',
  styleUrls: ['./modify-recipes.component.scss']
})

export class ModifyRecipesComponent implements OnInit {

  public recipes!: any;

  constructor(private taskService: TaskService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        // console.log(params.id);
        this.taskService.getIndividualRecipes(params.id).subscribe((recipes: any) => {
          return this.recipes = recipes;
          // console.log(recipes);
      });
      }
      )
    }

    updateRecipe(uri: string, recipeName: string, difficulty: string, prepTime: string, cookTime: string, ingredients: string,
      instructions: string, imgURL: string, videoURL: string, tags: string) {
      this.taskService.updateRecipe(`${uri}`, recipeName, difficulty, prepTime, cookTime, ingredients,instructions, imgURL, videoURL, tags).subscribe((response: any) => {
        console.log(response)
      });
    }

    modifyAnother() {
        window.location.replace('list-recipes');
      }

      goHome() {
        window.location.replace('home');
    }
}
