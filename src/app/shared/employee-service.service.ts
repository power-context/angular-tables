import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

interface Employee {
  $key?: string,
  fullName: string,
  email: string,
  mobile: string,
  city: string,
  gender: string,
  department: number,
  hireDate: string,
  isEmployee: boolean
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  constructor(private firebaseBD: AngularFireDatabase) { }

  employeeList: AngularFireList<Employee>;
  
  form: FormGroup = new FormGroup({
    $key: new FormControl('null'),
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    mobile: new FormControl('', [Validators.required, Validators.minLength(6)]),
    city: new FormControl(''),
    gender: new FormControl('1'),
    department: new FormControl('0'),
    hireDate: new FormControl(''),
    isEmployee: new FormControl(false)
  })

  initializeForm(){
    this.form.setValue({
      $key: 'null',
      fullName: '',
      email: '',
      mobile: '',
      city: '',
      gender: '1',
      department: '',
      hireDate: '',
      isEmployee: false
    }) 
  }

  getEmployees(){
    this.employeeList = this.firebaseBD.list('employee');

    return this.employeeList.snapshotChanges()
    /*
    .snapshotChanges().pipe(
      map(changes =>
      changes.map(c =>
      ({ key: c.payload.key, ...c.payload.val() })
      )
      )
      )
      */
  }

  addEmployee(employee: Employee){
    this.employeeList.push({
      fullName: employee.fullName,
      email: employee.email,
      mobile: employee.mobile,
      city: employee.city,
      gender: employee.gender,
      department: employee.department,
      hireDate: employee.hireDate,
      isEmployee: employee.isEmployee
    })
  }

  updateEmployee(employee: Employee){
    this.employeeList.update(employee.$key, {
      fullName: employee.fullName,
      email: employee.email,
      mobile: employee.mobile,
      city: employee.city,
      gender: employee.gender,
      department: employee.department,
      hireDate: employee.hireDate,
      isEmployee: employee.isEmployee
    })
  }


  removeEmployee($key: string){
    this.employeeList.remove($key)
  }
}
