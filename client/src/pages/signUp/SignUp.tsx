import React from 'react'
import { SignUpForm } from '../../components/signUp'
import { LocalLink } from '../../ui'
import classes from './signUp.module.scss'

const SignUp: React.FC = () => {
  return (
    <div className={classes['sign-up']}>
      <h1 className={classes['sign-up__title']}>Sign up a new account!</h1>
      <SignUpForm />
      <p className={classes['sign-up__message']}>
        Do you have an account yet?
        <LocalLink to={'/'}>Log In</LocalLink>
      </p>
    </div>
  )
}

export default SignUp
