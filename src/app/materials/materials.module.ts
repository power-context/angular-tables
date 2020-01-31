import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import * as Materials from "@angular/material";

const materialImport = [
  Materials.MatToolbarModule,
  Materials.MatGridListModule,
  Materials.MatInputModule,
  Materials.MatFormFieldModule,
  Materials.MatRadioModule,
  Materials.MatSelectModule,
  Materials.MatDatepickerModule,
  Materials.MatNativeDateModule,
  Materials.MatCheckboxModule,
  Materials.MatButtonModule
];

@NgModule({
  declarations: [],
  imports: [CommonModule, materialImport],
  exports: [materialImport]
})
export class MaterialsModule {}
