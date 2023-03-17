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

export type { ResponseWithError, Request, NextFunction }
