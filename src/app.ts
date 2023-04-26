import fastify, { FastifyInstance } from "fastify";
import ProfileRoute from "./routes/profile";

// import { FromSchema } from "json-schema-to-ts";

// import { QuerystringSchema as QuerystringSchemaInterface } from "./types/QueryString";
// import { HeadersSchema as HeadersSchemaInterface } from "./types/Headers";

export const build = (opts = {}) => {
  const app: FastifyInstance = fastify(opts);
  // app.register(auth, { prefix: "/v2/auth" });
  app.register(ProfileRoute);

  return app;
};

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
