import Fetcher from "./Fetcher";
import CharacterQuery from "./Query";
import {Character} from "./Character";
import {LodestoneObject} from "./LodestoneObject";
const fetch = new Fetcher()

export module Api{
    
    export async function getCharacter(fName,lName,world){
        var result:CharacterQuery = <CharacterQuery>await fetch.Fetch(new CharacterQuery(fName,lName,world));
        return await fetch.Fetch(new Character(result.CharacterList[0])) 
    }   
    
}

export {Character as Character} from "./Character";