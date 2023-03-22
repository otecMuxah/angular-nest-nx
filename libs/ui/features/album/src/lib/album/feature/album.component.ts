import { Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumService } from '../data-access/album.service';
import { map, Observable, take } from 'rxjs';
import { Photo } from '@test-repo-na/models';
import { ActivatedRoute, Params } from '@angular/router';
import { PhotoComponent } from '../ui/photo/photo.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MyDataSource } from '../album.datasource';
import {
  CdkFixedSizeVirtualScroll,
  CdkVirtualForOf,
  CdkVirtualScrollViewport,
} from '@angular/cdk/scrolling';

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
})
export class AlbumComponent implements OnInit {
  @Input() albumId = '';
  albumService = inject(AlbumService);
  route = inject(ActivatedRoute);
  photos$!: Observable<Photo[]>;
  ds!: MyDataSource | null;

  ngOnInit(): void {
    this.photos$ = this.route.data.pipe(map((data) => data['album']));
    this.route.params.pipe().subscribe((param) => {
      if (this.ds) {
        this.ds.disconnect();
        this.ds = null;
      }
      this.ds = new MyDataSource(param['id'], this.albumService);
    });
  }
}
