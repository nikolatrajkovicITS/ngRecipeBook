import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;   // to get the recipe from outside or any data from outside, we need to add Decorator @Input()
  @Output() recipeSelected = new EventEmitter<void>();
  
  constructor() { }

  ngOnInit() {
  }

  onSelected() {
    this.recipeSelected.emit();
  }

}
