import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { distinctUntilChanged, switchMap} from "rxjs/operators";
import {Observable, Subject} from "rxjs";
import {Ingredient} from "../../dataclasses/Ingredient";
import {IngreatService} from "../../services/ingreat.service";

/**
 * Logic concerning the input field for adding ingredients.
 *
 * @since 05.11.2018
 * @author Lucas Larisch
 */
@Component({
  selector: 'app-ingredients-search-component',
  templateUrl: './ingredients-search-component.component.html',
  styleUrls: ['./ingredients-search-component.component.css']
})
export class IngredientsSearchComponentComponent implements OnInit{

  /**
   * Observable (Ingredient-array) for the list containing suggestions for ingredients matching
   * the entered search term.
   */
  ingredients$: Observable<Ingredient[]>;

  /** Subject for the search terms entered. */
  private searchTerms = new Subject<string>();

  /**
   * List of ingredients that have already been added to the
   * list of added ingredients. (Given in as an input)
   */
  @Input()
  registeredIngredients: Ingredient[];

  /**
   * EventEmitter holding an ingredient to be put out.
   */
  @Output()
  addedIngredient: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();

  /**
   * @param {IngreatService} ingreatService Service used for dynamically requesting ingredients.
   */
  constructor(
    private ingreatService: IngreatService
  ) {}

  /**
   * Starts a search based on the entered term.
   *
   * @since 05.11.2018
   * @author Lucas Larisch
   * @param {string} term Search term entered by the user.
   */
  search(term: string): void {
    this.searchTerms.next(term.trim());
  }

  /**
   * On initialization, the Observable containing ingredients matching
   * the entered search term is requested and piped.
   *
   * @since 05.11.2018
   * @author Lucas Larisch
   */
  ngOnInit(): void {
    this.ingredients$ = this.searchTerms.pipe(
      distinctUntilChanged(),
      switchMap((term: string) => this.ingreatService.searchIngredients(term)),
    );
  }

  /**
   * Resets both input field and loaded suggestions and adds a new ingredient
   * with the name put in by the user to the EventEmitter.
   *
   * @since 05.11.2018
   * @author Lucas Larisch
   * @param {string} ingredientName Name of the ingredient to be added.
   */
  addIngredient(ingredientName: string): void {
    // Clears input field / empty search for clearing the list:
    (<HTMLInputElement>document.getElementById("search")).value = "";
    this.search("");

    // Bind value to the output emitter:
    this.addedIngredient.emit(new Ingredient(ingredientName.trim()));
  }

  /**
   * Checks whether a string given in as a parameter is either empty or if not,
   * whether there is an ingredient saved in the list of all added ingredients
   * with a name matching the param.
   *
   * @since 05.11.2018
   * @author Lucas Larisch
   * @param {string} ingredientName Name of the ingredient to be checked.
   * @returns true if the checked string is either empty or already saved in the
   *          list containing added ingredients (name of the ingredient). Otherwise
   *          false.
   */
  isIngredientAlreadyAddedOrEmpty(ingredientName: string): boolean {
    // TODO: Extra method for empty string?
    // TODO: filer by "to lower case"?
    ingredientName = ingredientName.trim();
    if (ingredientName==="") {
      return true;
    } else {
      return this.registeredIngredients.map(
        ingredient => ingredient.name
      ).includes(ingredientName);
    }
  }

}
