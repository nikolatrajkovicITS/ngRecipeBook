import { NgModule } from '@angular/core';
import { RecipesComponent } from './recipes.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { AuthGard } from '../auth/auth-guard.service';
import { Routes, RouterModule } from '@angular/router';

const recipesRoutes: Routes = [
    { path: '', component: RecipesComponent, children: [
        { path: '', component: RecipeStartComponent },
        { path: 'new', component: RecipeEditComponent, canActivate: [AuthGard] }, 
        { path: ':id', component: RecipeDetailComponent },
        { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGard] }
      ] },
];

@NgModule({
    imports: [
        RouterModule.forChild(recipesRoutes)              // we must use "forChild" cus we are not on root routing module, we are on child.
    ],
    exports: [RouterModule]
})
export class RecipesRoutingModule { }