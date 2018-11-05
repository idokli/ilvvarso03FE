import { Component } from '@angular/core';
import {Ingredient} from "../../dataclasses/Ingredient";

/**
 * Logic concerning the ingredients-list.
 *
 * @since 05.11.2018
 * @author Lucas Larisch
 */
@Component({
  selector: 'app-ingredients-component',
  templateUrl: './ingredients-component.component.html',
  styleUrls: ['./ingredients-component.component.css']
})
export class IngredientsComponentComponent {

  /** List containing all ingredients the user has added. */
  registeredIngredients: Ingredient[] = Array<Ingredient>();

  /**
   * Pushes an ingredient to the array containing all added
   * ingredients.
   *
   * @since 05.11.2018
   * @author Lucas Larisch
   * @param {Ingredient} ingredient Ingredient to be added.
   */
  onIngredientAdded(ingredient: Ingredient): void {
    this.registeredIngredients.push(ingredient);
  }

  /**
   * Deletes an ingredient from the list containing all added
   * ingredients.
   *
   * @since 05.11.2018
   * @author Lucas Larisch
   * @param {Ingredient} ingredient Ingredient to be deleted.
   */
  deleteIngredient(ingredient: Ingredient): void {
    const index: number = this.registeredIngredients.indexOf(ingredient);
    this.registeredIngredients.splice(index, 1);
  }

}
