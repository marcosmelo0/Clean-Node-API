import { MissingParamError } from '../../errors/missing-params-errors'
import { badRequest } from '../../helpers/http-helper'
import { HttpResponse, HttpRequest } from './protocols/http'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return badRequest(new MissingParamError('name'))
    }
    if (!httpRequest.body.email) {
      return badRequest(new MissingParamError('email'))
    }
  }
}
