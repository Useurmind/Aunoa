declare var Guid: any;

export class Pipeline {
    public Id: string;
    public Name: string;
    public Description: string;

    constructor() {
        this.Id = Guid.raw();
    }
}