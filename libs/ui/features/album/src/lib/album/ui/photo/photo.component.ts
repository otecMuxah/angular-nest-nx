import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoModel } from '@test-repo-na/models';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { PhotoModalComponent } from '../photo-modal/photo-modal.component';

@Component({
  selector: 'test-repo-na-photo',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotoComponent {
  @Input() photo: PhotoModel = {} as PhotoModel;
  dialog = inject(MatDialog);

  open(photo: PhotoModel) {
    this.dialog.open(PhotoModalComponent, { data: photo });
  }
}
