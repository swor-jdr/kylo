export class Track {
    static readonly type = '[Mixpanel] Track';
    constructor(public name: string, public action: any) {}
}

export class Init {
    static readonly type = '[Mixpanel] Initialize';
    constructor(public userToken: string) {}
}
