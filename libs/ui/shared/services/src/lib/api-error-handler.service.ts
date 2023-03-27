import {
  HttpErrorResponse,
  HttpHandlerFn,
  HttpRequest,
} from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

export const ApiErrorHandlerInterceptor = (
  request: HttpRequest<any>,
  next: HttpHandlerFn
) => {
  const snack = inject(MatSnackBar);
  return next(request).pipe(
    catchError((error: HttpErrorResponse) => {
      snack.open(error.error.message || 'OOOPS, please refresh page');
      return throwError(error);
    })
  );
};
