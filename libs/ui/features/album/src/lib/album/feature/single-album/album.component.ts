import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumService } from '../../data-access/album.service';
import { ActivatedRoute } from '@angular/router';
import { PhotoComponent } from '../../ui/photo/photo.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PhotosDataSource } from '../../data-access/album.datasource';
import {
  CdkFixedSizeVirtualScroll,
  CdkVirtualForOf,
  CdkVirtualScrollViewport,
} from '@angular/cdk/scrolling';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'test-repo-na-album',
  standalone: true,
  imports: [
    CommonModule,
    PhotoComponent,
    MatCardModule,
    MatFormFieldModule,
    CdkVirtualForOf,
    CdkVirtualScrollViewport,
    CdkFixedSizeVirtualScroll,
  ],
  providers: [CdkVirtualScrollViewport],
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlbumComponent implements OnInit, OnDestroy {
  private readonly albumService = inject(AlbumService);
  private readonly route = inject(ActivatedRoute);
  private readonly cdr = inject(ChangeDetectorRef);
  ds!: PhotosDataSource | null;
  private readonly destroy$ = new Subject();

  ngOnInit(): void {
    this.route.params.pipe(takeUntil(this.destroy$)).subscribe((param) => {
      if (this.ds) {
        this.ds.disconnect();
        this.ds = null;
      }
      this.ds = new PhotosDataSource(param['albumId'], this.albumService);
      this.cdr.markForCheck();
    });
  }

  ngOnDestroy() {
    this.destroy$.next({});
    this.destroy$.complete();
  }
}
