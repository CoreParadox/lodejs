import { LodestoneObject } from "./LodestoneObject";
export default class CharacterQuery implements LodestoneObject {
    private id;
    CharacterList: string[];
    FirstName: any;
    LastName: any;
    World: any;
    constructor(firstName: String, lastName: String, worldName: string);
    populate(data: string): this;
    readonly url: string;
}
