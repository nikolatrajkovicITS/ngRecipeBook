import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test', 'http://www.seriouseats.com/images/2016/07/20160711-eggplant-recipes-roundup-06.jpg');
  ];

  constructor() { }

  ngOnInit() {
  }

}
