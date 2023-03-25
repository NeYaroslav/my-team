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

type AuthIdReq = {
  authId: number
  [key: string]: unknown
}

type RequestWithAuthTeams = Request<
  { [key: string]: string },
  any,
  AuthIdReq & {
    authTeams: number[]
  }
>

type RequestWithAuthId = Request<{ [key: string]: string }, any, AuthIdReq>

export type {
  ResponseWithError,
  Request,
  NextFunction,
  RequestWithAuthId,
  RequestWithAuthTeams,
}
