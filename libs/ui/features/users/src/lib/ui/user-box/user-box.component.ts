import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { UserModel } from '@test-repo-na/models';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'test-repo-na-user-box',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    RouterLink,
  ],
  templateUrl: './user-box.component.html',
  styleUrls: ['./user-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserBoxComponent {
  @Input() user: UserModel = {} as UserModel;
}
