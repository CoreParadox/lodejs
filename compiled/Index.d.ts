import { LodestoneObject } from "./LodestoneObject";
export declare module Api {
    function getCharacter(fName: any, lName: any, world: any): Promise<LodestoneObject>;
    function getWorldStatus(world: any): Promise<string>;
}
export { Character as Character } from "./Character";
