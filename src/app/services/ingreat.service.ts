import {Injectable} from '@angular/core';
import {Recipe} from "../dataclasses/Recipe";
import {Ingredient} from "../dataclasses/Ingredient";
import {DifficultyLevel} from "../dataclasses/DifficultyLevel";
import {IngredientInRecipe} from "../dataclasses/IngredientInRecipe";

@Injectable({
  providedIn: 'root'
})
export class IngreatService {

  reqRecipesByIngredients(ingredients: Ingredient[]):Recipe[] {
    // HTTP
    // ?ingredients=
    // JSON.stringify(ingredients)
    // ...
    // return recipes returned from the server
    return [this.idoAuflauf(), this.victorSalat(), this.lucasTorte()];
  }

  private idoAuflauf(): Recipe {
    let recipe = new Recipe();
    recipe.id = 1;
    recipe.title = "Idoauflauf";
    recipe.preparation = "Man nehme ganz viel Mett und laufe auf. Hm lecker, guten Hunger!";
    recipe.cookingTimeInMin = 50;
    recipe.preparationTimeInMin = 30;
    recipe.rate = 5;
    recipe.difficultyLevel = DifficultyLevel.DIFFICULT;
    recipe.pictureUrl = "https://pixnio.com/free-images/food-and-drink/veggie-casserole-725x544.jpg";
    recipe.ingredientInRecipes = [
      this.allArgsIngredient(1, "Mett", recipe, 2, "kg"),
      this.allArgsIngredient(2, "Petersilie", recipe, 50, "g"),
      this.allArgsIngredient(3, "Brezeln", recipe, 30, undefined)
    ];
    return recipe;
  }

  private victorSalat(): Recipe {
    let recipe = new Recipe();
    recipe.id = 2;
    recipe.title = "Victorsalat";
    recipe.preparation = "Ein Salat mit allem, was Victors Herz begehrt. Man nehme den Salat und werfe alles rein. Ein Gaumenschmaus.";
    recipe.preparationTimeInMin = 10;
    recipe.rate = 5;
    recipe.difficultyLevel = DifficultyLevel.EASY;
    recipe.pictureUrl = "https://cdn.pixabay.com/photo/2017/11/20/09/43/sultanas-2964881_1280.jpg";
    recipe.ingredientInRecipes = [
      this.allArgsIngredient(4, "Eisbergsalat", recipe, 300, "g"),
      this.allArgsIngredient(5, "Toffifee", recipe, 30, "Stück"),
      this.allArgsIngredient(6, "Rosinen", recipe, 1, "kg")
    ];
    return recipe;
  }

  private lucasTorte(): Recipe {
    let recipe = new Recipe();
    recipe.id = 3;
    recipe.title = "Lucastorte";
    recipe.preparation = "Ein Rezept, das Zeit in der Vorbereitung und beim Arbeiten selbst braucht. Und dann auch noch Zeit, um in der Ecke zu stehen. Ist das nicht schön? Ja, das ist nicht schön.";
    recipe.preparationTimeInMin = 10;
    recipe.cookingTimeInMin = 20;
    recipe.restingTimeInMin = 20;
    recipe.rate = 1.4;
    recipe.difficultyLevel = DifficultyLevel.EASY;
    recipe.pictureUrl = "https://upload.wikimedia.org/wikipedia/commons/b/be/Torte_Wien_20091010_01.JPG";
    recipe.ingredientInRecipes = [
      this.allArgsIngredient(7, "Harzer Rolle", recipe, 1, "kg"),
      this.allArgsIngredient(8, "Sahne", recipe, 400, "g"),
      this.allArgsIngredient(9, "Mett", recipe, 1000, "g")
    ];
    return recipe;
  }

  private allArgsIngredient (id: number, name: string, recipe: Recipe, quantity: number, measure:string): IngredientInRecipe {
    let ingredientInRecipe = new IngredientInRecipe();
    let ingredient = new Ingredient();
    ingredient.name = name;
    ingredientInRecipe.id = id;
    ingredientInRecipe.ingredient = ingredient;
    ingredientInRecipe.recipe = recipe;
    ingredientInRecipe.quantity = quantity;
    ingredientInRecipe.measure = measure;
    return ingredientInRecipe;
  }

}

