import { ErrorHandler, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private snack: MatSnackBar) {}

  handleError(error: ErrorEvent) {
    this.snack.open(
      error?.error?.message ||
        'Something went wrong, please try to refresh page'
    );
  }
}
