import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { Album } from '@test-repo-na/models';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CreateAlbumComponent } from '../create-album/create-album.component';

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
  @Input() albums: Album[] = [];
  constructor(private dialog: MatDialog) {}

  createAlbum() {
    this.dialog.open(CreateAlbumComponent);
  }
}
