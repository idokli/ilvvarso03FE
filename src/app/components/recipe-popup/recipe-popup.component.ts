import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Recipe} from '../../dataclasses/Recipe';

export interface DialogData {
  recipe: Recipe;
}

@Component({
  selector: 'app-recipe-popup',
  templateUrl: './recipe-popup.component.html',
  styleUrls: ['./recipe-popup.component.css']
})
export class RecipePopupComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<RecipePopupComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
