import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as moment from 'moment';
import { LoginRedirect, TokenExpired } from './state/auth.actions';
import { AuthState } from './state/auth.state';

@Injectable()
export class AuthenticatedGuard implements CanActivate {

  constructor(private store: Store) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return (this.checkIfUserLoggedIn() && this.checkIfTokenExpired());
  }

  private checkIfUserLoggedIn(): Observable<boolean> | Promise<boolean> | boolean {
    return this.store.selectOnce(AuthState.user).pipe(
      map(u => {
        if (!u) {
          this.store.dispatch(new LoginRedirect());
          return false;
        }
        return true;
      })
    );
  }

  private checkIfTokenExpired(): Observable<boolean> | Promise<boolean> | boolean {
    return this.store.selectOnce(AuthState.expirationDate).pipe(
      map(date => {
        if (!date || moment().isAfter(date)) {
          this.store.dispatch(new TokenExpired());
          return false;
        }
        return true;
      })
    );
  }
}
