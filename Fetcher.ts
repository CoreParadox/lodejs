import { LodestoneObject } from "./LodestoneObject";
import * as https from "https";
export default class Fetcher{
    Fetch<T>(object:LodestoneObject):Promise<LodestoneObject>{
        return new Promise((resolve, rej)=>{
            https.get(object.url, (res) => {
                var body = "";
                res.on("data", (chunk) => { body += chunk; })
                res.on("end", () => {
                    object.populate(body);
                    resolve(object);
                })
                res.on("error", rej);
            })
        });
    }
}
