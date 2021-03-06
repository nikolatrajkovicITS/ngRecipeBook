import { ShoppingListActions, ADD_INGREDIENT, ADD_INGREDIENTS } from './shopping-list.actions';
import * as ShippingListActions from './shopping-list.actions';

import { Action } from '@ngrx/store';
import { Ingredient } from '../../shared/ingredient.model';

const initialState = {
   ingredients: [
     new Ingredient('Apples', 5),
     new Ingredient('Tomatoes', 10),
   ]
}

export function shoppingListReducer(state = initialState, action: ShoppingListActions.ShoppingListActions) {
    switch (action.type) {
        case ShoppingListActions.ADD_INGREDIENT:
        return {
            ...state, 
            ingredients: [...state.ingredients, action.payload]
        };
        case ShoppingListActions.ADD_INGREDIENTS:
          return {
              ...state,
              ingredients: [...state.ingredients, ...action.payload]
          }
        default: 
        return state;
    }
}