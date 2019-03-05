"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Index_1 = require("../Index");
const Worlds_1 = require("../Utilities/Worlds");
function TestCharacter() {
    Index_1.Api.getCharacter("Donut", "Steel", "Goblin").then(console.log);
}
function TestStatus() {
    Index_1.Api.getWorldStatus(Worlds_1.Worlds.Aether.Goblin).then(console.log);
}
TestCharacter();
TestStatus();
