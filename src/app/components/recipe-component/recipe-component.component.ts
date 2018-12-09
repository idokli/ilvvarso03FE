import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../../dataclasses/Recipe';
import {MatDialog} from '@angular/material';
import {RecipePopupComponent} from '../recipe-popup/recipe-popup.component';
import {IngredientInRecipe} from '../../dataclasses/IngredientInRecipe';


@Component({
  selector: 'app-recipe-component',
  templateUrl: './recipe-component.component.html',
  styleUrls: ['./recipe-component.component.css']
})
export class RecipeComponentComponent implements OnInit {

  @Input() recipe: Recipe;

  @Input() searchedIngredients: string[];

  fehlendeZustaten: IngredientInRecipe[] = [];

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.lackIngredients();
  }

  openDialog() {
    const dialogRef = this.dialog.open(RecipePopupComponent, {
      height: '400px',
      width: '600px',
      data: {recipe: this.recipe, fehlendeZustaten: this.fehlendeZustaten}
    });
  }

  lackIngredients(){
    for (const ingredientInRecipe of this.recipe.ingredientInRecipe) {
      if(!this.searchedIngredients.includes(ingredientInRecipe.ingredient.name)){
        this.fehlendeZustaten.push(ingredientInRecipe);
      }
    }
  }


}
