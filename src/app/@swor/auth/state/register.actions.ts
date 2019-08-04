import { User } from '../models/user.model';
import { Personnage } from '../models/personnage.model';
import { CreateUserDto } from '../dto/create-user.dto';

export class Register {
  static readonly type = '[Auth] Register';
  constructor(public payload: CreateUserDto) {}
}

// events

export class RegisterSuccess {
  static readonly type = '[Auth] Register Success';
  constructor(public user: User,
    public token: string,
    public expiresAt: number,
    public personnages: Personnage[]) {}
}

export class RegisterFailed {
  static readonly type = '[Auth] Register Failed';
  constructor(public error: any) {}
}
