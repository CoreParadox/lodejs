import { LodestoneObject } from "./LodestoneObject";
import * as https from "https";

export default class ApiClient{
    Request(apiObject:LodestoneObject):Promise<LodestoneObject>{
        return new Promise((resolve, reject)=>{
            https.get(apiObject.url, r => {
                var body = "";
                r.on("data", (chunk) => { body += chunk; });
                r.on("end", _ => { apiObject.populate(body); resolve(apiObject); });
                r.on("error", reject);
            })
        });
    }
}
