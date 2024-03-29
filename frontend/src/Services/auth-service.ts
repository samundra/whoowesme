import axios, { AxiosResponse } from 'axios'
import config from '../config'

interface ApiAuthService {
  attemptLogin: <T>(email: string, password: string) => Promise<AxiosResponse<T>>
}

export default (): ApiAuthService => ({
  attemptLogin: async <T>(email: string, password: string): Promise<AxiosResponse<T>> => {
    try {
      return axios.post(
        `${config.apiBaseUrl}auth/login`,
        { email, password },
        {
          timeout: 1000,
          headers: { 'Access-Control-Allow-Origin': ['*'] },
        },
      )
    } catch (error) {
      // @ts-ignore
      throw new Error(error)
    }
  },
})
