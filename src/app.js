"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.build = void 0;
const fastify_1 = __importDefault(require("fastify"));
// import { FromSchema } from "json-schema-to-ts";
// import { QuerystringSchema as QuerystringSchemaInterface } from "./types/QueryString";
// import { HeadersSchema as HeadersSchemaInterface } from "./types/Headers";
// const server = fastify();
const build = (opts = {}) => {
    const app = (0, fastify_1.default)(opts);
    // app.register(auth, { prefix: "/v2/auth" });
    return app;
};
exports.build = build;
// server.get<{
//   Querystring: FromSchema<typeof QuerystringSchemaInterface>;
//   Headers: FromSchema<typeof HeadersSchemaInterface>;
// }>(
//   "/auth",
//   {
//     schema: {
//       querystring: QuerystringSchemaInterface,
//       headers: HeadersSchemaInterface,
//     },
//     preValidation: (request, reply, done) => {
//       const { username, password } = request.query;
//       done(username !== "admin" ? new Error("Must be admin") : undefined);
//     },
//   },
//   async (request, reply) => {
//     const customerHeader = request.headers["h-custom"];
//     // do something with request data
//     return customerHeader;
//   }
// );
