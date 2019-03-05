import {Api} from "../Index";
import { Worlds } from "../Utilities/Worlds";

function TestCharacter(){
    Api.getCharacter("Donut","Steel","Goblin").then(console.log);
}

function TestStatus(){
    Api.getWorldStatus(Worlds.Aether.Goblin).then(console.log);
}

TestCharacter();
TestStatus();