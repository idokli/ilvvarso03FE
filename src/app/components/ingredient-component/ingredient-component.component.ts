import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Ingredient} from "../../dataclasses/Ingredient";
import {AmountInMeasure} from "../ingredients-component/ingredients-component.component";

@Component({
  selector: 'app-ingredient-component',
  templateUrl: './ingredient-component.component.html',
  styleUrls: ['./ingredient-component.component.css']
})
export class IngredientComponentComponent {

  @Input()
  ingredient: Ingredient;

  @Output()
  amountInMeasure: EventEmitter<AmountInMeasure> = new EventEmitter<AmountInMeasure>();

  /**
   * Sets a new object {@link AmountInMeasure} to the EventEmitter with
   * {@link AmountInMeasure.amount} being 0.
   *
   * @since 12.11.2018
   * @author Lucas Larisch
   */
  deleteIngredient(): void {
    this.amountInMeasure.emit(new AmountInMeasure(0, null));
  }
}
