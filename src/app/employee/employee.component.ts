import { Component, OnInit } from "@angular/core";
import { EmployeeServiceService } from "../shared/employee-service.service";
import { DepartmentService } from '../shared/department.service';
import { NotificationService } from '../shared/notification.service';

@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.css"]
})
export class EmployeeComponent implements OnInit {

  constructor(
    public service: EmployeeServiceService, 
    public departmentService: DepartmentService,
    public notificationService: NotificationService
    ) {}

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
    this.notificationService.success('Clear')
  }
}
