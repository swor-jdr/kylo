import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Personnage } from '../models/personnage.model';
import {
    PersonnageStateModel,
    ChangeCurrentPersonnage,
    ChangeCurrentPersonnageSuccess,
    ChangeCurrentPersonnageFailed } from './personnage.actions';
import { PersonnageService } from '../services/personnage.service';
import { LogoutSuccess } from './auth.actions';
import { IChangedPersonnage, PersonnageWasChanged } from './personnage.actions';
import { isNull } from 'util';

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

    @Action(IChangedPersonnage)
    updatePersonnage(ctx: StateContext<PersonnageStateModel>, event: IChangedPersonnage) {
        if (event.personnage) {
            this.personnageS.updatePersonnage(event.personnage).subscribe(
                (pj) => {
                    ctx.patchState({
                        personnage: pj
                    });
                },
                err => console.log(err)
            );
        }
    }

    @Action(PersonnageWasChanged)
    updatedPersonnageFromElsewhere(ctx: StateContext<PersonnageStateModel>, event: PersonnageWasChanged) {
        if(event.personnage) {
            const current = ctx.getState().personnage;
            if (!isNull(current) && current.id === event.personnage.id) {
                ctx.patchState({
                    personnage: event.personnage
                });
            }
        }
    }
}
