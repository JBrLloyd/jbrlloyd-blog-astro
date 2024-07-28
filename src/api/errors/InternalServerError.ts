
import { ResponseError } from "./ResponseError";

export class InternalServerError extends ResponseError {
  constructor (
    message: string,
    details: string,
    requestUrl: URL,
    suggestion?: string,
  ) {
    super(
      500,
      'INTERNAL_SERVER_ERROR',
      message,
      details,
      requestUrl,
      suggestion
    );
  }
}