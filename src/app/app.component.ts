import { Component } from '@angular/core';
import {IngreatService} from "./services/ingreat.service";
import {Ingredient} from "./dataclasses/Ingredient";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ilvvarso03FE';

  constructor(
    private ingreatService: IngreatService
  ) {
    console.log(ingreatService.reqRecipesByIngredients([new Ingredient("Hallo"), new Ingredient("Angular")]));
  }

}
