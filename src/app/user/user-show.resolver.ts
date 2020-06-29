import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { IUser } from '../shared/models/i-user';
import { UserService } from '../shared/api/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserShowResolver implements Resolve<IUser> {

  constructor(
    private userService: UserService,
  ) { }

  resolve(route: ActivatedRouteSnapshot): Promise<IUser> {
    return this.userService.userInit(route.paramMap.get('userId'));
  }
}
