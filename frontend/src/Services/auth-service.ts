import axios from 'axios'
import { AxiosResponse } from 'axios'
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
      throw new Error(error)
    }
  },
})
