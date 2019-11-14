import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Personnage } from '../models/personnage.model';
import {
    PersonnageStateModel,
    ChangeCurrentPersonnage,
    ChangeCurrentPersonnageSuccess,
    ChangeCurrentPersonnageFailed } from './personnage.actions';
import { PersonnageService } from '../services/personnage.service';
import { LogoutSuccess } from './auth.actions';

@State<PersonnageStateModel>({
    name: 'personnage',
    defaults: {
        personnage: null
    }
})
export class PersonnageState {
    constructor(private personnageS: PersonnageService) {}

    @Selector() static personnage(state: PersonnageStateModel): Personnage { return state.personnage as Personnage; }

    @Action(ChangeCurrentPersonnage)
    changeCurrentPersonnage(ctx: StateContext<PersonnageStateModel>, event: ChangeCurrentPersonnage) {
        if (event.personnage) {
            this.personnageS.change(event.personnage).subscribe(
                () => {
                    ctx.patchState({
                        personnage: event.personnage
                    });
                    ctx.dispatch(new ChangeCurrentPersonnageSuccess(event.personnage));
                },
                (error) => ctx.dispatch(new ChangeCurrentPersonnageFailed(error))
            );
        }
    }

    @Action(LogoutSuccess)
    resetCurrent(ctx: StateContext<PersonnageStateModel>) {
        ctx.setState({
            personnage: null
        });
    }
}