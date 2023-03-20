import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ActivatedRoute,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { map, Observable } from 'rxjs';
import { MatCardModule } from '@angular/material/card';
import { AlbumComponent } from '@test-repo-na/ui/features/album';
import { UserModel } from '@test-repo-na/models';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'test-repo-na-user-details',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    AlbumComponent,
    RouterLink,
    RouterOutlet,
    MatFormFieldModule,
    RouterLinkActive,
    MatButtonModule,
  ],
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent {
  route = inject(ActivatedRoute);
  user$: Observable<UserModel> = this.route.data.pipe(
    map((data) => data['user'])
  );
}
