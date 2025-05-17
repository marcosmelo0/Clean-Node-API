import { MissingParamError } from '../errors/missing-params-errors'
import { HttpResponse } from '../presentation/controllers/protocols/http'

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error
})
