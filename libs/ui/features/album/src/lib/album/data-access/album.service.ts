import { inject, Injectable } from '@angular/core';
import { ApiBaseService } from '@test-repo-na/ui/shared/services';
import { Observable } from 'rxjs';
import { Photo } from '@test-repo-na/models';

@Injectable({ providedIn: 'root' })
export class AlbumService {
  api = inject(ApiBaseService);
  getAlbumPhotos(
    albumId: string,
    page?: string,
    pageSize?: string
  ): Observable<Photo[]> {
    return this.api.get<Photo[]>(
      'photos/album/' + albumId + '?page=' + page + '&pageSize=' + pageSize
    );
  }
}