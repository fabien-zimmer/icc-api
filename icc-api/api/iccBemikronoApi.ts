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

import { XHR } from "./XHR"
import * as models from "../model/models"

export class iccBeMikronoApi {
  host: string
  headers: Array<XHR.Header>
  fetchImpl?: (input: RequestInfo, init?: RequestInit) => Promise<Response>

  constructor(
    host: string,
    headers: any,
    fetchImpl?: (input: RequestInfo, init?: RequestInit) => Promise<Response>
  ) {
    this.host = host
    this.headers = Object.keys(headers).map(k => new XHR.Header(k, headers[k]))
    this.fetchImpl = fetchImpl
  }

  setHeaders(h: Array<XHR.Header>) {
    this.headers = h
  }

  handleError(e: XHR.Data) {
    if (e.status == 401) throw Error("auth-failed")
    else throw Error("api-error" + e.status)
  }

  appointmentsByDate(date: number): Promise<Array<models.AppointmentDto> | any> {
    let _body = null

    const _url =
      this.host +
      "/be_mikrono/appointments/byDate/{date}".replace("{date}", date + "") +
      "?ts=" +
      new Date().getTime()
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    return XHR.sendCommand("GET", _url, headers, _body, this.fetchImpl)
      .then(doc => (doc.body as Array<JSON>).map(it => new models.AppointmentDto(it)))
      .catch(err => this.handleError(err))
  }
  appointmentsByPatient(
    patientId: string,
    from?: number,
    from2?: number
  ): Promise<Array<models.AppointmentDto> | any> {
    let _body = null

    const _url =
      this.host +
      "/be_mikrono/appointments/byPatient/{patientId}".replace("{patientId}", patientId + "") +
      "?ts=" +
      new Date().getTime() +
      (from ? "&from=" + from : "") +
      (from2 ? "&from2=" + from2 : "")
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    return XHR.sendCommand("GET", _url, headers, _body, this.fetchImpl)
      .then(doc => (doc.body as Array<JSON>).map(it => new models.AppointmentDto(it)))
      .catch(err => this.handleError(err))
  }
  createAppointmentTypes(
    body?: Array<models.MikronoAppointmentTypeRestDto>
  ): Promise<any | Boolean> {
    let _body = null
    _body = body

    const _url = this.host + "/be_mikrono/appointmentTypes" + "?ts=" + new Date().getTime()
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    return XHR.sendCommand("POST", _url, headers, _body, this.fetchImpl)
      .then(doc => true)
      .catch(err => this.handleError(err))
  }
  createAppointments(
    body?: Array<models.AppointmentImportDto>
  ): Promise<Array<models.AppointmentImportDto> | any> {
    let _body = null
    _body = body

    const _url = this.host + "/be_mikrono/appointments" + "?ts=" + new Date().getTime()
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    return XHR.sendCommand("POST", _url, headers, _body, this.fetchImpl)
      .then(doc => (doc.body as Array<JSON>).map(it => new models.AppointmentImportDto(it)))
      .catch(err => this.handleError(err))
  }
  notify(appointmentId: string, action: string): Promise<any | Boolean> {
    let _body = null

    const _url =
      this.host +
      "/be_mikrono/notify/{appointmentId}/{action}"
        .replace("{appointmentId}", appointmentId + "")
        .replace("{action}", action + "") +
      "?ts=" +
      new Date().getTime()
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    return XHR.sendCommand("GET", _url, headers, _body, this.fetchImpl)
      .then(doc => true)
      .catch(err => this.handleError(err))
  }
  register(userId: string, body?: models.MikronoCredentialsDto): Promise<any | Boolean> {
    let _body = null
    _body = body

    const _url =
      this.host +
      "/be_mikrono/user/{userId}/register".replace("{userId}", userId + "") +
      "?ts=" +
      new Date().getTime()
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    return XHR.sendCommand("PUT", _url, headers, _body, this.fetchImpl)
      .then(doc => true)
      .catch(err => this.handleError(err))
  }
  sendMessage(body?: models.EmailOrSmsMessageDto): Promise<any | Boolean> {
    let _body = null
    _body = body

    const _url = this.host + "/be_mikrono/sendMessage" + "?ts=" + new Date().getTime()
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    return XHR.sendCommand("POST", _url, headers, _body, this.fetchImpl)
      .then(doc => true)
      .catch(err => this.handleError(err))
  }
  setUserCredentials(userId: string, body?: models.MikronoCredentialsDto): Promise<any | Boolean> {
    let _body = null
    _body = body

    const _url =
      this.host +
      "/be_mikrono/user/{userId}/credentials".replace("{userId}", userId + "") +
      "?ts=" +
      new Date().getTime()
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    return XHR.sendCommand("PUT", _url, headers, _body, this.fetchImpl)
      .then(doc => true)
      .catch(err => this.handleError(err))
  }
}
