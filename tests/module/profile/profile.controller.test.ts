import { FastifyReply } from "fastify";
import { CreateProfileInput } from "src/modules/profile/profile.schema";
import { createProfileHandler, getMyProfileHandler } from "../../../src/modules/profile/profile.controller";
import profileBody from '../../mocks/ProfileBodyJson.json'

const profileData: CreateProfileInput = Object.assign({}, JSON.parse(JSON.stringify(profileBody)));

describe("Test Controller", () => {
    test("should return success message after profile is created", async () => {

        const request: any = {
            body: profileData,
        };
        const reply: any = {
            send: jest.fn(),
        };

        const result = await createProfileHandler(request, reply);
        expect(result).not.toBe(null);
    });

    test("should return Success message if profile is fetched", async () => {
        const request: any = {};
        const reply: any = {
            send: jest.fn(),
        };

        const result = await getMyProfileHandler(request, reply);
        expect(result).not.toBe(null);
    });



});
