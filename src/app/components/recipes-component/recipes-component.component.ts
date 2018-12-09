import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../../dataclasses/Recipe';
import {IngreatService} from '../../services/ingreat.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-recipes-component',
  templateUrl: './recipes-component.component.html',
  styleUrls: ['./recipes-component.component.css']
})
export class RecipesComponentComponent implements OnInit {

  @Input() searchedIngredients: string[];

  recipes: Recipe[];

  constructor( private ingreatService: IngreatService) { }

  ngOnInit() {
    this.ingreatService.reqRecipesByIngredients(null).subscribe( data => {
    // this.ingreatService.reqRecipesByIngredients(searchedIngredients).subscribe( data => {
      this.recipes = data;
    }, (error: HttpErrorResponse) => {
      console.log(`Backend returned code ${error.status}, body was: ${error.error}`);
    });

    //TODO remove this line after the api works
    this.searchedIngredients = ['Mett', 'Petersilie','Brezeln'];
  }

}
