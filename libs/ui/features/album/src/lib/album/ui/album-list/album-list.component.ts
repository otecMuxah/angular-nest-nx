import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { AlbumModel } from '@test-repo-na/models';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CreateAlbumComponent } from '../create-album/create-album.component';
import { take } from 'rxjs';

@Component({
  selector: 'test-repo-na-album-list',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    RouterLink,
    MatButtonModule,
    RouterLinkActive,
    MatDialogModule,
  ],
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss'],
})
export class AlbumListComponent {
  @Input() albums: AlbumModel[] = [];
  @Output() reloadAlbum = new EventEmitter();
  constructor(private dialog: MatDialog) {}

  createAlbum() {
    this.dialog
      .open(CreateAlbumComponent)
      .beforeClosed()
      .pipe(take(1))
      .subscribe(() => this.reloadAlbum.emit());
  }
}
