import fastify, {
  FastifyReply,
  FastifyRequest,
  FastifyInstance,
} from "fastify";
import { fastifyJwt } from "@fastify/jwt";

import profileRoutes from "./modules/profile/profile.route";

import { profileSchemas } from "./modules/profile/profile.schema";

declare module "fastify" {
  export interface FastifyInstance {
    checkForBearer: any;
  }
}

export const build = (opts = {}) => {
  const app: FastifyInstance = fastify(opts);

  app.register(fastifyJwt, { secret: "secret" });

  app.decorate(
    "checkForBearer",
    async (request: FastifyRequest, reply: FastifyReply) => {
      if (!request.headers["authorization"])
        reply.code(401).send("Authorization header missing.");
    }
  );

  const schemas = [...profileSchemas];

  for (let schema of schemas) {
    app.addSchema(schema);
  }

  app.register(profileRoutes, { prefix: "/bff" });

  return app;
};
