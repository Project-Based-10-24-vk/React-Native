import { Buffer } from 'buffer'
import * as SecureStore from 'expo-secure-store'

export const parseJwt = (token) => {
  const base64Url = token.split('.')[1]
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')

  const jsonPayload = decodeURIComponent(
    Buffer.from(base64, 'base64')
      .toString('binary')
      .split('')
      .map((c) => {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
      })
      .join('')
  )
  return JSON.parse(jsonPayload)
}

export const getAccessToken = async () => {
  const token = await SecureStore.getItemAsync('accessToken')
  return token
}

const createQueryParamsString = (query) => {
  const queryParams = new URLSearchParams()

  Object.entries(query).forEach(([key, value]) => {
    queryParams.append(key, value)
  })

  return queryParams.toString()
}

export const createUrlPath = (URL, params = '', query = {}) => {
  const queryParams = createQueryParamsString(query)
  const queryParamsString = queryParams ? `?${queryParams}` : ''
  const paramsString = params ? `/${params}` : ''

  return `${URL}${paramsString}${queryParamsString}`
}
