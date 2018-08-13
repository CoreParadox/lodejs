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
            wName = this.properCase(wName)
            if(!wName) throw new Error("invalid world provided.");
            else return this.worlds[wName];
    }


    public populate(data: string) {
        this.worlds = this.getWorlds(data);
        console.log(this.worlds)
        return this;
    }

    private getWorlds(data){
        var worlds = {}; 
        var regex = new RegExp(RegexStatements.WorldQuery.Status, "g");
        var match = regex.exec(data)
        while (match != null) {
            worlds[this.properCase(match[1])] = match[2];
            match = regex.exec(data);
        }
        return worlds
    }

    private properCase(str){
        return str.substr(0,1).toUpperCase()+str.substr(1,str.length).toLowerCase()
    }
    
}


