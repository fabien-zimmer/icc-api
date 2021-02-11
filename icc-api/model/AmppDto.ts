/**
 *
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.2
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as models from "./models"

export class AmppDto {
  constructor(json: JSON | any) {
    Object.assign(this as AmppDto, json)
  }
  from?: number

  to?: number

  index?: number

  ctiExtended?: string

  leafletLink?: models.SamTextDto

  spcLink?: models.SamTextDto

  rmaPatientLink?: models.SamTextDto

  rmaProfessionalLink?: models.SamTextDto

  parallelCircuit?: number

  parallelDistributor?: string

  packMultiplier?: number

  packAmount?: models.QuantityDto

  packDisplayValue?: string

  status?: AmppDto.StatusEnum

  atcs?: Array<models.AtcDto>

  crmLink?: models.SamTextDto

  deliveryModusCode?: string

  deliveryModus?: models.SamTextDto

  deliveryModusSpecificationCode?: string

  deliveryModusSpecification?: models.SamTextDto

  dhpcLink?: models.SamTextDto

  distributorCompany?: models.CompanyDto

  speciallyRegulated?: number

  abbreviatedName?: models.SamTextDto

  prescriptionName?: models.SamTextDto

  note?: models.SamTextDto

  posologyNote?: models.SamTextDto

  noGenericPrescriptionReasons?: Array<models.SamTextDto>

  exFactoryPrice?: number

  reimbursementCode?: number

  definedDailyDose?: models.QuantityDto

  officialExFactoryPrice?: number

  realExFactoryPrice?: number

  pricingInformationDecisionDate?: number

  components?: Array<models.AmppComponentDto>

  commercializations?: Array<models.CommercializationDto>

  supplyProblems?: Array<models.SupplyProblemDto>

  dmpps?: Array<models.DmppDto>

  vaccineIndicationCodes?: Array<string>

  singleUse?: boolean

  orphan?: boolean
}
export namespace AmppDto {
  export enum StatusEnum {
    AUTHORIZED = <any>"AUTHORIZED",
    SUSPENDED = <any>"SUSPENDED",
    REVOKED = <any>"REVOKED"
  }
}
