import { Injectable } from '@angular/core';
import { ApiBaseService } from '@test-repo-na/ui/shared/services';
import { Observable } from 'rxjs';
import { UserModel } from '@test-repo-na/models';

@Injectable({ providedIn: 'root' })
export class UsersService {
  constructor(private api: ApiBaseService) {}

  getUsers(): Observable<UserModel[]> {
    return this.api.get<UserModel[]>('users');
  }
}
