import {DifficultyLevel} from "./DifficultyLevel";
import {IngredientInRecipe} from "./IngredientInRecipe";

export class Recipe {
  id: number;
  title: string;
  preparation: string;
  cookingTimeInMin: number;
  preparationTimeInMin: number;
  restingTimeInMin: number;
  rate: number;
  difficultyLevel: DifficultyLevel;
  pictureUrl: string;
  ingredientInRecipe: IngredientInRecipe[];
}
