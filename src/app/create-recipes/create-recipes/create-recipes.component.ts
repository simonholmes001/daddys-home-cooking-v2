import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-recipe-create',
  templateUrl: './create-recipes.component.html',
  styleUrls: ['./create-recipes.component.scss']
})
export class RecipeCreateComponent implements OnInit {

  public recipes!: any;

  constructor(private taskService: TaskService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  createRecipe(recipeName: string, difficulty: string, prepTime: string, cookTime: string, ingredients: string,
    step1: string, step2: string, step3: string, step4: string, step5: string, step6: string, step7: string, step8: string, step9: string, step10: string, imgURL: string, videoURL: string, additionalLinks: string, tags: string) {
    this.taskService.createRecipe(recipeName, difficulty, prepTime, cookTime, ingredients, step1, step2, step3, step4, step5, step6, step7, step8, step9, step10, imgURL, videoURL, additionalLinks, tags).subscribe((response: any) => {
      // window.location.replace('create-recipes');
      // ADDED IN THIS CODE TO TRY AND GET THE INDIVIDUAL RECIPE FROM THE POST API CALL FROM createRecipe => NOT WORKING
      // LOOK INTO PROMISES TO SOLVE THIIS PROBLEM
      this.route.params.subscribe(
        (params: Params) => {
          this.taskService.getIndividualRecipes(params.id).subscribe((recipes: any) => {
            return this.recipes = recipes;
        });
        }
        )
      console.log(response)
    });
  }

  sendNotification() {

  };

}

// window.location.replace() in the createRecipe() function allows to reload the create recipe page & have a fresh page with no prior input
