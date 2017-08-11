import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>()
  
    private ingredients: Ingredient[] = [             // This is our shopping list
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
    ];

    getIngredients() {
        return this.ingredients;
    }

    onIgredientAdded(ingredient: Ingredient) {
       this.ingredients.push(ingredient);
       this.ingredientsChanged.emit(this.ingredients.slice());  // Now we always have right ingredients array in the service and we inform our intresting components about the change in the event 
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    

}