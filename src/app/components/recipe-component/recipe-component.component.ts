import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../../dataclasses/Recipe';
import {MatDialog} from '@angular/material';
import {RecipePopupComponent} from '../recipe-popup/recipe-popup.component';


@Component({
  selector: 'app-recipe-component',
  templateUrl: './recipe-component.component.html',
  styleUrls: ['./recipe-component.component.css']
})
export class RecipeComponentComponent implements OnInit {

  @Input() recipe: Recipe;

  fehlendeZustaten: string[];

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.howManyIngredientsLack(null);
  }

  openDialog() {
    const dialogRef = this.dialog.open(RecipePopupComponent, {
      height: '400px',
      width: '600px',
      data: {recipe: this.recipe, fehlendeZustaten: this.fehlendeZustaten}
    });
  }

  howManyIngredientsLack(searchedIngredients: string[]){
    searchedIngredients = ['Mett', 'Petersilie','Brezeln'];
    let ingredientsNames = [];
    for (const argument of this.recipe.ingredientInRecipe) {
      ingredientsNames.push(argument.ingredient.name);
    }
    this.fehlendeZustaten = this.removeFromArray(ingredientsNames, searchedIngredients);
  }

  removeFromArray(original, remove):string[] {
    return original.filter(value => !remove.includes(value));
  }
}
