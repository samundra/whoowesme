import axios from '../instance-axios'

interface APIResponse {
  statusCode: string | number
  message: string
}

function APIService(): UserService {
  return {
    changePassword: async (oldPassword: string, newPassword: string): Promise<APIResponse> => {
      console.log({ oldPassword, newPassword })
      return axios.post(`users/change-password`, {
        oldPassword,
        newPassword,
      })
    },
  }
}

const apiService = APIService()

export interface UserService {
  changePassword: (oldPassword: string, newPassword: string) => Promise<APIResponse>
}

export default apiService
