import ApiClient from "./ApiClient";
import {Character, CharacterQuery, WorldStatus} from "./Objects/";
const client = new ApiClient()

export module Api{
    
    export async function getCharacter(fName,lName,world){
        var result:CharacterQuery = await client.Request(new CharacterQuery(fName,lName,world)) as CharacterQuery;
        return await client.Request(new Character(result.CharacterList[0])) 
    }
    export async function getWorldStatus(world){
        var worlds = await client.Request(new WorldStatus()) as WorldStatus;
        return worlds.getStatus(world);
    } 
    
}