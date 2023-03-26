import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ActivatedRoute,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { map, Observable, switchMap } from 'rxjs';
import { MatCardModule } from '@angular/material/card';
import { UserModel } from '@test-repo-na/models';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { AlbumListComponent } from '@test-repo-na/ui/features/album';
import { CreateAlbumComponent } from '../../../../../album/src/lib/album/ui/create-album/create-album.component';
import { UsersService } from '../../data-access/users.service';

@Component({
  selector: 'test-repo-na-user-details',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    RouterLink,
    RouterOutlet,
    MatFormFieldModule,
    RouterLinkActive,
    MatButtonModule,
    AlbumListComponent,
    CreateAlbumComponent,
  ],
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent {
  route = inject(ActivatedRoute);
  userService = inject(UsersService);
  user$: Observable<UserModel> = this.route.data.pipe(
    map((data) => data['user'])
  );

  reloadAlbum() {
    this.user$ = this.route.params.pipe(
      switchMap((params) => {
        return this.userService.getUser(params['userId']);
      })
    );
  }
}
