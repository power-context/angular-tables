import { Component, OnInit } from "@angular/core";
import { EmployeeServiceService } from "../shared/employee-service.service";

@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.css"]
})
export class EmployeeComponent implements OnInit {
  departments: any[] = [
    { id: 1, value: "Dep 1" },
    { id: 2, value: "Dep 2" },
    { id: 3, value: "Dep 3" }
  ];

  constructor(public service: EmployeeServiceService) {}

  ngOnInit() {
    this.service.getEmployees()
  }

  onSubmit() {
    if(this.service.form.valid){
      this.service.addEmployee(this.service.form.value)
    }
    this.service.form.reset()
      this.service.initializeForm()
  }

  clearForm(){
    this.service.form.reset()
    this.service.initializeForm()
  }
}
