import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-recipe-create',
  templateUrl: './create-recipes.component.html',
  styleUrls: ['./create-recipes.component.scss']
})
export class RecipeCreateComponent implements OnInit {

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

  createRecipe(recipeName: string, difficulty: string, prepTime: string, cookTime: string, ingredients: string,
    step1: string, step2: string, step3: string, step4: string, step5: string, step6: string, step7: string, step8: string, step9: string, step10: string, imgURL: string, videoURL: string, additionalLinks: string, tags: string) {
    this.taskService.createRecipe(recipeName, difficulty, prepTime, cookTime, ingredients, step1, step2, step3, step4, step5, step6, step7, step8, step9, step10, imgURL, videoURL, additionalLinks, tags).subscribe((response: any) => {
      window.location.replace('create-recipes');
      console.log(response)
    });
  }
}

// window.location.replace() in the createRecipe() function allows to reload the create recipe page & have a fresh page with no prior input
