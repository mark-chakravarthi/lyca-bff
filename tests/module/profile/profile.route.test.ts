import { build } from '../../../src/app'
import profileBody from '../../mocks/ProfileBodyJson.json'

describe("Route Test", () => {
    test("POST /myprofiles/v1 add profile and return success message", async () => {
        const app = build();
        const accessToken = "abc"
        const response = await app.inject({
            method: "POST",
            url: "/bff/profiles/v1",
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
            payload: profileBody

        });
        expect(response.statusCode).toBe(200)
    });

    test("POST /myprofiles/v1 when body doesn't follw schema then returns error", async () => {
        const app = build();
        profileBody['language'] = "xyz";
        const accessToken = "abc"
        const response = await app.inject({
            method: "POST",
            url: "/bff/profiles/v1",
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
            payload: profileBody

        });
        expect(response.statusCode).toBe(400)
    });

    test("GET /myprofiles/v1 returns the authenticated user's profile", async () => {
        const app = build();
        const accessToken = "abc"
        const response = await app.inject({
            method: "GET",
            url: "/bff/myprofiles/v1",
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        expect(response.statusCode).toBe(200)
    });


    test("GET /myprofiles/v1 returns Error when there's no Bearer passed", async () => {
        const app = build();
        const accessToken = "abc"
        const response = await app.inject({
            method: "GET",
            url: "/bff/myprofiles/v1",
        });
        expect(response.statusCode).toBe(401)
    });




})
