import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const authSlice = createSlice({
  initialState: null as null | string,
  name: 'auth',
  reducers: {
    setToken: (state, { payload }: PayloadAction<string>) => {
      state = payload
    },
    clearToken: (state) => {
      state = null
    },
  },
})

export const { clearToken, setToken } = authSlice.actions
export default authSlice.reducer
