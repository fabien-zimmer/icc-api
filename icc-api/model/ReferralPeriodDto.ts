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

/**
 * Time periods
 */
import { decodeBase64 } from "./ModelHelper"

export class ReferralPeriodDto {
  constructor(json: JSON | any) {
    Object.assign(this as ReferralPeriodDto, json)
  }

  /**
   * The date (unix epoch in ms) when the referral period initiated, will be filled instantaneously.
   */
  startDate?: number
  /**
   * The date (unix epoch in ms) the referral period ended, will be instantaneously filled.
   */
  endDate?: number
  /**
   * Comments made during the referral.
   */
  comment?: string
}
