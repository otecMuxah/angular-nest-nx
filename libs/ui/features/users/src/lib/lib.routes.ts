import { Route } from '@angular/router';
import { UserListPageComponent } from './feature/user-list-page/user-list-page.component';
import { UserDetailsComponent } from './feature/user-details/user-details.component';
import { UserResolver } from './data-access/user.resolver';
import { AlbumComponent } from '@test-repo-na/ui/features/album';

export const uiFeaturesUsersRoutes: Route[] = [
  { path: '', component: UserListPageComponent },
  {
    path: ':userId',
    component: UserDetailsComponent,
    resolve: { user: UserResolver },
    children: [
      {
        path: 'album/:albumId',
        component: AlbumComponent,
      },
    ],
  },
];
