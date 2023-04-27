import { FastifyReply, FastifyRequest } from "fastify";
import { CreateProfileInput, ProfileParamsType } from "./profile.schema";

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

async function getOtherProfileHandler(
  request: FastifyRequest<{ Params: ProfileParamsType }>,
  reply: FastifyReply
) {

  //type error
  const { profileId } = request.params;
  return `Profile Fetched! `;
}
export { createProfileHandler, getMyProfileHandler, getOtherProfileHandler };
