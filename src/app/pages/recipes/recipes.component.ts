import { Component, OnInit, ViewChild } from '@angular/core';
import { TaskService } from 'src/app/task.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { NgbCarouselConfig, NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})
export class RecipesComponent implements OnInit {

  recipes: any[] | undefined;

  constructor(private taskService: TaskService, config: NgbCarouselConfig, private route: ActivatedRoute, private router: Router) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }

  showNavigationArrows = false;
  showNavigationIndicators = false;
  images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);

  ngOnInit(): void {
    this.taskService.listRecipes().subscribe((recipes: any) => {
      return this.recipes = recipes;
    });
  }

  modifyRecipe(uri: string) {
    this.router.navigateByUrl(`/modify-recipes/${uri}`);
  }
}
