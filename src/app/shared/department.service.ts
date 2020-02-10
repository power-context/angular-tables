import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  array = []
  departments: AngularFireList<any>;

  constructor(private firebaseBD: AngularFireDatabase) {
    this.departments = this.firebaseBD.list('departmens')

    this.departments.snapshotChanges().subscribe(list => {
      this.array = list.map(item => {
        return {
          $key: item.key,
          ...item.payload.val()
        }
      })
    })
  }

}
