import { LodestoneObject } from "./LodestoneObject";
export default class ApiClient {
    Request(apiObject: LodestoneObject): Promise<LodestoneObject>;
}
