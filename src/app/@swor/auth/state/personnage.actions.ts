import { Personnage } from '../models/personnage.model';

// Actions

export interface PersonnageStateModel {
    personnage: Personnage;
}

export class ChangeCurrentPersonnage {
    static readonly type = '[Personnage] Change current';
    constructor(public personnage: Personnage) {}
}

// Events

export class ChangeCurrentPersonnageSuccess {
    static readonly type = '[Personnage] Change successful';
    constructor(personnage: Personnage) {}
}

export class ChangeCurrentPersonnageFailed {
    static readonly type = '[Personnage] Change failed';
    constructor(error: any) {}
}
