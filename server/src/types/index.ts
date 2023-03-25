import { Response, Request, NextFunction } from 'express'

type Error = {
  message?: string
  error?: any
}

type ResponseWithError = Response<
  Error & {
    [index: string]: any
  }
>

type RequestWithAuthId = Request<
  { [key: string]: unknown },
  any,
  {
    authId: number
    [key: string]: unknown
  }
>

export type { ResponseWithError, Request, NextFunction, RequestWithAuthId }
