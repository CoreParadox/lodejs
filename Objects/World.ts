import { LodestoneObject } from "./LodestoneObject";
import { RegexStatements, Worlds } from "../Utilities";

export class WorldStatus implements LodestoneObject {
    private worlds:object;
    
    get url() {
        return `https://na.finalfantasyxiv.com/lodestone/worldstatus/`
    }

    public getStatus(name:Worlds.AllWorlds): string{
        var wName = this.properCase(Worlds.AllWorlds.find(a => a.toLowerCase() == name.toLowerCase()));
        if(!wName) throw new Error("invalid world provided.");
        return this.worlds[wName];
    }


    public populate(data: string) {
        this.worlds = this.getWorlds(data);
        return this;
    }

    private getWorlds(data:string){
        var worlds = {}; 
        var regex = new RegExp(RegexStatements.WorldQuery.Status, "g");
        var match = regex.exec(data)
        while (match != null) {
            worlds[this.properCase(match[1])] = match[2];
            match = regex.exec(data);
        }
        return worlds
    }

    private properCase = (str:string) => str.substr(0,1).toUpperCase()+str.substr(1,str.length).toLowerCase()
}


