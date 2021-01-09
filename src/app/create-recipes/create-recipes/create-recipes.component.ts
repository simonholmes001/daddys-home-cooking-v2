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

  createNewRecipe() {
    this.taskService.createRecipe("Soup", "2/5", "30 minutes", "1 hour", "potatoes, cabbage, beans","Step 1: do this and that, Step 2: conitinue yon, Step 3: dinnae fash ", "../../../../assets/img/asdsasdasd", "../../../../assets/img/asdsasdasd", "fine ta, Italian, Pasta").subscribe((response: any) => {
      console.log(response)
    });
  }

}
