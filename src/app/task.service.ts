import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webRequestService: WebRequestService) { }

  createRecipe(recipeName: string, difficulty: string, prepTime: string, cookTime: string, ingredients: string,
    step1: string, step2: string, step3: string, step4: string, step5: string, step6: string, step7: string, step8: string, step9: string, step10: string, imgURL: string, videoURL: string, additionalLinks: string, tags: string) {
    // We want to send a web request to create a recipe
    return this.webRequestService.post('create-recipes', { recipeName, difficulty, prepTime, cookTime, ingredients, step1, step2, step3, step4, step5, step6, step7, step8, step9, step10, imgURL, videoURL, additionalLinks, tags })
  }

  listRecipes() {
    return this.webRequestService.get('list-recipes');
  }

  deleteRecipe(uri: string) {
    return this.webRequestService.delete(`list-recipes/${uri}`);
  }

  getIndividualRecipes(_id: string) {
    return this.webRequestService.get(`modify-recipes/${_id}`);
  }

  updateRecipe(_id: string, recipeName: string, difficulty: string, prepTime: string, cookTime: string, ingredients: string, step1: string, step2: string, step3: string, step4: string, step5: string, step6: string, step7: string, step8: string, step9: string, step10: string, imgURL: string, videoURL: string, additionalLinks: string, tags: string) {
    return this.webRequestService.patch(`list-recipes/${_id}`, { recipeName, difficulty, prepTime, cookTime, ingredients, step1, step2, step3, step4, step5, step6, step7, step8, step9, step10, imgURL, videoURL, additionalLinks, tags });
  }

}
