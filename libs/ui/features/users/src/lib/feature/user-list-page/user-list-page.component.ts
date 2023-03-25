import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersService } from '../../data-access/users.service';
import { UserBoxComponent } from '../../ui/user-box/user-box.component';

@Component({
  selector: 'test-repo-na-users',
  standalone: true,
  imports: [CommonModule, UserBoxComponent],
  templateUrl: './user-list-page.component.html',
  styleUrls: ['./user-list-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListPageComponent {
  private readonly usersService = inject(UsersService);
  users$ = this.usersService.getUsers();
}
