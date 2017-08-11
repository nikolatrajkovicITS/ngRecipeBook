import { RecipeService } from './recipe.service';
import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [ RecipeService ]
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private recipseService: RecipeService) { }

  ngOnInit() {
    this.recipseService.recipeSelected    // On recipeSelected we can subscribe, and get informed about any changes.
       .subscribe(
         (recipe: Recipe) => {
           this.selectedRecipe = recipe;
         }
       );
  }
}
