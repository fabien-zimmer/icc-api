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
import { CodeStubDto } from "./CodeStubDto"
import { KeywordSubwordDto } from "./KeywordSubwordDto"

import { decodeBase64 } from "./ModelHelper"

export class KeywordDto {
  constructor(json: JSON | any) {
    Object.assign(this as KeywordDto, json)
  }

  id?: string
  rev?: string
  /**
   * The timestamp (unix epoch in ms) of creation of this entity, will be filled automatically if missing. Not enforced by the application server.
   */
  created?: number
  /**
   * The date (unix epoch in ms) of the latest modification of this entity, will be filled automatically if missing. Not enforced by the application server.
   */
  modified?: number
  /**
   * The id of the User that has created this form, will be filled automatically if missing. Not enforced by the application server.
   */
  author?: string
  /**
   * The id of the HealthcareParty that is responsible for this form, will be filled automatically if missing. Not enforced by the application server.
   */
  responsible?: string
  /**
   * The id of the medical location where this entity was created.
   */
  medicalLocationId?: string
  /**
   * A tag is an item from a codification system that qualifies an entity as being member of a certain class, whatever the value it might have taken. If the tag qualifies the content of a field, it means that whatever the content of the field, the tag will always apply. For example, the label of a field is qualified using a tag. LOINC is a codification system typically used for tags.
   */
  tags?: Array<CodeStubDto>
  /**
   * A code is an item from a codification system that qualifies the content of this entity. SNOMED-CT, ICPC-2 or ICD-10 codifications systems can be used for codes
   */
  codes?: Array<CodeStubDto>
  /**
   * Soft delete (unix epoch in ms) timestamp of the object.
   */
  endOfLife?: number
  /**
   * hard delete (unix epoch in ms) timestamp of the object. Filled automatically when deletePatient is called.
   */
  deletionDate?: number
  value?: string
  subWords?: Array<KeywordSubwordDto>
  userId?: string
}