"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ApiClient_1 = require("./ApiClient");
const Objects_1 = require("./Objects/");
const client = new ApiClient_1.default();
var Api;
(function (Api) {
    async function getCharacter(fName, lName, world) {
        var result = await client.Request(new Objects_1.CharacterQuery(fName, lName, world));
        return await client.Request(new Objects_1.Character(result.CharacterList[0]));
    }
    Api.getCharacter = getCharacter;
    async function getWorldStatus(world) {
        var worlds = await client.Request(new Objects_1.WorldStatus());
        return worlds.getStatus(world);
    }
    Api.getWorldStatus = getWorldStatus;
})(Api = exports.Api || (exports.Api = {}));
