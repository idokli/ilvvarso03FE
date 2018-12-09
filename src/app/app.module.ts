import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDialogModule, MatTooltipModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { IngredientsComponentComponent } from './components/ingredients-component/ingredients-component.component';
import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { RecipesComponentComponent } from './components/recipes-component/recipes-component.component';
import { IngredientsSearchComponentComponent } from './components/ingredients-search-component/ingredients-search-component.component';
import { RecipeComponentComponent } from './components/recipe-component/recipe-component.component';
import { RecipePopupComponent } from './components/recipe-popup/recipe-popup.component';
import { IngredientComponentComponent } from './components/ingredient-component/ingredient-component.component';
import { IngredientsInRecipeComponentComponent } from './components/ingredients-in-recipe-component/ingredients-in-recipe-component.component';
import {HttpClientModule} from '@angular/common/http';
import { LackIngredientsComponent } from './components/lack-ingredients/lack-ingredients.component';

@NgModule({
  declarations: [
    AppComponent,
    IngredientsComponentComponent,
    HeaderComponentComponent,
    RecipesComponentComponent,
    IngredientsSearchComponentComponent,
    RecipeComponentComponent,
    RecipePopupComponent,
    IngredientComponentComponent,
    IngredientsInRecipeComponentComponent,
    LackIngredientsComponent
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    MatTooltipModule
  ],
  exports: [
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [RecipePopupComponent]
})
export class AppModule { }
