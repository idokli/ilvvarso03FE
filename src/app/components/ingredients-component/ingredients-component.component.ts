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
  private registeredIngredients: Map<Ingredient, AmountInMeasure> = new Map<Ingredient, AmountInMeasure>();

  /**
   * Pushes an ingredient to the array containing all added
   * ingredients.
   *
   * @since 05.11.2018
   * @author Lucas Larisch
   * @param {Ingredient} ingredient Ingredient to be added.
   */
  onIngredientAdded(ingredient: Ingredient): void {
    this.registeredIngredients.set(ingredient, undefined);
  }

  /**
   * Method to change the amount in a measure of an ingredient. In case of the
   * amount being 0, the ingredient will be deleted from {@link registeredIngredients}.
   *
   * @since 12.11.2018
   * @author Lucas Larisch
   * @param $event Amount in a measure to be set for the ingredient.
   * @param ingredient The ingredient the amount of is to be changed.
   */
  onAmountChanged($event: AmountInMeasure, ingredient: Ingredient): void {
    if ($event.amount === 0) {
      this.registeredIngredients.delete(ingredient);
    } else {
      this.registeredIngredients.set(ingredient, $event);
    }
  }

  /**
   * Returns all added ingredients as array.
   *
   * @since 12.11.2018
   * @author Lucas Larisch
   * @returns {Ingredient[]} All added ingredients as array.
   */
  registeredIngredientsAsArray(): Ingredient[] {
      return Array.from(this.registeredIngredients.keys());
  }

}

/**
 * @since 12.11.2018
 * @author Lucas Larisch
 */
export class AmountInMeasure {

  constructor(amount?: number, measure?: string) {
    this.amount = amount;
    this.measure = measure;
  }

  amount: number;
  measure: string;
}
