export class MetaTag {
    name: string;
    value: string;
    // Make tags differ between facebook og and others 
    isFacebook: boolean;

    constructor(name: string, value: string, isFacebook: boolean) {
        this.name = name;
        this.value = value;
        this.isFacebook = isFacebook;
    }
}
