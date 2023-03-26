import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { AlbumService } from '../../data-access/album.service';
import { Photo } from '@test-repo-na/models';
import { FileUploadComponent } from '../../../../../../../shared/components/src/lib/file-upload/file-upload.component';
import { ActivatedRoute } from '@angular/router';
import { filter, map, switchMap } from 'rxjs';

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
  ],
  templateUrl: './create-album.component.html',
  styleUrls: ['./create-album.component.scss'],
})
export class CreateAlbumComponent {
  page = 0;
  route = inject(ActivatedRoute);

  form = new FormGroup({
    name: new FormControl(''),
    photos: new FormControl<File[]>([]),
  });
  constructor(private albumService: AlbumService) {
    this.form.valueChanges.subscribe((data) => {
      console.log(data, this.route);
    });
    this.route.params.subscribe((data) => {
      console.log(data);
    });
  }

  createAlbum() {
    this.route.params
      .pipe(
        map((param) => {
          debugger;
          const x = param['userId'];
          return 2;
        }),
        filter(Boolean),
        switchMap((id) =>
          this.albumService.createAlbum(
            this.form.value.photos || [],
            +id,
            this.form.value.name || ''
          )
        )
      )
      .subscribe((data) => {
        console.log(data);
      });
  }

  remove(fruit: Photo) {
    console.log(fruit);
  }
}
