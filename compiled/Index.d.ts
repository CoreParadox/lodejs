export declare module Api {
    function getCharacter(fName: any, lName: any, world: any): Promise<import("./Objects/LodestoneObject").LodestoneObject>;
    function getWorldStatus(world: any): Promise<string>;
}
