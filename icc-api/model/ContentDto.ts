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
import { MeasureDto } from "./MeasureDto"
import { MedicationDto } from "./MedicationDto"
import { ServiceDto } from "./ServiceDto"

import { decodeBase64 } from "./ModelHelper"

export class ContentDto {
  constructor(json: JSON | any) {
    Object.assign(
      this as ContentDto,
      json,
      json.binaryValue ? { binaryValue: decodeBase64(json.binaryValue) } : {}
    )
  }

  stringValue?: string
  numberValue?: number
  booleanValue?: boolean
  instantValue?: number
  /**
   * Known values in a date. The format could have a all three (day, month and year) or values on any of these three, whatever is known.
   */
  fuzzyDateValue?: number
  binaryValue?: ArrayBuffer
  /**
   * Id of the document in which the content is being filled.
   */
  documentId?: string
  measureValue?: MeasureDto
  medicationValue?: MedicationDto
  /**
   * The service for which the content is being filled
   */
  compoundValue?: Array<ServiceDto>
}
