import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { Component, InjectionToken } from '@angular/core';
import { ENVIRONMENT } from '../environment/environment.token';
import { environment } from '../environment/environment';

export const ENV = new InjectionToken('ENV');
@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule],
  selector: 'test-repo-na-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [{ provide: ENVIRONMENT, useValue: environment }],
})
export class AppComponent {
  title = 'test-ui';
}
