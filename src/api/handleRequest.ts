import { v4 as uuidv4 } from 'uuid';
import { ResponseError, type ResponseErrorBody } from './errors/ResponseError';
import { validateIntGreaterThanZero } from './requestQueryParamValidators/numberValidator.';
import { InternalServerError } from './errors/InternalServerError';

export const handleRequest = async <T>(
  requestUrl: URL,
  handler: (requestId: string) => Promise<T>
) => {
  const requestId = uuidv4();

  try {
    const data = await handler(requestId)

    return new Response(
      JSON.stringify(data),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
  } catch (e) {
    if (e instanceof ResponseError) {
      const errorBody: ResponseErrorBody = {
        status: e.errorStatus,
        statusCode: e.errorCode,
        error: e.errorDetails(),
        requestId: requestId,
      }

      return new Response(
        JSON.stringify(errorBody),
        {
          status: errorBody.statusCode,
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
    }

    console.error(`Unexpected Error (RequestId: ${requestId}) on path '${requestUrl}': ${JSON.stringify(e)}`);

    const internalServerError = new InternalServerError(
      'Internal Server Error',
      'There was an unknown error',
      requestUrl,
    )

    const errorBody: ResponseErrorBody = {
      status: internalServerError.errorStatus,
      statusCode: internalServerError.errorCode,
      requestId: requestId,
      error: internalServerError.errorDetails()
    }

    return new Response(
      JSON.stringify(errorBody),
      {
        status: errorBody.statusCode,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
  }
}

export type PaginatedResponse<T> = {
  total: number
  pageTotal: number
  currentPage: number
  nextPage: number | null
  data: T[]
}

export const handlePaginationRequest = async <T>(
  requestUrl: URL,
  dataCallback: () => Promise<T[]>
) => await handleRequest(
  requestUrl,
  async (requestId) => await paginateResponse(requestId, requestUrl, dataCallback)
)

const pageNumberSearchParamKey = 'page';
const pageSizeSearchParamKey = 'page_size';

const paginateResponse = async <T>(
  requestId: string,
  requestUrl: URL,
  dataCallback: (requestId: string) => Promise<T[]>
) => {
  const pageNumberParam = requestUrl.searchParams.get(pageNumberSearchParamKey)
  const pageNumber = !pageNumberParam
    ? 1
    : validateIntGreaterThanZero(
      pageNumberSearchParamKey,
      pageNumberParam,
      requestUrl);

  const pageSizeParam = requestUrl.searchParams.get(pageSizeSearchParamKey)
  const pageSize = !pageSizeParam
    ? 10
    : validateIntGreaterThanZero(
        pageSizeSearchParamKey,
        pageSizeParam,
        requestUrl);

  const data = await dataCallback(requestId);

  const startIndex = (pageNumber - 1) * pageSize;
  const endIndex = pageNumber * pageSize;

  const pageData = data.slice(startIndex, endIndex)

  const result: PaginatedResponse<T> = {
    total: data.length,
    pageTotal: pageData.length,
    currentPage: pageNumber,
    nextPage: Math.ceil(data.length / pageSize) <= pageNumber
      ? null
      : pageNumber + 1,
    data: pageData,
  };

  return result
}