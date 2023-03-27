import { bootstrapApplication } from '@angular/platform-browser';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
  withRouterConfig,
} from '@angular/router';
import { AppComponent } from './app/app.component';
import { appRoutes } from './app/app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ENVIRONMENT } from '@test-repo-na/ui/shared/env';
import { environment } from './environment/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorHandler, importProvidersFrom } from '@angular/core';
import {
  ApiErrorHandlerInterceptor,
  GlobalErrorHandler,
} from '@test-repo-na/ui/shared/services';
import { MatSnackBarModule } from '@angular/material/snack-bar';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(
      appRoutes,
      withEnabledBlockingInitialNavigation(),
      withRouterConfig({
        paramsInheritanceStrategy: 'always',
      })
    ),
    provideHttpClient(withInterceptors([ApiErrorHandlerInterceptor])),
    { provide: ENVIRONMENT, useValue: environment },
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler,
    },
    importProvidersFrom(BrowserAnimationsModule),
    importProvidersFrom(MatSnackBarModule),
  ],
}).catch((err) => console.error(err));
