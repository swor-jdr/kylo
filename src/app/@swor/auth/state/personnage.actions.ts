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
    constructor(public personnage: Personnage) {}
}

/**
 * Event when a personnage was changed by you
 * Triggered in order to ask the server to broadcast the change
 */
export class IChangedPersonnage {
    static readonly type = '[Personnage] Updated by me';
    constructor(public personnage: Personnage) {}
}

/**
 * Event when a personnage was changed by another people
 * Triggered when socket iis received
 */
export class PersonnageWasChanged {
    static readonly type = '[Personnage] Updated';
    constructor(public personnage: Personnage) {}
}

export class ChangeCurrentPersonnageFailed {
    static readonly type = '[Personnage] Change failed';
    constructor(public error: any) {}
}

export class PersonnageChangedSuccess {
    static readonly type = '[Personnage] Change success';
    constructor(public personnage: Personnage) {}
}
