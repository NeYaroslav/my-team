import rootApi from './rootApi'
import type { ILogInCredentials, ISignUpCredentails } from '../../types/apiRequests'
import type { IToken } from '../../types/apiResponces'

const authApi = rootApi.injectEndpoints({
  endpoints: (buidler) => ({
    signUp: buidler.mutation<IToken, ISignUpCredentails>({
      query: (signUpCredential) => ({
        url: 'auth/register',
        method: 'POST',
        body: signUpCredential,
      }),
    }),
    logIn: buidler.mutation<IToken, ILogInCredentials>({
      query: (logInCredential) => ({
        url: 'auth/login',
        method: 'POST',
        body: logInCredential,
      }),
    })
  }),
})

export const { useSignUpMutation, useLogInMutation } = authApi
