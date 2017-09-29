import { HomeComponent } from './core/home/home.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';


const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'recipe', loadChildren: './recipes/recipe.module#RecipesModule'}, // Now whenever we visit /recipe path, it will dynamically load the recipes module!
    { path: 'shopping-list', component: ShoppingListComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { 
    
  }