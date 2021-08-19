import Axios, { AxiosRequestConfig, AxiosResponse, Method } from 'axios'

export interface ResponseError<T> {
  status: number
  data: T
  url: string
  method: Method
}

const isSuccessful = (code: number) =>
  [
    200, // helps to break into multiple
    201,
    202,
    203,
    204,
    205,
    206,
    207,
    208,
    226,
    300,
    301,
    302,
    303,
    304,
    305,
    306,
    307,
    308,
  ].includes(code)

const client = Axios.create({
  headers: { 'Content-Type': 'application/json' },
  validateStatus: (status: Number) => status >= 200 && status <= 503,
  withCredentials: true,
})

const onSuccess = (response: AxiosResponse) => {
  if (isSuccessful(response.status)) return response.data
  const error: ResponseError<typeof response.data> = {
    status: response.status,
    data: response.data,
    url: response.config?.url || '',
    method: response.config.method || ('GET' as Method),
  }
  throw error
}

interface FailureFrom {
  config: AxiosRequestConfig
}

const onFailure = (from: FailureFrom) => {
  const error: ResponseError<typeof from> = {
    status: 500,
    data: from,
    url: from.config.url || '',
    method: from.config.method || ('GET' as Method),
  }
  throw error
}

client.interceptors.response.use(onSuccess, onFailure)

export default client
