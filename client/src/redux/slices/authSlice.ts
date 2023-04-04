import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type initState = null | string

const authSlice = createSlice({
  initialState: null as initState,
  name: 'auth',
  reducers: {
    setToken: (state, { payload }: PayloadAction<string>) => {
      state = payload
      return state
    },
    clearToken: (state) => {
      state = null
      return state
    },
  },
})

export const { clearToken, setToken } = authSlice.actions
export default authSlice.reducer
