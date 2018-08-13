import { Worlds } from "./Worlds";
import { LodestoneObject } from "./LodestoneObject";
export declare class WorldStatus implements LodestoneObject {
    worlds: {};
    readonly url: string;
    getStatus(name: Worlds.AllWorlds): string;
    populate(data: string): this;
    private getWorlds;
}
