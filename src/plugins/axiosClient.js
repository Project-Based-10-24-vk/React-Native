import axios from 'axios'
import qs from 'qs'
import { getAccessToken } from '~/utils/helper-functions'

let axiosClient

async function initAxiosClient() {
  const token = await getAccessToken()

  axiosClient = axios.create({
    withCredentials: true,
    baseURL: process.env.API_BASE_PATH,
    headers: {
      cookie: token
    },
    paramsSerializer: (params) => {
      return encodeURI(qs.stringify(params, { arrayFormat: 'repeat' }))
    }
  })
}

initAxiosClient()

export { axiosClient }
