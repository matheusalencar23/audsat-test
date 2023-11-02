import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private snackBar: MatSnackBar) {}

  open(message: string, type: 'success' | 'error'): void {
    this.snackBar.open(message, undefined, {
      horizontalPosition: 'start',
      verticalPosition: 'bottom',
      panelClass: `snackbar-${type}`,
      duration: 5000,
    });
  }
}
