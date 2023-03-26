import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { AlbumService } from '../../data-access/album.service';
import { FileUploadComponent } from '@test-repo-na/ui/shared/components';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { catchError, throwError } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'test-repo-na-create-album',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatChipsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatIconModule,
    FileUploadComponent,
    MatSnackBarModule,
    MatButtonModule,
  ],
  templateUrl: './create-album.component.html',
  styleUrls: ['./create-album.component.scss'],
})
export class CreateAlbumComponent {
  albumService = inject(AlbumService);
  snackbar = inject(MatSnackBar);
  dialog = inject(MatDialogRef);

  form = new FormGroup({
    title: new FormControl<string>(''),
    photos: new FormControl<File[]>([]),
  });

  createAlbum() {
    // have issue accessing userId from activated route
    const url = window.location.href;
    const regex = /users\/(\d+)\/album/;
    const match = url.match(regex);

    if (match) {
      const number = match[1];
      this.albumService
        .createAlbum(
          this.form.value.photos || [],
          +number,
          this.form.value.title || ''
        )
        .pipe(
          catchError((err) => {
            this.snackbar.open(err.error.message, 'close');
            return throwError(err);
          })
        )
        .subscribe(() => this.dialog.close());
    }
  }
}
