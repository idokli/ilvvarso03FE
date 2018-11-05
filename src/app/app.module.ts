import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IngredientsComponentComponent } from './components/ingredients-component/ingredients-component.component';
import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { RecipesComponentComponent } from './components/recipes-component/recipes-component.component';
import { IngredientsSearchComponentComponent } from './components/ingredients-search-component/ingredients-search-component.component';

@NgModule({
  declarations: [
    AppComponent,
    IngredientsComponentComponent,
    HeaderComponentComponent,
    RecipesComponentComponent,
    IngredientsSearchComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
