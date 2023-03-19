import { bootstrapApplication } from '@angular/platform-browser';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { AppComponent } from './app/app.component';
import { appRoutes } from './app/app.routes';
import { provideHttpClient } from '@angular/common/http';
import { ENVIRONMENT } from '../../../libs/ui/shared/env/src/lib/environment.token';
import { environment } from './environment/environment';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
    provideHttpClient(),
    { provide: ENVIRONMENT, useValue: environment },
  ],
}).catch((err) => console.error(err));
