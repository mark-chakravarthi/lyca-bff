import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyPluginAsync,
} from "fastify";
import fp from "fastify-plugin";

const ProfileRoute: FastifyPluginAsync = async (
  server: FastifyInstance,
  options: FastifyPluginOptions
) => {
  server.get("/", {}, async (request, reply) => {
    try {
      return reply.code(200).send({ message: "Success!" });
    } catch (error) {
      request.log.error(error);
      return reply.send(500);
    }
  });
};
export default fp(ProfileRoute);
