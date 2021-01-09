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
    instructions: string, imgURL: string, videoURL: string, tags: string) {
    this.taskService.createRecipe(recipeName, difficulty, prepTime, cookTime, ingredients,instructions, imgURL, videoURL, tags).subscribe((response: any) => {
      console.log(response)
    });
  }

}
