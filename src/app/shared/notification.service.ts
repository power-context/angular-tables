import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(public snackBar: MatSnackBar) { }

  config: MatSnackBarConfig = {
    duration: 2000,
    horizontalPosition: 'right',
    verticalPosition: 'bottom'
  }

  success(msg){
    this.config['panelClass'] = ['notification', 'success']
    this.snackBar.open(msg, 'Close', this.config)
  }
}
