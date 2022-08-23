import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { RouterEnum, UserService } from '../_index';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const user = this.userService.userValue;

    if (user) {
      if (
        route.data['roles'] &&
        route.data['roles'].indexOf(user.role) === -1
      ) {
        this.router.navigate([RouterEnum.HOME]);
        return false;
      }

      return true;
    }

    this.router.navigate([RouterEnum.LOGIN]);
    return false;
  }
}
