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

export class CalendarItem {
  constructor(json: JSON | any) {
    Object.assign(this as CalendarItem, json)
  }
  created?: number

  modified?: number

  endOfLife?: number

  author?: string

  responsible?: string

  codes?: Array<models.CodeStub>

  tags?: Array<models.CodeStub>

  secretForeignKeys?: Array<string>

  cryptedForeignKeys?: { [key: string]: Array<models.Delegation> }

  delegations?: { [key: string]: Array<models.Delegation> }

  encryptionKeys?: { [key: string]: Array<models.Delegation> }

  medicalLocationId?: string

  encryptedSelf?: string

  title?: string

  calendarItemTypeId?: string

  patientId?: string

  important?: boolean

  homeVisit?: boolean

  phoneNumber?: string

  placeId?: string

  address?: models.Address

  addressText?: string

  startTime?: number

  endTime?: number

  duration?: number

  allDay?: boolean

  details?: string

  agendaId?: string

  meetingTags?: Array<models.CalendarItemTag>

  flowItem?: models.FlowItem

  attachments?: { [key: string]: models.Attachment }

  deleted?: number

  id?: string

  rev?: string

  revsInfo?: Array<models.RevisionInfo>

  conflicts?: Array<string>

  javaType?: string

  revHistory?: { [key: string]: string }
}
