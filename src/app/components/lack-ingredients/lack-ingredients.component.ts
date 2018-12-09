import {Component, Input, OnInit} from '@angular/core';
import {IngredientInRecipe} from '../../dataclasses/IngredientInRecipe';

@Component({
  selector: 'app-lack-ingredients',
  templateUrl: './lack-ingredients.component.html',
  styleUrls: ['./lack-ingredients.component.css']
})
export class LackIngredientsComponent implements OnInit {

  @Input() ingredientsInRecipes: IngredientInRecipe[];

  @Input() fehlendeZutaten: string[];

  constructor() { }

  ngOnInit() {
  }

  getProductsForIngredients(ingredient:string){
    for (const ingredient of this.ingredientsInRecipes) {
    }
  }
}
