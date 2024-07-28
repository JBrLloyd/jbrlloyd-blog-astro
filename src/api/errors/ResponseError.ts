export type ResponseErrorCode =
  'INVALID_REQUEST_QUERY_PARAMETER' |
  'INTERNAL_SERVER_ERROR'

export type ResponseErrorDetails = {
  code: ResponseErrorCode,
  message: string,
  details: string,
  timestamp: string
  path: string,
  suggestion?: string,
}

export type ResponseErrorBody = {
  status: string,
  statusCode: number,
  requestId: string,
  error: ResponseErrorDetails,
}

export class ResponseError extends Error {
  errorStatus: string = 'error';

  #code: ResponseErrorCode;
  #details: string;
  #requestUrl: URL;
  #suggestion?: string;

  errorCode: number;

  constructor(
    errorCode: number,
    code: ResponseErrorCode,
    message: string,
    details: string,
    requestUrl: URL,
    suggestion?: string,
  ) {
    super(message);

    this.errorCode = errorCode;
    this.#code = code;
    this.#details = details;
    this.#requestUrl = requestUrl;
    this.#suggestion = suggestion;

    Object.setPrototypeOf(this, ResponseError.prototype);
  }

  errorDetails(): ResponseErrorDetails {
    return {
      code: this.#code,
      message: this.message,
      details: this.#details,
      timestamp: new Date().toISOString(),
      path: this.#requestUrl.pathname,
      suggestion: this.#suggestion,
    }
  }
}
