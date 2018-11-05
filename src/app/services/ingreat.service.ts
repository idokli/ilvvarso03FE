import {Injectable} from '@angular/core';
import {Recipe} from "../dataclasses/Recipe";
import {Ingredient} from "../dataclasses/Ingredient";
import {DifficultyLevel} from "../dataclasses/DifficultyLevel";
import {IngredientInRecipe} from "../dataclasses/IngredientInRecipe";
import {from, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class IngreatService {

  searchIngredients(term: string): Observable<Ingredient[]> {
    if (!term.trim()) {
      return of([]);
    }
    return from(
      [
        this.mockIngredients().filter(
        ingredient => ingredient.name.toLowerCase().includes(term.toLowerCase())
        )
      ]
    );
  }

  reqRecipesByIngredients(ingredients: Ingredient[]):Recipe[] {
    // HTTP
    // ?ingredients=
    // JSON.stringify(ingredients)
    // ...
    // return recipes returned from the server
    return [this.idoAuflauf(), this.victorSalat(), this.lucasTorte()];
  }

  // MOCK:

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
    ingredientInRecipe.ingredient = new Ingredient(name);
    ingredientInRecipe.id = id;
    ingredientInRecipe.recipe = recipe;
    ingredientInRecipe.quantity = quantity;
    ingredientInRecipe.measure = measure;
    return ingredientInRecipe;
  }

  private mockIngredients(): Ingredient[] {
    let ingredients: Ingredient[] = new Array<Ingredient>(20);
    ingredients[0] = new Ingredient("Tomate");
    ingredients[1] = new Ingredient("Banane");
    ingredients[2] = new Ingredient("Mett");
    ingredients[3] = new Ingredient("Rosinen");
    ingredients[4] = new Ingredient("Wasser");
    ingredients[5] = new Ingredient("Harzer Rolle");
    ingredients[6] = new Ingredient("Schinken");
    ingredients[7] = new Ingredient("Skyr");
    ingredients[8] = new Ingredient("Avocado");
    ingredients[9] = new Ingredient("Frischkäse");
    ingredients[10] = new Ingredient("Brot");
    ingredients[11] = new Ingredient("Brezel");
    ingredients[12] = new Ingredient("Apfelmus");
    ingredients[13] = new Ingredient("Apfel");
    ingredients[14] = new Ingredient("Bier");
    ingredients[15] = new Ingredient("Backpulver");
    ingredients[16] = new Ingredient("Kartoffel");
    ingredients[17] = new Ingredient("Rumpsteak");
    ingredients[18] = new Ingredient("Orange");
    ingredients[19] = new Ingredient("Mandarine");
    return ingredients;
  }

}

