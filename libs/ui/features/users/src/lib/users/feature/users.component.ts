import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersService } from '../data-access/users.service';

@Component({
  selector: 'test-repo-na-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent {
  users$ = this.usersService.getUsers();
  constructor(protected usersService: UsersService) {}
}
