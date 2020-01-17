import { State, Action, StateContext } from '@ngxs/store';
import { Track, Init } from './mixpanel.actions';
import * as mixpanel from 'mixpanel-browser';
import { environment } from '../../../environments/environment';

@State<{}>({ name: 'mixpanel', defaults: {} })
export class MixpanelState {
    @Action(Init)
    init(ctx: StateContext<{}>, event: Init) {
        mixpanel.init(environment.mixpanel.projectToken);
        mixpanel.identify(event.userToken);
    }

    @Action(Track)
    track(ctx: StateContext<{}>, event: Track) {
        mixpanel.track(event.name, event.action);
    }
}
