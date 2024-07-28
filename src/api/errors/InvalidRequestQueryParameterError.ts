import { ResponseError } from "./ResponseError";

export class InvalidRequestQueryParameterError extends ResponseError {
  constructor (
    message: string,
    details: string,
    request: URL,
    suggestion?: string,
  ) {
    super(
      400,
      'INVALID_REQUEST_QUERY_PARAMETER',
      message,
      details,
      request,
      suggestion
    );
  }
}