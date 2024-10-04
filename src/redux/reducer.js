import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { AuthService } from '~/services/auth-service'
import { parseJwt } from '~/utils/helper-functions'
import * as SecureStore from 'expo-secure-store'

const initialState = {
  userId: '',
  userRole: '',
  authLoading: false,
  loading: true,
  pageLoad: false,
  error: '',
  isFirstLogin: true
}

export const loginUser = createAsyncThunk(
  'appMain/loginUser',
  async (userData, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await AuthService.login(userData)
      await SecureStore.setItemAsync('accessToken', data.accessToken)
      dispatch(setUser(data.accessToken))
    } catch (e) {
      const error = e
      return rejectWithValue(error.response?.data.code)
    }
  }
)

export const mainSlice = createSlice({
  name: 'appMain',
  initialState,
  reducers: {
    setUser(state, action) {
      const userData = parseJwt(action.payload)
      state.userId = userData.id
      state.userRole = userData.role
      state.isFirstLogin = userData.isFirstLogin
    },
    logout(state) {
      state.userId = initialState.userId
      state.userRole = initialState.userRole
      state.isFirstLogin = initialState.isFirstLogin
    },
    markFirstLoginComplete(state) {
      state.isFirstLogin = false
    },
    setPageLoading(state, action) {
      state.pageLoad = action.payload
    }
  }
})
const { actions, reducer } = mainSlice

export const { setUser, logout, markFirstLoginComplete, setPageLoading } =
  actions

export default reducer
