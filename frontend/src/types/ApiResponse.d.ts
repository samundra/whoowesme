interface APIResponseSuccess<T extends object> {
  statusCode: string | number
  message: string
  result?: T
}

interface APIResponseError extends WhoAPIResponse {
  statusCode: string | number
  message: string[]
  error: string
}
