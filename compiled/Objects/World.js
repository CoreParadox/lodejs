"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Utilities_1 = require("../Utilities");
class WorldStatus {
    constructor() {
        this.properCase = (str) => str.substr(0, 1).toUpperCase() + str.substr(1, str.length).toLowerCase();
    }
    get url() {
        return `https://na.finalfantasyxiv.com/lodestone/worldstatus/`;
    }
    getStatus(name) {
        var wName = this.properCase(Utilities_1.Worlds.AllWorlds.find(a => a.toLowerCase() == name.toLowerCase()));
        if (!wName)
            throw new Error("invalid world provided.");
        return this.worlds[wName];
    }
    populate(data) {
        this.worlds = this.getWorlds(data);
        return this;
    }
    getWorlds(data) {
        var worlds = {};
        var regex = new RegExp(Utilities_1.RegexStatements.WorldQuery.Status, "g");
        var match = regex.exec(data);
        while (match != null) {
            worlds[this.properCase(match[1])] = match[2];
            match = regex.exec(data);
        }
        return worlds;
    }
}
exports.WorldStatus = WorldStatus;
