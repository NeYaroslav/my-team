import rootApi from './rootApi'
import type {
  ILogInCredentials,
  ISignUpCredentails,
  IAuthResponse,
} from '../../types'

const authApi = rootApi.injectEndpoints({
  endpoints: (buidler) => ({
    signUp: buidler.mutation<IAuthResponse, ISignUpCredentails>({
      query: (signUpCredential) => ({
        url: 'auth/register',
        method: 'POST',
        body: signUpCredential,
      }),
    }),
    logIn: buidler.mutation<IAuthResponse, ILogInCredentials>({
      query: (logInCredential) => ({
        url: 'auth/login',
        method: 'POST',
        body: logInCredential,
      }),
    }),
    refresh: buidler.query<IAuthResponse, void>({
      query: () => 'auth/refresh',
    }),
  }),
})

export const { useSignUpMutation, useLogInMutation, useRefreshQuery } = authApi
