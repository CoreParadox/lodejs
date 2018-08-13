"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Worlds_1 = require("./Worlds");
const RegexStatements_1 = require("./RegexStatements");
class WorldStatus {
    constructor() {
        this.worlds = {};
    }
    get url() {
        return `https://na.finalfantasyxiv.com/lodestone/worldstatus/`;
    }
    getStatus(name) {
        var wName = Worlds_1.Worlds.AllWorlds.find(a => a.toLowerCase() == name.toLowerCase());
        if (!wName)
            throw new Error("invalid world provided.");
        else
            return this.worlds[name];
    }
    populate(data) {
        this.worlds = this.getWorlds(data);
        return this;
    }
    getWorlds(data) {
        var worlds = {};
        var regex = new RegExp(RegexStatements_1.RegexStatements.WorldQuery.Status, "g");
        var match = regex.exec(data);
        while (match != null) {
            worlds[match[1]] = match[2];
            match = regex.exec(data);
        }
        return worlds;
    }
}
exports.WorldStatus = WorldStatus;