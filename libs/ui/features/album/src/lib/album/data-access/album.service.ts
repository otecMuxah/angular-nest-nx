import { inject, Injectable } from '@angular/core';
import { ApiBaseService } from '@test-repo-na/ui/shared/services';
import { Observable } from 'rxjs';
import { PhotoModel } from '@test-repo-na/models';

@Injectable({ providedIn: 'root' })
export class AlbumService {
  api = inject(ApiBaseService);

  getAlbumPhotos(
    albumId: string,
    page?: string,
    pageSize?: string
  ): Observable<PhotoModel[]> {
    return this.api.get<PhotoModel[]>(
      'photos/album/' + albumId + '?page=' + page + '&pageSize=' + pageSize
    );
  }

  createAlbum(files: File[], userId: number, title: string) {
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append('files', files[i]);
    }
    formData.append('userId', String(userId));
    formData.append('title', title);

    return this.api.post('album', formData);
  }
}
