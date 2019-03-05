"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const https = require("https");
class ApiClient {
    Request(apiObject) {
        return new Promise((resolve, reject) => {
            https.get(apiObject.url, r => {
                var body = "";
                r.on("data", (chunk) => { body += chunk; });
                r.on("end", _ => { apiObject.populate(body); resolve(apiObject); });
                r.on("error", reject);
            });
        });
    }
}
exports.default = ApiClient;
