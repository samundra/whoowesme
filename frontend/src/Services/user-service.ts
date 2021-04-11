import axios from '../instance'

function APIService(): UserService {
  return {
    changePassword: async (
      oldPassword: string,
      newPassword: string,
    ): Promise<APIResponseSuccess<any> | APIResponseError> => {
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
  ) => Promise<APIResponseSuccess<any> | APIResponseError>
}

export default apiService
