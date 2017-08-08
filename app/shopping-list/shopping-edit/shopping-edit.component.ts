import { Ingredient } from '../../../src/app/shared/ingredient.model';
import { Component, EventEmitter, OnInit, Output, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() IngredientAdded = new EventEmitter<Ingredient>();   // Add output a front of Event to we can listen to it from outside

  constructor() { }

  ngOnInit() {
  }

  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;   // use constant instead of let cus we don't want to change these vars
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.IngredientAdded.emit(newIngredient);  // emit event and pass a newIngredeint as a data
  }

}
