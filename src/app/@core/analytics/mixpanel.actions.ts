export class Track {
    static readonly type = '[Mixpanel] Track';
    constructor(public name: string, public action: any) {}
}
