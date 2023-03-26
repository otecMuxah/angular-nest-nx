import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable, Subscription, take } from 'rxjs';
import { AlbumService } from './album.service';
import { PhotoModel } from '@test-repo-na/models';

export class PhotosDataSource extends DataSource<PhotoModel | undefined> {
  private _pageSize = 10;
  private _cachedData: PhotoModel[] = [];
  private _fetchedPages = new Set<number>();
  private _albumId = '';
  private readonly _dataStream = new BehaviorSubject<
    (PhotoModel | undefined)[]
  >(this._cachedData);
  private readonly _subscription = new Subscription();

  constructor(albumId: string, private albumService: AlbumService) {
    super();
    this._albumId = albumId;
    this._fetchPage(0);
  }

  connect(
    collectionViewer: CollectionViewer
  ): Observable<(PhotoModel | undefined)[]> {
    this._subscription.add(
      collectionViewer.viewChange.subscribe((range) => {
        const startPage = this._getPageForIndex(range.start);
        const endPage = this._getPageForIndex(range.end);
        for (let i = startPage; i <= endPage; i++) {
          this._fetchPage(i);
        }
      })
    );
    return this._dataStream;
  }

  disconnect(): void {
    this._subscription.unsubscribe();
  }

  private _getPageForIndex(index: number): number {
    return Math.floor(index / this._pageSize);
  }

  private _fetchPage(page: number) {
    if (this._fetchedPages.has(page)) {
      return;
    }
    this._fetchedPages.add(page);

    this.albumService
      .getAlbumPhotos(this._albumId, String(page), String(this._pageSize))
      .pipe(take(1))
      .subscribe((data) => {
        if (page === 0) {
          this._cachedData = data;
          this._dataStream.next(this._cachedData);
        } else {
          this._cachedData = [...this._cachedData, ...data];
          this._dataStream.next(this._cachedData);
        }
      });
  }
}
