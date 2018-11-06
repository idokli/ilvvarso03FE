import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../../dataclasses/Recipe';
import {IngreatService} from '../../services/ingreat.service';

@Component({
  selector: 'app-recipes-component',
  templateUrl: './recipes-component.component.html',
  styleUrls: ['./recipes-component.component.css']
})
export class RecipesComponentComponent implements OnInit {

  @Input() recipes: Recipe[];

  constructor( private ingreatService: IngreatService) { }

  ngOnInit() {
    this.recipes = this.ingreatService.reqRecipesByIngredients(null);
  }

}
