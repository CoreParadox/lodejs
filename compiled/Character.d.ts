import { LodestoneObject } from "./LodestoneObject";
export declare class Character implements LodestoneObject {
    private id;
    WorldName: string;
    Title: string;
    FirstName: string;
    LastName: string;
    Race: string;
    Clan: string;
    Gender: string;
    FreeCompany: string;
    GrandCompany: string;
    GrandCompanyStanding: string;
    Hometown: string;
    Nameday: string;
    Guardian: string;
    Classes: {
        Class: string;
        Level: number;
    }[];
    SelfIntroduction: string;
    CurrentClass: string;
    Headshot: string;
    Portrait: string;
    constructor(id: String);
    readonly url: string;
    populate(data: string): this;
    getClasses(data: any): void;
    MapClass(CurrentClassUrl: string): any;
}
