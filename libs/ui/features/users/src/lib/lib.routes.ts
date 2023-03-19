import { Route } from '@angular/router';
import { UserListPageComponent } from './users/feature/user-list-page/user-list-page.component';
import { UserDetailsComponent } from './users/feature/user-details/user-details.component';
import { inject } from '@angular/core';
import { UsersService } from './users/data-access/users.service';
import { UserResolver } from './users/data-access/user.resolver';

export const uiFeaturesUsersRoutes: Route[] = [
  { path: '', component: UserListPageComponent },
  {
    path: ':id',
    component: UserDetailsComponent,
    resolve: { user: UserResolver },
  },
];
