import { FastifyInstance } from "fastify";
import {
  createProfileHandler,
  getMyProfileHandler,
  getOtherProfileHandler
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

  server.get(
    "/profiles/v1/",
    {
      schema: {
        response: {
          200: $ref("profileResponseSchema"),
        },
        params: $ref("profileParamsSchema"),
      },
      preHandler: [server.checkForBearer],
    },
    getOtherProfileHandler
  );
}


export default profileRoutes;
