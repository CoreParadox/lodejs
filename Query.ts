import {Worlds} from "./Worlds";
import {LodestoneObject} from "./LodestoneObject";
import { RegexStatements } from "./RegexStatements";

export default class CharacterQuery implements LodestoneObject{

    public CharacterList: string[] = []
    public FirstName;
    public LastName;
    public World;

    constructor(firstName:String,lastName:String,worldName:string){
        this.FirstName = firstName;
        this.LastName = lastName;
        this.World = Worlds.AllWorlds.find(a => a.toLowerCase() == worldName.toLowerCase());
        if(!this.World) throw new Error("invalid world provided.");
    }
    
    populate(data: string){
        var regex = new RegExp(RegexStatements.CharacterQuery.Entry,"g");
        var match = regex.exec(data)
        while (match != null) {
            this.CharacterList.push(match[1]);
            match = regex.exec(data);
        }
        return this;
    };

    get url(){
        return `https://na.finalfantasyxiv.com/lodestone/character/?q=${this.FirstName}+${this.LastName}&worldname=${this.World}`
    }
}


