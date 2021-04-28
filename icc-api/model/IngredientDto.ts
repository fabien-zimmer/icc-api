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
import { QuantityDto } from "./QuantityDto"
import { SubstanceStubDto } from "./SubstanceStubDto"

import { decodeBase64 } from "./ModelHelper"

export class IngredientDto {
  constructor(json: JSON | any) {
    Object.assign(this as IngredientDto, json)
  }

  from?: number
  to?: number
  rank?: number
  type?: IngredientDto.TypeEnum
  knownEffect?: boolean
  strengthDescription?: string
  strength?: QuantityDto
  additionalInformation?: string
  substance?: SubstanceStubDto
}
export namespace IngredientDto {
  export type TypeEnum = "ACTIVE_SUBSTANCE" | "EXCIPIENT"
  export const TypeEnum = {
    ACTIVESUBSTANCE: "ACTIVE_SUBSTANCE" as TypeEnum,
    EXCIPIENT: "EXCIPIENT" as TypeEnum
  }
}