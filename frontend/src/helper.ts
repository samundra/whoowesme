import { AxiosError } from 'axios'

export function extractErrorMessage(error: AxiosError): string {
  if (error && error.response && error.response?.data) {
    return error.response?.data?.message
  } else if (error.request) {
    return error.request
  }

  return error.message
}
