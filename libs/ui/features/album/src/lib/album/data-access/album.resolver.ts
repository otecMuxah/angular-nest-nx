import { Photo } from '@test-repo-na/models';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AlbumService } from './album.service';

@Injectable({ providedIn: 'root' })
export class AlbumResolver implements Resolve<Photo[]> {
  constructor(private service: AlbumService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Photo[]> | Promise<Photo[]> | Photo[] {
    return this.service.getAlbumPhotos(route.paramMap.get('id') || '');
  }
}
