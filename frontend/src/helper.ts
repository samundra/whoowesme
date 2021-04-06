import { AxiosError } from 'axios'

export function parseError(error: AxiosError): string[] {
  if (error && error.response && error.response.data) {
    const resp = error.response.data
    return resp.message
  }

  return [error.message]
}

export function extractErrorMessage(error: AxiosError): string {
  if (error && error.response && error.response?.data) {
    return error.response?.data?.message
  } else if (error.request) {
    return error.request
  }

  return error.message
}
