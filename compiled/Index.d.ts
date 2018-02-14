import { LodestoneObject } from "./LodestoneObject";
export declare module Api {
    function getCharacter(fName: any, lName: any, world: any): Promise<LodestoneObject>;
}
export { Character as Character } from "./Character";
