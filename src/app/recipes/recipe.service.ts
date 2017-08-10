import { Recipe } from './recipe.model';
export class RecipeService {
   private recipes: Recipe[] = [                        
      new Recipe('A Test Recipe', 'This is simply a test',
       'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
      new Recipe('Another Test Recipe', 'Carbonara Sphagetti',
       'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ];

  getRecipes() {
      return this.recipes.slice();     // slice() method serve to create copy of this "recipes" array to protect that array from direct access from outside
  }

}