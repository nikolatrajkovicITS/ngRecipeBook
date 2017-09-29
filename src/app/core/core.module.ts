import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { HeaderComponent } from '../core/header/header.component';
import { HomeComponent } from '../core/home/home.component';
import { AppRoutingModule } from '../app-routing.module';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { RecipeService } from '../recipes/recipe.service';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';

 
@NgModule({
    declarations: [
      HeaderComponent,
      HomeComponent  
    ],
    imports: [
      SharedModule,
      AppRoutingModule
    ],
    exports: [
        AppRoutingModule,
        HeaderComponent
    ],
    providers: [
        ShoppingListService, 
        RecipeService, 
        DataStorageService, 
        AuthService
    ]
})
export class CoreModule {

}