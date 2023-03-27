import { UserModel } from '@test-repo-na/models';
import { UsersService } from './users.service';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { inject, Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserResolver implements Resolve<UserModel> {
  private readonly service = inject(UsersService);

  resolve(
    route: ActivatedRouteSnapshot
  ): Observable<UserModel> | Promise<UserModel> | UserModel {
    return this.service.getUser(route.paramMap.get('userId') || '');
  }
}
