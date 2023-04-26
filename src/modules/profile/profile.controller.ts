import { FastifyReply, FastifyRequest } from "fastify";
import { CreateProfileInput } from "./profile.schema";

async function createProfileHandler(
  request: FastifyRequest<{
    Body: CreateProfileInput;
  }>,
  reply: FastifyReply
) {
  return "Profile Created!";
}

async function getMyProfileHandler(
  request: FastifyRequest,
  reply: FastifyReply
) {
  // take profile_id from decoded jwt

  return "Profile Fetched!";
}

export { createProfileHandler, getMyProfileHandler };
