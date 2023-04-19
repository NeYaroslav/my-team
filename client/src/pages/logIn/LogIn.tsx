import { LogInForm } from '../../components/logIn'
import { LocalLink } from '../../ui'
import classes from './logIn.module.scss'

const LogIn: React.FC = () => {
  return (
    <div className={classes['log-in']}>
      <h1 className={classes['log-in__title']}>Log In to your account!</h1>
      <LogInForm />
      <p className={classes['log-in__message']}>
        Do not you have an account?
        <LocalLink to={'/sign-up'}>Sign Up</LocalLink>
      </p>
    </div>
  )
}

export default LogIn
