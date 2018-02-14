"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const https = require("https");
class Fetcher {
    Fetch(object) {
        return new Promise((resolve, rej) => {
            https.get(object.url, (res) => {
                var body = "";
                res.on("data", (chunk) => { body += chunk; });
                res.on("end", () => {
                    object.populate(body);
                    resolve(object);
                });
                res.on("error", rej);
            });
        });
    }
}
exports.default = Fetcher;
