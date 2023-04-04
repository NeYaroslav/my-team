import { BsKeyFill, BsPersonBadge, BsPersonFill } from 'react-icons/bs'
import { MainButton, MainError, MainInput } from '../../../ui'
import withSignUpForm, { WithProps } from './withSignUpForm'
import classes from './signUpForm.module.scss'

type Props = WithProps & {
  className?: string
}

const SignUpForm: React.FC<Props> = ({
  className,
  register,
  onSubmit,
  errors,
  isLoading,
}) => {
  const fullClassName = `${classes['sign-up-form']} ${className ?? ''}`

  return (
    <form className={fullClassName} onSubmit={onSubmit}>
      <MainInput
        id="username"
        placeholder="Username"
        type={'text'}
        icon={<BsPersonBadge />}
        autoComplete="username"
        withError={Boolean(errors.username)}
        {...register('username')}
      />
      {errors.username && <MainError>{errors.username.message}</MainError>}
      <MainInput
        id="name"
        type={'text'}
        placeholder="Name"
        icon={<BsPersonFill />}
        autoComplete="name"
        withError={Boolean(errors.name)}
        {...register('name')}
      />
      {errors.name && <MainError>{errors.name.message}</MainError>}
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
      <MainInput
        id="confirmedPassword"
        type={'password'}
        placeholder="Confirm password"
        icon={<BsKeyFill />}
        autoComplete="password"
        withError={Boolean(errors.confirmedPassword)}
        {...register('confirmedPassword')}
      />
      {errors.confirmedPassword && (
        <MainError>{errors.confirmedPassword.message}</MainError>
      )}
      {errors.root && <MainError>{errors.root.message}</MainError>}
      <MainButton
        disabled={isLoading}
        className={classes['sign-up-form__button']}
      >
        {isLoading ? 'Loading...' : 'Sign up'}
      </MainButton>
    </form>
  )
}

export default withSignUpForm(SignUpForm)
