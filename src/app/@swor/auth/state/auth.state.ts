import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Navigate } from '@ngxs/router-plugin';
import { AuthStateModel,
  LoginWithEmailAndPassword,
  LoginFailed,
  LoginSuccess,
  LoginRedirect,
  Logout,
  LogoutSuccess,
  TokenExpired } from './auth.actions';
import { Register, RegisterSuccess, RegisterFailed } from './register.actions';
import { AuthService } from '../auth.service';
import { User } from '../models/user.model';
import { Personnage } from '../models/personnage.model';
import { ChangeCurrentPersonnage } from './personnage.actions';
import * as _ from 'lodash';

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    status: false
  }
})
export class AuthState {

  @Selector() static token(state: AuthStateModel): string { return state.token; }
  @Selector() static user(state: AuthStateModel): User { return state.user; }
  @Selector() static expirationDate(state: AuthStateModel): number { return state.expiresAt; }
  @Selector() static isAuthenticated(state: AuthStateModel): boolean { return state.status; }
  @Selector() static personnages(state: AuthStateModel): Personnage[] { return state.personnages; }

  constructor(private authService: AuthService) {}

  @Action(Register)
  register(ctx: StateContext<AuthStateModel>, action: Register) {
    return this.authService.register(action.payload.email, action.payload.password).subscribe(
      (res: { token: string, user: User, expiresAt: number}) => {
        ctx.dispatch(new RegisterSuccess(res.user, res.token, res.expiresAt, res.user.personnages));
      },
      err => ctx.dispatch(new RegisterFailed(err))
    );
  }

  @Action(LoginWithEmailAndPassword)
  login(ctx: StateContext<AuthStateModel>, action: LoginWithEmailAndPassword) {
    return this.authService.login(action.payload.email, action.payload.password).subscribe(
      (res: { token: string, user: User, expiresAt: number, personnages: Personnage[] }) => {
        ctx.dispatch(new LoginSuccess(res.user, res.token, res.expiresAt, res.user.personnages));
      },
      error => ctx.dispatch(new LoginFailed(error))
    );
  }

  @Action(Logout)
  logout(ctx: StateContext<AuthStateModel>) {
    this.authService.logout().subscribe(
      () => console.log('logout successful'),
      error => console.log(error)
    );
    ctx.dispatch(new LogoutSuccess());
  }

  @Action([LoginSuccess, RegisterSuccess])
  onLoginSuccess(ctx: StateContext<AuthStateModel>) {
    console.log('Identification success for', ctx.getState());
    ctx.dispatch(new Navigate(['/home']));
  }

  @Action([LoginSuccess, RegisterSuccess])
  setUserStateOnSuccess(ctx: StateContext<AuthStateModel>, event: LoginSuccess|RegisterSuccess) {
    ctx.patchState({
      user: event.user,
      token: event.token,
      expiresAt: event.expiresAt,
      personnages: event.personnages,
      status: true
    });

    // Set current personnage as current in the front
    const currentPersonnage = _.filter(event.personnages, (item: Personnage) => item.active);
    const pj = currentPersonnage[0];
    ctx.dispatch(new ChangeCurrentPersonnage(pj));
  }

  @Action([LoginFailed, Logout, TokenExpired, RegisterFailed])
  setUserStateOnFailure(ctx: StateContext<AuthStateModel>) {
    ctx.setState({
      status: false
    });
    ctx.dispatch(new LoginRedirect());
  }

  @Action([LoginFailed, RegisterFailed])
  logErrors(ctx: StateContext<AuthStateModel>, event: LoginFailed|RegisterFailed) {
    console.log(event.error);
  }
}
