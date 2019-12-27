import { State, Action } from '@ngxs/store';
import { Track } from './mixpanel.actions';

@State<{}>({ name: 'mixpanel', defaults: {} })
export class MixpanelState {
    @Action(Track)
    track(ctx, event) {}
}

