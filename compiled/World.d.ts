import { Worlds } from "./Worlds";
import { LodestoneObject } from "./LodestoneObject";
export declare class WorldStatus implements LodestoneObject {
    private worlds;
    readonly url: string;
    getStatus(name: Worlds.AllWorlds): string;
    populate(data: string): this;
    private getWorlds;
    private properCase;
}
