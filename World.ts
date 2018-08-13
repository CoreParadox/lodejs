import { Worlds } from "./Worlds";
import { LodestoneObject } from "./LodestoneObject";
import { RegexStatements } from "./RegexStatements";

export class WorldStatus implements LodestoneObject {
    public worlds = {};
    
    get url() {
        return `https://na.finalfantasyxiv.com/lodestone/worldstatus/`
    }

    public getStatus(name:Worlds.AllWorlds): string{
            var wName = Worlds.AllWorlds.find(a => a.toLowerCase() == name.toLowerCase());
            if(!wName) throw new Error("invalid world provided.");
            else return this.worlds[name];
    }


    public populate(data: string) {
        this.worlds = this.getWorlds(data);
        return this;
    }

    private getWorlds(data){
        var worlds = {}; 
        var regex = new RegExp(RegexStatements.WorldQuery.Status, "g");
        var match = regex.exec(data)
        while (match != null) {
            worlds[match[1]] = match[2];
            match = regex.exec(data);
        }
        return worlds
    }
    
}


