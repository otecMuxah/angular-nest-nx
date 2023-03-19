import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiBaseService } from '@test-repo-na/ui/shared/services';
import { ENVIRONMENT, Environment } from '@test-repo-na/ui/shared/env';
import { UserModel } from '@test-repo-na/models';

/* eslint-disable */

@Component({
  selector: 'test-repo-na-nx-welcome',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ul>
        <li *ngFor="let item of users$ | async">{{item?.name}}</li>
    </ul>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {
  users$ = this.apiBaseService.get<UserModel[]>('users')
  constructor(@Inject(ENVIRONMENT) private env: Environment, protected apiBaseService: ApiBaseService) {
  }
}
