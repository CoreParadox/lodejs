import { LodestoneObject } from "./LodestoneObject";
export declare class CharacterQuery implements LodestoneObject {
    CharacterList: string[];
    FirstName: any;
    LastName: any;
    World: any;
    constructor(firstName: String, lastName: String, worldName: string);
    populate(data: string): this;
    readonly url: string;
}
