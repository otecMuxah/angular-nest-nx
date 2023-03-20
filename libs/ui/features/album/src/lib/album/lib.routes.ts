import { Route } from '@angular/router';
import { AlbumComponent } from '@test-repo-na/ui/features/album';
import { AlbumResolver } from './data-access/album.resolver';

export const uiFeaturesAlbumRoutes: Route[] = [
  {
    path: ':id',
    component: AlbumComponent,
    resolve: { album: AlbumResolver },
    runGuardsAndResolvers: 'always',
  },
];
