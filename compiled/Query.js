"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Worlds_1 = require("./Worlds");
const RegexStatements_1 = require("./RegexStatements");
class CharacterQuery {
    constructor(firstName, lastName, worldName) {
        this.CharacterList = [];
        this.FirstName = firstName;
        this.LastName = lastName;
        this.World = Worlds_1.Worlds.AllWorlds.find(a => a.toLowerCase() == worldName.toLowerCase());
        if (!this.World)
            throw new Error("invalid world provided.");
    }
    populate(data) {
        var regex = new RegExp(RegexStatements_1.RegexStatements.CharacterQuery.Entry, "g");
        var match = regex.exec(data);
        while (match != null) {
            this.CharacterList.push(match[1]);
            match = regex.exec(data);
        }
        return this;
    }
    ;
    get url() {
        return `https://na.finalfantasyxiv.com/lodestone/character/?q=${this.FirstName}+${this.LastName}&worldname=${this.World}`;
    }
}
exports.default = CharacterQuery;
