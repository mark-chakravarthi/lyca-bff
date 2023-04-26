import { FastifyInstance } from "fastify";
import {
  createProfileHandler,
  getMyProfileHandler,
} from "./profile.controller";
import { $ref } from "./profile.schema";

async function profileRoutes(server: FastifyInstance) {
  server.post(
    "/profiles/v1",
    {
      schema: {
        body: $ref("createProfileRequestSchema"),
      },
      preHandler: [server.checkForBearer],
    },
    createProfileHandler
  );

  server.get(
    "/myprofiles/v1",
    {
      schema: {
        response: {
          200: $ref("profileResponseSchema"),
        },
      },
      preHandler: [server.checkForBearer],
    },
    getMyProfileHandler
  );
}

export default profileRoutes;
