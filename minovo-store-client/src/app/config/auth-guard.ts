import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, pipe } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { UserState } from '../model/user.model';
export declare type AuthPipeGenerator = (
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => AuthPipe;
export declare type AuthPipe = Observable<boolean | string | any[]>;

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private auth: AuthService) {}
  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    //check auth state..
    return this.auth
      .userState()
      .then((state: UserState) => {
        if (state?.isLoggedIn) return true;
        this.router.navigate(['auth']);
        return false;
      })
      .catch((err) => {
        console.log('err:', err);
        this.router.navigate(['auth']);
        return false;
      });
  }
}
