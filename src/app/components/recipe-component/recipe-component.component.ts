import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../../dataclasses/Recipe';
import {MatDialog} from '@angular/material';
import {RecipePopupComponent} from '../recipe-popup/recipe-popup.component';


@Component({
  selector: 'app-recipe-component',
  templateUrl: './recipe-component.component.html',
  styleUrls: ['./recipe-component.component.css']
})
export class RecipeComponentComponent implements OnInit {

  @Input() recipe: Recipe;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(recipe: Recipe) {
    const dialogRef = this.dialog.open(RecipePopupComponent, {
      width: '250px',
      data: {recipe: recipe}
    });
  }
}
