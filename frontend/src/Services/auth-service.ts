import axios from 'axios'
import config from '../config'

interface ApiAuthService {
  attemptLogin: (email: string, password: string) => Promise<boolean>
}

export default (): ApiAuthService => ({
  attemptLogin: async (email: string, password: string): Promise<boolean> => {
    console.log({ email, password, attemptLogin: true })

    try {
      const accessToken = await axios.post(
        `${config.apiBaseUrl}auth/login`,
        {
          email,
          password,
        },
        {
          timeout: 1000,
          headers: {
            'Access-Control-Allow-Origin': ['*'],
          },
        },
      )
      console.log({ accessToken })

      return true
    } catch (error) {
      console.error({ error })
    }

    return false
  },
})
