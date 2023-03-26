import { Route } from '@angular/router';
import { AlbumComponent } from './feature/single-album/album.component';

export const uiFeaturesAlbumRoutes: Route[] = [
  {
    path: ':albumId',
    component: AlbumComponent,
  },
];
