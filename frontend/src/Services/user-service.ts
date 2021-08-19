import axios from '../instance'

interface ChangePasswordResponse {
  statusCode: string
  message: string
}

function APIService(): UserService {
  return {
    changePassword: async (
      oldPassword: string,
      newPassword: string,
    ): Promise<APIResponseSuccess<ChangePasswordResponse> | APIResponseError> => {
      return axios.post(`users/change-password`, {
        oldPassword,
        newPassword,
      })
    },
  }
}

const apiService = APIService()

export interface UserService {
  changePassword: (
    oldPassword: string,
    newPassword: string,
  ) => Promise<APIResponseSuccess<ChangePasswordResponse> | APIResponseError>
}

export default apiService
