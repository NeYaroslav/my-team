import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IAuthResponse, ValueOrNull } from '../../types'
import { RootState } from '../store'

const initialState: ValueOrNull<IAuthResponse> = {
  token: null,
  username: null,
}

const authSlice = createSlice({
  initialState,
  name: 'auth',
  reducers: {
    setToken: (
      state,
      { payload: { token, username } }: PayloadAction<IAuthResponse>
    ) => {
      state.token = token
      state.username = username
      return state
    },
    clearToken: (state) => {
      state.token = null
      state.username = null
      return state
    },
  },
})

export const tokenSelector = (data: RootState) => data.auth.token
export const usernameSelector = (data: RootState) => data.auth.username

export const { clearToken, setToken } = authSlice.actions
export default authSlice.reducer
