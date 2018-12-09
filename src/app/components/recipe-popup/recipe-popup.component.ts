import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Recipe} from '../../dataclasses/Recipe';

export interface DialogData {
  recipe: Recipe;
  fehlendeZustaten: string[];
}

@Component({
  selector: 'app-recipe-popup',
  templateUrl: './recipe-popup.component.html',
  styleUrls: ['./recipe-popup.component.css']
})
export class RecipePopupComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<RecipePopupComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  recipe: Recipe;

  ngOnInit() {
    this.recipe = this.data.recipe;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
