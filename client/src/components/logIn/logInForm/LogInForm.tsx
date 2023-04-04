import { BsKeyFill, BsPersonFill } from 'react-icons/bs'
import { MainButton, MainError, MainInput } from '../../../ui'
import withLogInForm, { WithProps } from './withLogInForm'
import classes from './logInForm.module.scss'

interface Props extends WithProps {
  className?: string
}

const LogInForm: React.FC<Props> = ({
  className,
  register,
  onSubmit,
  errors,
  isLoading,
}) => {
  const fullClassName = `${classes['log-in-form']} ${className ?? ''}`

  return (
    <form className={fullClassName} onSubmit={onSubmit}>
      <MainInput
        id="username"
        placeholder="Username"
        type={'text'}
        icon={<BsPersonFill />}
        autoComplete="username"
        withError={Boolean(errors.username)}
        {...register('username')}
      />
      {errors.username && <MainError>{errors.username.message}</MainError>}
      <MainInput
        id="password"
        type={'password'}
        placeholder="Password"
        icon={<BsKeyFill />}
        autoComplete="password"
        withError={Boolean(errors.password)}
        {...register('password')}
      />
      {errors.password && <MainError>{errors.password.message}</MainError>}
      {errors.root && <MainError>{errors.root.message}</MainError>}
      <MainButton
        disabled={isLoading}
        className={classes['log-in-form__button']}
        withSpinner={isLoading}
      >
        {isLoading ? '' : 'Log in'}
      </MainButton>
    </form>
  )
}

export default withLogInForm(LogInForm)
