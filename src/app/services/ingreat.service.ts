import {Injectable} from '@angular/core';
import {Recipe} from '../dataclasses/Recipe';
import {Ingredient} from '../dataclasses/Ingredient';
import {DifficultyLevel} from '../dataclasses/DifficultyLevel';
import {IngredientInRecipe} from '../dataclasses/IngredientInRecipe';
import {from, Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Product} from '../dataclasses/Product';
import {Supermarket} from '../dataclasses/Supermarket';

@Injectable({
  providedIn: 'root'
})
export class IngreatService {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'https://1d61324f.ngrok.io/api/';
  }

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

  reqRecipesByIngredients(ingredients: string[]): Observable<Recipe[]>{

    const myObservable = of([this.idoAuflauf(), this.victorSalat(), this.lucasTorte()]);
    // ingredients = ['zitrone', 'sahne', 'kartoffeln'];
    // return this.http.post<Recipe[]>(this.url + 'getRecipes', ingredients);
    return myObservable;
  }

  reqMeasuresOfIngredient(id: number): Observable<string[]> {
    return from([['kg','g']]);
  }

  // MOCK:

  private idoAuflauf(): Recipe {
    let recipe = new Recipe();
    recipe.id = 1;
    recipe.title = 'Idoauflauf';
    recipe.preparation = 'Man nehme ganz viel Mett und laufe auf. Hm lecker, guten Hunger!';
    recipe.preparationTimeInMin = 30;
    recipe.rate = 5;
    recipe.difficultyLevel = DifficultyLevel.DIFFICULT;
    recipe.pictureUrl = 'data:image/jpeg;base64,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';
    recipe.ingredientInRecipe = [
      this.allArgsIngredient(1, 28,'Mett', recipe, 2, 'kg'),
      this.allArgsIngredient(2,29, 'Petersilie', recipe, 50, 'g'),
      this.allArgsIngredient(3,30, 'Brezeln', recipe, 30, undefined)
    ];
    return recipe;
  }

  private victorSalat(): Recipe {
    let recipe = new Recipe();
    recipe.id = 2;
    recipe.title = 'Victorsalat';
    recipe.preparation = 'Ein Salat mit allem, was Victors Herz begehrt. Man nehme den Salat und werfe alles rein. Ein Gaumenschmaus.';
    recipe.preparationTimeInMin = 10;
    recipe.rate = 5;
    recipe.difficultyLevel = DifficultyLevel.EASY;
    recipe.pictureUrl = 'https://c1.staticflickr.com/1/155/345466164_e7ef07bf6a_z.jpg?zz=1';
    recipe.ingredientInRecipe = [
      this.allArgsIngredient(4,25, 'Eisbergsalat', recipe, 300, 'g'),
      this.allArgsIngredient(5,26, 'Toffifee', recipe, 30, 'Stück'),
      this.allArgsIngredient(6,27, 'Rosinen', recipe, 1, 'kg')
    ];
    return recipe;
  }

  private lucasTorte(): Recipe {
    let recipe = new Recipe();
    recipe.id = 3;
    recipe.title = 'Lucastorte';
    recipe.preparation = 'Ein Rezept, das Zeit in der Vorbereitung und beim Arbeiten selbst braucht. Und dann auch noch Zeit, um in der Ecke zu stehen. Ist das nicht schön? Ja, das ist nicht schön.';
    recipe.preparationTimeInMin = 10;
    recipe.rate = 1.4;
    recipe.difficultyLevel = DifficultyLevel.EASY;
    recipe.pictureUrl = 'https://upload.wikimedia.org/wikipedia/commons/b/be/Torte_Wien_20091010_01.JPG';
    recipe.ingredientInRecipe = [
      this.allArgsIngredient(7,22, 'Harzer Rolle', recipe, 1, 'kg'),
      this.allArgsIngredient(8,23, 'Sahne', recipe, 400, 'g'),
      this.allArgsIngredient(9,24, 'Mett', recipe, 1000, 'g')
    ];
    return recipe;
  }

  private allArgsIngredient (id: number, idIngredient: number, name: string, recipe: Recipe, quantity: number, measure:string): IngredientInRecipe {
    let ingredientInRecipe = new IngredientInRecipe();
    ingredientInRecipe.ingredient = new Ingredient(idIngredient,name);
    ingredientInRecipe.ingredient.products = [new Product("testProduct",Supermarket.REWE, 1.3)];
    ingredientInRecipe.id = id;
    ingredientInRecipe.recipe = recipe;
    ingredientInRecipe.quantity = quantity;
    ingredientInRecipe.measure = measure;
    return ingredientInRecipe;
  }

  private mockIngredients(): Ingredient[] {
    let ingredients: Ingredient[] = new Array<Ingredient>(21);
    ingredients[0] = new Ingredient(1,'Tomate');
    ingredients[1] = new Ingredient(2,'Banane');
    ingredients[2] = new Ingredient(3,'Mett');
    ingredients[3] = new Ingredient(4,'Rosinen');
    ingredients[4] = new Ingredient(5,'Wasser');
    ingredients[5] = new Ingredient(6,'Harzer Rolle');
    ingredients[6] = new Ingredient(7,'Schinken');
    ingredients[7] = new Ingredient(8,'Skyr');
    ingredients[8] = new Ingredient(9,'Avocado');
    ingredients[9] = new Ingredient(10,'Frischkäse');
    ingredients[10] = new Ingredient(11,'Brot');
    ingredients[11] = new Ingredient(12,'Brezel');
    ingredients[12] = new Ingredient(13,'Apfelmus');
    ingredients[13] = new Ingredient(14,'Apfel');
    ingredients[14] = new Ingredient(15,'Bier');
    ingredients[15] = new Ingredient(16,'Backpulver');
    ingredients[16] = new Ingredient(17,'Kartoffel');
    ingredients[17] = new Ingredient(18,'Rumpsteak');
    ingredients[18] = new Ingredient(19,'Orange');
    ingredients[19] = new Ingredient(20,'Mandarine');
    ingredients[20] = new Ingredient(21,'Ei');
    return ingredients;
  }

}

