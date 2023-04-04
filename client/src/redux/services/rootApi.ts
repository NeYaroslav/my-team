import {
  createApi,
  fetchBaseQuery,
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryMeta,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react'
import { clearToken, setToken } from '../slices/authSlice'
import { RootState } from '../store'

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:2007',
  headers: {
    'Access-Control-Allow-Credentials': 'true',
  },
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth
    if (token !== null) {
      headers.set('authorization', `Bearer ${token}`)
    }
    return headers
  },
})

const baseQueryWithRefresh: BaseQueryFn<
  string | FetchArgs,
  unknown,
  string,
  { shout?: boolean },
  FetchBaseQueryMeta
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions)

  if (result.error?.status === 403) {
    const refreshResponse = await baseQuery('/auth/refresh', api, extraOptions)
    if (refreshResponse.data !== null) {
      api.dispatch(setToken(refreshResponse.data as string))
      result = await baseQuery(args, api, extraOptions)
    } else {
      console.log('log out')
      api.dispatch(clearToken())
    }
  }
  if (result.error) console.log(result.error)
  const error = result.error?.data

  return result.data
    ? {
        data: result.data,
      }
    : {
        error:
          typeof error === 'object' &&
          error !== null &&
          'message' in error &&
          typeof error.message === 'string'
            ? error.message
            : 'Ooops, something went wrong :(',
      }
}

const rootApi = createApi({
  baseQuery: baseQueryWithRefresh,
  reducerPath: 'api',
  endpoints: () => ({}),
})

export default rootApi
