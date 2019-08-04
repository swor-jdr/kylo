import { User } from '../models/user.model';
import { Personnage } from '../models/personnage.model';

export class AuthStateModel {
  token?: string;
  user?: User;
  expiresAt?: number;
  status: boolean;
  personnages?: Personnage[];
}

// actions

export class CheckSession {
  static type = '[Auth] CheckSession';
}
​
export class LoginWithEmailAndPassword {
  static readonly type = '[Auth] Login';
  constructor(public payload: { email: string, password: string }) {}
}
​
export class Logout {
  static readonly type = '[Auth] Logout';
}

// Events

export class LogoutSuccess {
  static type = '[Auth] LogoutSuccess';
}

export class LoginRedirect {
  static type = '[Auth] LoginRedirect';
}

export class LoginSuccess {
  static type = '[Auth] LoginSuccess';
  constructor(public user: User,
    public token: string,
    public expiresAt: number,
    public personnages: Personnage[]) {}
}
export class LoginFailed {
  static type = '[Auth] LoginFailed';
  constructor(public error: any) {}
}

export class TokenExpired {
  static type = '[Auth] TokenExpired';
}
