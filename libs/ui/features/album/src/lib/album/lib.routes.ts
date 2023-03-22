import { Route } from '@angular/router';
import { AlbumComponent } from './feature/album.component';

export const uiFeaturesAlbumRoutes: Route[] = [
  {
    path: ':id',
    component: AlbumComponent,
  },
];
