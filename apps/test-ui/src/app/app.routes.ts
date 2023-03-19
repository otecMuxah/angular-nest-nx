import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'users',
    loadChildren: () =>
      import('@test-repo-na/ui/features/users').then(
        (x) => x.uiFeaturesUsersRoutes
      ),
  },
];
