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
    let i1 = new Ingredient();
    i1.name = "Hallo";
    let i2 = new Ingredient();
    i2.name = "Angular";
    console.log(ingreatService.reqRecipesByIngredients([i1, i2]));
  }

}
