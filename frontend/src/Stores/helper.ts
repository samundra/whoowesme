import { AxiosError } from 'axios'

export const parseErrorMessage = (error: AxiosError) => error.message
