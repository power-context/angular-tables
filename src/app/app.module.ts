import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeeComponent } from './employee/employee.component';
import { MaterialsModule } from './materials/materials.module';
import { EmployeeServiceService } from './shared/employee-service.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesListComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    MaterialsModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [EmployeeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
