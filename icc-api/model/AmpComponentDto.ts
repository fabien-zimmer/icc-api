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
import { IngredientDto } from "./IngredientDto"
import { PharmaceuticalFormStubDto } from "./PharmaceuticalFormStubDto"
import { RouteOfAdministrationDto } from "./RouteOfAdministrationDto"
import { SamTextDto } from "./SamTextDto"

import { decodeBase64 } from "./ModelHelper"

export class AmpComponentDto {
  constructor(json: JSON | any) {
    Object.assign(this as AmpComponentDto, json)
  }

  from?: number
  to?: number
  ingredients?: Array<IngredientDto>
  pharmaceuticalForms?: Array<PharmaceuticalFormStubDto>
  routeOfAdministrations?: Array<RouteOfAdministrationDto>
  dividable?: string
  scored?: string
  crushable?: AmpComponentDto.CrushableEnum
  containsAlcohol?: AmpComponentDto.ContainsAlcoholEnum
  sugarFree?: boolean
  modifiedReleaseType?: number
  specificDrugDevice?: number
  dimensions?: string
  name?: SamTextDto
  note?: SamTextDto
}
export namespace AmpComponentDto {
  export type CrushableEnum = "Y" | "N" | "X"
  export const CrushableEnum = {
    Y: "Y" as CrushableEnum,
    N: "N" as CrushableEnum,
    X: "X" as CrushableEnum
  }
  export type ContainsAlcoholEnum = "Y" | "N" | "X"
  export const ContainsAlcoholEnum = {
    Y: "Y" as ContainsAlcoholEnum,
    N: "N" as ContainsAlcoholEnum,
    X: "X" as ContainsAlcoholEnum
  }
}
