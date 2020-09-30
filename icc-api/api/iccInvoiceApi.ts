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
import { XHR } from "./XHR"
import { DelegationDto } from "../model/DelegationDto"
import { DocIdentifier } from "../model/DocIdentifier"
import { FilterChainInvoice } from "../model/FilterChainInvoice"
import { IcureStubDto } from "../model/IcureStubDto"
import { InvoiceDto } from "../model/InvoiceDto"
import { InvoicingCodeDto } from "../model/InvoicingCodeDto"
import { LabelledOccurenceDto } from "../model/LabelledOccurenceDto"
import { ListOfIdsDto } from "../model/ListOfIdsDto"
import { PaginatedListInvoiceDto } from "../model/PaginatedListInvoiceDto"

export class iccInvoiceApi {
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

  handleError(e: XHR.XHRError): never {
    throw e
  }

  /**
   *
   * @summary Gets all invoices for author at date
   * @param body
   * @param userId
   * @param type
   * @param sentMediumType
   * @param secretFKeys
   * @param insuranceId
   * @param invoiceId
   * @param gracePeriod
   */
  appendCodes(
    userId: string,
    type: string,
    sentMediumType: string,
    secretFKeys: string,
    insuranceId?: string,
    invoiceId?: string,
    gracePeriod?: number,
    body?: Array<InvoicingCodeDto>
  ): Promise<Array<InvoiceDto>> {
    let _body = null
    _body = body

    const _url =
      this.host +
      `/invoice/byauthor/${encodeURIComponent(String(userId))}/append/${encodeURIComponent(
        String(type)
      )}/${encodeURIComponent(String(sentMediumType))}` +
      "?ts=" +
      new Date().getTime() +
      (secretFKeys ? "&secretFKeys=" + encodeURIComponent(String(secretFKeys)) : "") +
      (insuranceId ? "&insuranceId=" + encodeURIComponent(String(insuranceId)) : "") +
      (invoiceId ? "&invoiceId=" + encodeURIComponent(String(invoiceId)) : "") +
      (gracePeriod ? "&gracePeriod=" + encodeURIComponent(String(gracePeriod)) : "")
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    return XHR.sendCommand("POST", _url, headers, _body, this.fetchImpl)
      .then(doc => (doc.body as Array<JSON>).map(it => new InvoiceDto(it)))
      .catch(err => this.handleError(err))
  }

  /**
   *
   * @summary Creates an invoice
   * @param body
   */
  createInvoice(body?: InvoiceDto): Promise<InvoiceDto> {
    let _body = null
    _body = body

    const _url = this.host + `/invoice` + "?ts=" + new Date().getTime()
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    return XHR.sendCommand("POST", _url, headers, _body, this.fetchImpl)
      .then(doc => new InvoiceDto(doc.body as JSON))
      .catch(err => this.handleError(err))
  }

  /**
   *
   * @summary Deletes an invoice
   * @param invoiceId
   */
  deleteInvoice(invoiceId: string): Promise<DocIdentifier> {
    let _body = null

    const _url =
      this.host +
      `/invoice/${encodeURIComponent(String(invoiceId))}` +
      "?ts=" +
      new Date().getTime()
    let headers = this.headers
    return XHR.sendCommand("DELETE", _url, headers, _body, this.fetchImpl)
      .then(doc => new DocIdentifier(doc.body as JSON))
      .catch(err => this.handleError(err))
  }

  /**
   * Returns a list of invoices along with next start keys and Document ID. If the nextStartKey is Null it means that this is the last page.
   * @summary Filter invoices for the current user (HcParty)
   * @param body
   */
  filterInvoicesBy(body?: FilterChainInvoice): Promise<Array<InvoiceDto>> {
    let _body = null
    _body = body

    const _url = this.host + `/invoice/filter` + "?ts=" + new Date().getTime()
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    return XHR.sendCommand("POST", _url, headers, _body, this.fetchImpl)
      .then(doc => (doc.body as Array<JSON>).map(it => new InvoiceDto(it)))
      .catch(err => this.handleError(err))
  }

  /**
   *
   * @summary Gets all invoices for author at date
   * @param hcPartyId
   * @param fromDate
   * @param toDate
   * @param startKey The start key for pagination: a JSON representation of an array containing all the necessary components to form the Complex Key&#x27;s startKey
   * @param startDocumentId A patient document ID
   * @param limit Number of rows
   */
  findByAuthor(
    hcPartyId: string,
    fromDate?: number,
    toDate?: number,
    startKey?: string,
    startDocumentId?: string,
    limit?: number
  ): Promise<PaginatedListInvoiceDto> {
    let _body = null

    const _url =
      this.host +
      `/invoice/byauthor/${encodeURIComponent(String(hcPartyId))}` +
      "?ts=" +
      new Date().getTime() +
      (fromDate ? "&fromDate=" + encodeURIComponent(String(fromDate)) : "") +
      (toDate ? "&toDate=" + encodeURIComponent(String(toDate)) : "") +
      (startKey ? "&startKey=" + encodeURIComponent(String(startKey)) : "") +
      (startDocumentId ? "&startDocumentId=" + encodeURIComponent(String(startDocumentId)) : "") +
      (limit ? "&limit=" + encodeURIComponent(String(limit)) : "")
    let headers = this.headers
    return XHR.sendCommand("GET", _url, headers, _body, this.fetchImpl)
      .then(doc => new PaginatedListInvoiceDto(doc.body as JSON))
      .catch(err => this.handleError(err))
  }

  /**
   * Keys have to delimited by coma
   * @summary List invoices found By Healthcare Party and secret foreign patient keys.
   * @param hcPartyId
   * @param secretFKeys
   */
  findInvoicesByHCPartyPatientForeignKeys(
    hcPartyId: string,
    secretFKeys: string
  ): Promise<Array<InvoiceDto>> {
    let _body = null

    const _url =
      this.host +
      `/invoice/byHcPartySecretForeignKeys` +
      "?ts=" +
      new Date().getTime() +
      (hcPartyId ? "&hcPartyId=" + encodeURIComponent(String(hcPartyId)) : "") +
      (secretFKeys ? "&secretFKeys=" + encodeURIComponent(String(secretFKeys)) : "")
    let headers = this.headers
    return XHR.sendCommand("GET", _url, headers, _body, this.fetchImpl)
      .then(doc => (doc.body as Array<JSON>).map(it => new InvoiceDto(it)))
      .catch(err => this.handleError(err))
  }

  /**
   * Keys must be delimited by coma
   * @summary List helement stubs found By Healthcare Party and secret foreign keys.
   * @param hcPartyId
   * @param secretFKeys
   */
  findInvoicesDelegationsStubsByHCPartyPatientForeignKeys(
    hcPartyId: string,
    secretFKeys: string
  ): Promise<Array<IcureStubDto>> {
    let _body = null

    const _url =
      this.host +
      `/invoice/byHcPartySecretForeignKeys/delegations` +
      "?ts=" +
      new Date().getTime() +
      (hcPartyId ? "&hcPartyId=" + encodeURIComponent(String(hcPartyId)) : "") +
      (secretFKeys ? "&secretFKeys=" + encodeURIComponent(String(secretFKeys)) : "")
    let headers = this.headers
    return XHR.sendCommand("GET", _url, headers, _body, this.fetchImpl)
      .then(doc => (doc.body as Array<JSON>).map(it => new IcureStubDto(it)))
      .catch(err => this.handleError(err))
  }

  /**
   *
   * @summary Gets an invoice
   * @param invoiceId
   */
  getInvoice(invoiceId: string): Promise<InvoiceDto> {
    let _body = null

    const _url =
      this.host +
      `/invoice/${encodeURIComponent(String(invoiceId))}` +
      "?ts=" +
      new Date().getTime()
    let headers = this.headers
    return XHR.sendCommand("GET", _url, headers, _body, this.fetchImpl)
      .then(doc => new InvoiceDto(doc.body as JSON))
      .catch(err => this.handleError(err))
  }

  /**
   *
   * @summary Gets an invoice
   * @param body
   */
  getInvoices(body?: ListOfIdsDto): Promise<Array<InvoiceDto>> {
    let _body = null
    _body = body

    const _url = this.host + `/invoice/byIds` + "?ts=" + new Date().getTime()
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    return XHR.sendCommand("POST", _url, headers, _body, this.fetchImpl)
      .then(doc => (doc.body as Array<JSON>).map(it => new InvoiceDto(it)))
      .catch(err => this.handleError(err))
  }

  /**
   *
   * @summary Get the list of all used tarifications frequencies in invoices
   * @param minOccurences
   */
  getTarificationsCodesOccurences(minOccurences: number): Promise<Array<LabelledOccurenceDto>> {
    let _body = null

    const _url =
      this.host +
      `/invoice/codes/${encodeURIComponent(String(minOccurences))}` +
      "?ts=" +
      new Date().getTime()
    let headers = this.headers
    return XHR.sendCommand("GET", _url, headers, _body, this.fetchImpl)
      .then(doc => (doc.body as Array<JSON>).map(it => new LabelledOccurenceDto(it)))
      .catch(err => this.handleError(err))
  }

  /**
   *
   * @summary Gets all invoices per status
   * @param body
   * @param status
   * @param from
   * @param to
   */
  listAllHcpsByStatus(
    status: string,
    from?: number,
    to?: number,
    body?: ListOfIdsDto
  ): Promise<Array<InvoiceDto>> {
    let _body = null
    _body = body

    const _url =
      this.host +
      `/invoice/allHcpsByStatus/${encodeURIComponent(String(status))}` +
      "?ts=" +
      new Date().getTime() +
      (from ? "&from=" + encodeURIComponent(String(from)) : "") +
      (to ? "&to=" + encodeURIComponent(String(to)) : "")
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    return XHR.sendCommand("POST", _url, headers, _body, this.fetchImpl)
      .then(doc => (doc.body as Array<JSON>).map(it => new InvoiceDto(it)))
      .catch(err => this.handleError(err))
  }

  /**
   *
   * @summary Gets all invoices for author at date
   * @param body
   */
  listByContactIds(body?: ListOfIdsDto): Promise<Array<InvoiceDto>> {
    let _body = null
    _body = body

    const _url = this.host + `/invoice/byCtcts` + "?ts=" + new Date().getTime()
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    return XHR.sendCommand("POST", _url, headers, _body, this.fetchImpl)
      .then(doc => (doc.body as Array<JSON>).map(it => new InvoiceDto(it)))
      .catch(err => this.handleError(err))
  }

  /**
   * Keys have to delimited by coma
   * @summary List invoices by groupId
   * @param hcPartyId
   * @param groupId
   */
  listByHcPartyGroupId(hcPartyId: string, groupId: string): Promise<Array<InvoiceDto>> {
    let _body = null

    const _url =
      this.host +
      `/invoice/byHcPartyGroupId/${encodeURIComponent(String(hcPartyId))}/${encodeURIComponent(
        String(groupId)
      )}` +
      "?ts=" +
      new Date().getTime()
    let headers = this.headers
    return XHR.sendCommand("GET", _url, headers, _body, this.fetchImpl)
      .then(doc => (doc.body as Array<JSON>).map(it => new InvoiceDto(it)))
      .catch(err => this.handleError(err))
  }

  /**
   * Keys have to delimited by coma
   * @summary List invoices by type, sent or unsent
   * @param hcPartyId
   * @param sentMediumType
   * @param invoiceType
   * @param sent
   * @param from
   * @param to
   */
  listByHcPartySentMediumTypeInvoiceTypeSentDate(
    hcPartyId: string,
    sentMediumType: string,
    invoiceType: string,
    sent: boolean,
    from?: number,
    to?: number
  ): Promise<Array<InvoiceDto>> {
    let _body = null

    const _url =
      this.host +
      `/invoice/byHcParty/${encodeURIComponent(String(hcPartyId))}/mediumType/${encodeURIComponent(
        String(sentMediumType)
      )}/invoiceType/${encodeURIComponent(String(invoiceType))}/sent/${encodeURIComponent(
        String(sent)
      )}` +
      "?ts=" +
      new Date().getTime() +
      (from ? "&from=" + encodeURIComponent(String(from)) : "") +
      (to ? "&to=" + encodeURIComponent(String(to)) : "")
    let headers = this.headers
    return XHR.sendCommand("GET", _url, headers, _body, this.fetchImpl)
      .then(doc => (doc.body as Array<JSON>).map(it => new InvoiceDto(it)))
      .catch(err => this.handleError(err))
  }

  /**
   *
   * @summary Get all invoices by author, by sending mode, by status and by date
   * @param hcPartyId
   * @param sendingMode
   * @param status
   * @param from
   * @param to
   */
  listByHcpartySendingModeStatusDate(
    hcPartyId: string,
    sendingMode?: string,
    status?: string,
    from?: number,
    to?: number
  ): Promise<Array<InvoiceDto>> {
    let _body = null

    const _url =
      this.host +
      `/invoice/byHcpartySendingModeStatusDate/${encodeURIComponent(String(hcPartyId))}` +
      "?ts=" +
      new Date().getTime() +
      (sendingMode ? "&sendingMode=" + encodeURIComponent(String(sendingMode)) : "") +
      (status ? "&status=" + encodeURIComponent(String(status)) : "") +
      (from ? "&from=" + encodeURIComponent(String(from)) : "") +
      (to ? "&to=" + encodeURIComponent(String(to)) : "")
    let headers = this.headers
    return XHR.sendCommand("GET", _url, headers, _body, this.fetchImpl)
      .then(doc => (doc.body as Array<JSON>).map(it => new InvoiceDto(it)))
      .catch(err => this.handleError(err))
  }

  /**
   *
   * @summary Gets all invoices for author at date
   * @param invoiceIds
   */
  listByIds(invoiceIds: string): Promise<Array<InvoiceDto>> {
    let _body = null

    const _url =
      this.host +
      `/invoice/byIds/${encodeURIComponent(String(invoiceIds))}` +
      "?ts=" +
      new Date().getTime()
    let headers = this.headers
    return XHR.sendCommand("GET", _url, headers, _body, this.fetchImpl)
      .then(doc => (doc.body as Array<JSON>).map(it => new InvoiceDto(it)))
      .catch(err => this.handleError(err))
  }

  /**
   *
   * @summary Gets all invoices for author at date
   * @param recipientIds
   */
  listByRecipientsIds(recipientIds: string): Promise<Array<InvoiceDto>> {
    let _body = null

    const _url =
      this.host +
      `/invoice/to/${encodeURIComponent(String(recipientIds))}` +
      "?ts=" +
      new Date().getTime()
    let headers = this.headers
    return XHR.sendCommand("GET", _url, headers, _body, this.fetchImpl)
      .then(doc => (doc.body as Array<JSON>).map(it => new InvoiceDto(it)))
      .catch(err => this.handleError(err))
  }

  /**
   *
   * @summary Gets all invoices for author at date
   * @param serviceIds
   */
  listByServiceIds(serviceIds: string): Promise<Array<InvoiceDto>> {
    let _body = null

    const _url =
      this.host +
      `/invoice/byServiceIds/${encodeURIComponent(String(serviceIds))}` +
      "?ts=" +
      new Date().getTime()
    let headers = this.headers
    return XHR.sendCommand("GET", _url, headers, _body, this.fetchImpl)
      .then(doc => (doc.body as Array<JSON>).map(it => new InvoiceDto(it)))
      .catch(err => this.handleError(err))
  }

  /**
   *
   * @summary Gets all invoices for author at date
   * @param userIds
   */
  listToInsurances(userIds?: string): Promise<Array<InvoiceDto>> {
    let _body = null

    const _url =
      this.host +
      `/invoice/toInsurances` +
      "?ts=" +
      new Date().getTime() +
      (userIds ? "&userIds=" + encodeURIComponent(String(userIds)) : "")
    let headers = this.headers
    return XHR.sendCommand("GET", _url, headers, _body, this.fetchImpl)
      .then(doc => (doc.body as Array<JSON>).map(it => new InvoiceDto(it)))
      .catch(err => this.handleError(err))
  }

  /**
   *
   * @summary Gets all invoices for author at date
   * @param userIds
   */
  listToInsurancesUnsent(userIds?: string): Promise<Array<InvoiceDto>> {
    let _body = null

    const _url =
      this.host +
      `/invoice/toInsurances/unsent` +
      "?ts=" +
      new Date().getTime() +
      (userIds ? "&userIds=" + encodeURIComponent(String(userIds)) : "")
    let headers = this.headers
    return XHR.sendCommand("GET", _url, headers, _body, this.fetchImpl)
      .then(doc => (doc.body as Array<JSON>).map(it => new InvoiceDto(it)))
      .catch(err => this.handleError(err))
  }

  /**
   *
   * @summary Gets all invoices for author at date
   * @param hcPartyId
   */
  listToPatients(hcPartyId?: string): Promise<Array<InvoiceDto>> {
    let _body = null

    const _url =
      this.host +
      `/invoice/toPatients` +
      "?ts=" +
      new Date().getTime() +
      (hcPartyId ? "&hcPartyId=" + encodeURIComponent(String(hcPartyId)) : "")
    let headers = this.headers
    return XHR.sendCommand("GET", _url, headers, _body, this.fetchImpl)
      .then(doc => (doc.body as Array<JSON>).map(it => new InvoiceDto(it)))
      .catch(err => this.handleError(err))
  }

  /**
   *
   * @summary Gets all invoices for author at date
   * @param hcPartyId
   */
  listToPatientsUnsent(hcPartyId?: string): Promise<Array<InvoiceDto>> {
    let _body = null

    const _url =
      this.host +
      `/invoice/toPatients/unsent` +
      "?ts=" +
      new Date().getTime() +
      (hcPartyId ? "&hcPartyId=" + encodeURIComponent(String(hcPartyId)) : "")
    let headers = this.headers
    return XHR.sendCommand("GET", _url, headers, _body, this.fetchImpl)
      .then(doc => (doc.body as Array<JSON>).map(it => new InvoiceDto(it)))
      .catch(err => this.handleError(err))
  }

  /**
   *
   * @summary Gets all invoices for author at date
   * @param body
   * @param invoiceId
   */
  mergeTo(invoiceId: string, body?: ListOfIdsDto): Promise<InvoiceDto> {
    let _body = null
    _body = body

    const _url =
      this.host +
      `/invoice/mergeTo/${encodeURIComponent(String(invoiceId))}` +
      "?ts=" +
      new Date().getTime()
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    return XHR.sendCommand("POST", _url, headers, _body, this.fetchImpl)
      .then(doc => new InvoiceDto(doc.body as JSON))
      .catch(err => this.handleError(err))
  }

  /**
   *
   * @summary Modifies an invoice
   * @param body
   */
  modifyInvoice(body?: InvoiceDto): Promise<InvoiceDto> {
    let _body = null
    _body = body

    const _url = this.host + `/invoice` + "?ts=" + new Date().getTime()
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    return XHR.sendCommand("PUT", _url, headers, _body, this.fetchImpl)
      .then(doc => new InvoiceDto(doc.body as JSON))
      .catch(err => this.handleError(err))
  }

  /**
   *
   * @summary Adds a delegation to a invoice
   * @param body
   * @param invoiceId
   */
  newInvoiceDelegations(invoiceId: string, body?: Array<DelegationDto>): Promise<InvoiceDto> {
    let _body = null
    _body = body

    const _url =
      this.host +
      `/invoice/${encodeURIComponent(String(invoiceId))}/delegate` +
      "?ts=" +
      new Date().getTime()
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    return XHR.sendCommand("PUT", _url, headers, _body, this.fetchImpl)
      .then(doc => new InvoiceDto(doc.body as JSON))
      .catch(err => this.handleError(err))
  }

  /**
   *
   * @summary Modifies an invoice
   * @param body
   */
  reassignInvoice(body?: InvoiceDto): Promise<InvoiceDto> {
    let _body = null
    _body = body

    const _url = this.host + `/invoice/reassign` + "?ts=" + new Date().getTime()
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    return XHR.sendCommand("POST", _url, headers, _body, this.fetchImpl)
      .then(doc => new InvoiceDto(doc.body as JSON))
      .catch(err => this.handleError(err))
  }

  /**
   *
   * @summary Gets all invoices for author at date
   * @param body
   * @param userId
   * @param serviceId
   * @param secretFKeys
   */
  removeCodes(
    userId: string,
    serviceId: string,
    secretFKeys: string,
    body?: Array<string>
  ): Promise<Array<InvoiceDto>> {
    let _body = null
    _body = body

    const _url =
      this.host +
      `/invoice/byauthor/${encodeURIComponent(String(userId))}/service/${encodeURIComponent(
        String(serviceId)
      )}` +
      "?ts=" +
      new Date().getTime() +
      (secretFKeys ? "&secretFKeys=" + encodeURIComponent(String(secretFKeys)) : "")
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    return XHR.sendCommand("POST", _url, headers, _body, this.fetchImpl)
      .then(doc => (doc.body as Array<JSON>).map(it => new InvoiceDto(it)))
      .catch(err => this.handleError(err))
  }

  /**
   * Keys must be delimited by coma
   * @summary Update delegations in healthElements.
   * @param body
   */
  setInvoicesDelegations(body?: Array<IcureStubDto>): Promise<Array<IcureStubDto>> {
    let _body = null
    _body = body

    const _url = this.host + `/invoice/delegations` + "?ts=" + new Date().getTime()
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    return XHR.sendCommand("POST", _url, headers, _body, this.fetchImpl)
      .then(doc => (doc.body as Array<JSON>).map(it => new IcureStubDto(it)))
      .catch(err => this.handleError(err))
  }

  /**
   *
   * @summary Gets all invoices for author at date
   * @param invoiceId
   * @param scheme
   * @param forcedValue
   */
  validate(invoiceId: string, scheme: string, forcedValue: string): Promise<InvoiceDto> {
    let _body = null

    const _url =
      this.host +
      `/invoice/validate/${encodeURIComponent(String(invoiceId))}` +
      "?ts=" +
      new Date().getTime() +
      (scheme ? "&scheme=" + encodeURIComponent(String(scheme)) : "") +
      (forcedValue ? "&forcedValue=" + encodeURIComponent(String(forcedValue)) : "")
    let headers = this.headers
    return XHR.sendCommand("POST", _url, headers, _body, this.fetchImpl)
      .then(doc => new InvoiceDto(doc.body as JSON))
      .catch(err => this.handleError(err))
  }
}
