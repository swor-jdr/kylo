import { Personnage } from './personnage.model';

export interface User {
  id?: number;
  email?: string;
  last_login_at?: Date;
  expiresAt?: number;
  created_at?: Date;
  updated_at?: Date;
  active_company?: number;
  personnages?: Personnage[];
}
