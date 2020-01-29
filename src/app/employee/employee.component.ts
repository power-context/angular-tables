import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../shared/employee-service.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public service: EmployeeServiceService) { }

  ngOnInit() {
  }

  submit(){
    
  }

}
