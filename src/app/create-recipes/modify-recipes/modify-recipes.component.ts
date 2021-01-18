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

    updateRecipe(uri: string, recipeName: string, difficulty: string, prepTime: string, cookTime: string, ingredients: string, step1: string, step2: string, step3: string, step4: string, step5: string, step6: string, step7: string, step8: string, step9: string, step10: string, imgURL: string, videoURL: string, additionalLinks: string, tags: string) {
      this.taskService.updateRecipe(`${uri}`, recipeName, difficulty, prepTime, cookTime, ingredients, step1, step2, step3, step4, step5, step6, step7, step8, step9, step10, imgURL, videoURL, additionalLinks, tags).subscribe((response: any) => {
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
