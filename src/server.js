"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const { build } = require("./app.js");
const app_1 = require("./app");
const app = (0, app_1.build)({ logger: true });
app.listen({ port: 8080 }, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening at ${address}`);
});
