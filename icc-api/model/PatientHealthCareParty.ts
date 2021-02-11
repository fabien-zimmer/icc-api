/**
 * iCure Cloud API Documentation
 * Spring shop sample application
 *
 * OpenAPI spec version: v0.0.1
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { ReferralPeriod } from "./ReferralPeriod"

/**
 * One or several periods of care by an hcp for this patient
 */
import { decodeBase64 } from "./ModelHelper"

export class PatientHealthCareParty {
  constructor(json: JSON | any) {
    Object.assign(this as PatientHealthCareParty, json)
  }

  /**
   * Type of care/relationship.
   */
  type?: PatientHealthCareParty.TypeEnum
  /**
   * UUID of the hcp.
   */
  healthcarePartyId?: string
  /**
   * Preferred format of exchange for diverse means of communication
   */
  sendFormats?: { [key: string]: string }
  /**
   * Time periods
   */
  referralPeriods?: Array<ReferralPeriod>
  referral?: boolean
  /**
   * The base64 encoded data of this object, formatted as JSON and encrypted in AES using the random master key from encryptionKeys.
   */
  encryptedSelf?: string
}
export namespace PatientHealthCareParty {
  export type TypeEnum =
    | "doctor"
    | "referral"
    | "medicalhouse"
    | "retirementhome"
    | "hospital"
    | "other"
    | "referringphysician"
    | "referralHospital"
  export const TypeEnum = {
    Doctor: "doctor" as TypeEnum,
    Referral: "referral" as TypeEnum,
    Medicalhouse: "medicalhouse" as TypeEnum,
    Retirementhome: "retirementhome" as TypeEnum,
    Hospital: "hospital" as TypeEnum,
    Other: "other" as TypeEnum,
    Referringphysician: "referringphysician" as TypeEnum,
    ReferralHospital: "referralHospital" as TypeEnum
  }
}