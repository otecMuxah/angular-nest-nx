import { UserModel } from '@test-repo-na/models';
import { UsersService } from './users.service';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserResolver implements Resolve<UserModel> {
  constructor(private service: UsersService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<UserModel> | Promise<UserModel> | UserModel {
    return this.service.getUser(route.paramMap.get('userId') || '');
  }
}
