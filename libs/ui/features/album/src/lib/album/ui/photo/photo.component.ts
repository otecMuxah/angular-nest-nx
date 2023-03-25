import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Photo } from '@test-repo-na/models';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { PhotoModalComponent } from '../photo-modal/photo-modal.component';

@Component({
  selector: 'test-repo-na-photo',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss'],
})
export class PhotoComponent {
  @Input() photo: Photo = {} as Photo;
  dialog = inject(MatDialog);

  open(photo: Photo) {
    this.dialog.open(PhotoModalComponent, { data: photo });
  }
}
