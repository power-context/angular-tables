import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Materials from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Materials.MatToolbarModule,
    Materials.MatGridListModule,
    Materials.MatInputModule,
    Materials.MatFormFieldModule,
    Materials.MatRadioModule
  ],
  exports: [
    Materials.MatToolbarModule,
    Materials.MatGridListModule,
    Materials.MatInputModule,
    Materials.MatFormFieldModule,
    Materials.MatRadioModule
  ]
})
export class MaterialsModule { }