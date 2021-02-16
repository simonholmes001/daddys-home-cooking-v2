import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-rpage',
  templateUrl: './rpage.component.html',
  styleUrls: ['./rpage.component.scss']
})
export class RpageComponent implements OnInit {

  public recipes!: any
  dangerousVideoUrl: any;
  videoUrl: any;

  constructor(private taskService: TaskService, private route: ActivatedRoute) { }

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

}
