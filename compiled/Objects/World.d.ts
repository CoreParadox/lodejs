import { LodestoneObject } from "./LodestoneObject";
import { Worlds } from "../Utilities";
export declare class WorldStatus implements LodestoneObject {
    private worlds;
    readonly url: string;
    getStatus(name: Worlds.AllWorlds): string;
    populate(data: string): this;
    private getWorlds;
    private properCase;
}
