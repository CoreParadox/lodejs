import { LodestoneObject } from "./Objects";
export default class ApiClient {
    Request(apiObject: LodestoneObject): Promise<LodestoneObject>;
}
