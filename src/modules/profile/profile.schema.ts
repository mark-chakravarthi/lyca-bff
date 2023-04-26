import { buildJsonSchemas } from "fastify-zod";
import z from "zod";

const LANGUAGE = z.enum(["en-gb"]);
type Language = z.infer<typeof LANGUAGE>;

const ADDRESS_TYPE = z.enum(["home"]);
type AddressType = z.infer<typeof ADDRESS_TYPE>;

const STATE_CODE = z.enum(["GB-CAM"]);
type StateCode = z.infer<typeof STATE_CODE>;

const COUNTRY_CODE = z.enum(["GB-ENG"]);
type CountryCode = z.infer<typeof COUNTRY_CODE>;

const CONNECTION_TYPE = z.enum(["prepaid", "postpaid"]);
type ConnectionType = z.infer<typeof CONNECTION_TYPE>;

const SIM_CATEGORY = z.enum(["NORMAL_SIM", "DATA_ONLY"]);
type SimCategory = z.infer<typeof SIM_CATEGORY>;

const CONSENT_TYPE = z.enum(["LOCATION"]);
type ConsentType = z.infer<typeof CONSENT_TYPE>;

const profileCore = {
  title: z.string(),
  first_name: z.string(),
  last_name: z.string(),
  date_of_birth: z.date(),
  language: LANGUAGE,
  email_id: z.string().email(),
  address_dlts: z.object({
    address_type: ADDRESS_TYPE, // clarify wih deepesh
    address_line_1: z.string(),
    address_line_2: z.string().optional(),
    location: z.string(),
    state_code: STATE_CODE,
    country_code: COUNTRY_CODE,
    postal_code: z.string(),
    is_business_address: z.boolean(),
    organization_name: z.string(),
    coordinates: z.object({
      latitude: z.number(), // clarify wih deepesh
      longitude: z.number(), // clarify wih deepesh
    }),
    connection_dtls: z.array(
      z.object({
        connection_type: CONNECTION_TYPE,
        SIM_CATEGORY: SIM_CATEGORY,
        display_name: z.string(),
        msisdn: z.number(),
        iccid: z.number(),
        imsi: z.number(),
        puk_code: z.number(),
        is_default: z.boolean(),
        is_primary: z.boolean(),
        is_parent: z.boolean(),
        parent_imsi: z.number(),
      })
    ),
    consents: z.array(
      z.object({
        consent_type: CONSENT_TYPE,
        consent_given: z.boolean(),
        consent_date: z.date(),
        tex_details: z.string(),
      })
    ),
    addnl_attributes: z.array(
      z.object({
        name: z.string(),
        value: z.string(),
        data_type_value: z.string(),
      })
    ),
    created_by: z.string(),
  }),
};

const createProfileRequestSchema = z.object(profileCore);

const profileResponseSchema = z.object({
  ...profileCore,
  profile_id: z.string().uuid(),
  created_at: z.string().datetime(),
  update_at: z.date(),
  updated_by: z.string().datetime(),
});

export type CreateProfileInput = z.infer<typeof createProfileRequestSchema>;

export const { schemas: profileSchemas, $ref } = buildJsonSchemas(
  {
    createProfileRequestSchema,
    profileResponseSchema,
  },
  { $id: "ProfileSchema" }
);
