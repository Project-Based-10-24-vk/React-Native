import { URLs } from '../constants/request'
import { axiosClient } from '../plugins/axiosClient'

export const AuthService = {
  login: (userData) => {
    return axiosClient.post(URLs.auth.login, userData)
  },
  logout: () => {
    return axiosClient.post(URLs.auth.logout)
  }
}
