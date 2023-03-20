import { Route } from '@angular/router';
import { UserListPageComponent } from './users/feature/user-list-page/user-list-page.component';
import { UserDetailsComponent } from './users/feature/user-details/user-details.component';
import { UserResolver } from './users/data-access/user.resolver';

export const uiFeaturesUsersRoutes: Route[] = [
  { path: '', component: UserListPageComponent },
  {
    path: ':id',
    component: UserDetailsComponent,
    resolve: { user: UserResolver },
    children: [
      {
        path: 'album',
        loadChildren: () =>
          import('@test-repo-na/ui/features/album').then(
            (x) => x.uiFeaturesAlbumRoutes
          ),
      },
    ],
  },
];
