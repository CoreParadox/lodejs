"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ApiClient_1 = require("./ApiClient");
const Query_1 = require("./Query");
const Character_1 = require("./Character");
const World_1 = require("./World");
const client = new ApiClient_1.default();
var Api;
(function (Api) {
    async function getCharacter(fName, lName, world) {
        var result = await client.Request(new Query_1.default(fName, lName, world));
        return await client.Request(new Character_1.Character(result.CharacterList[0]));
    }
    Api.getCharacter = getCharacter;
    async function getWorldStatus(world) {
        var worlds = await client.Request(new World_1.WorldStatus());
        return worlds.getStatus(world);
    }
    Api.getWorldStatus = getWorldStatus;
})(Api = exports.Api || (exports.Api = {}));
var Character_2 = require("./Character");
exports.Character = Character_2.Character;
