import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webRequestService: WebRequestService) { }

  createRecipe(recipeName: string, difficulty: string, prepTime: string, cookTime: string, ingredients: string,
              instructions: string, imgURL: string, videoURL: string, tags: string) {
    // We want to send a web request to create a recipe
    return this.webRequestService.post('create-recipes', { recipeName, difficulty, prepTime, cookTime, ingredients,instructions, imgURL, videoURL, tags })
  }

  listRecipes() {
    return this.webRequestService.get('list-recipes');
  }

  deleteRecipe(uri: string) {
    return this.webRequestService.delete(`list-recipes/${uri}`);
  }

}
