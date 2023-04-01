import React, { memo, forwardRef } from 'react'
import classes from './mainInput.module.scss'

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  id: string
  icon?: React.ReactNode
  withError?: boolean
}

const MainInput = forwardRef<HTMLInputElement, Props>(
  ({ icon, className, id, withError, ...rest }, ref) => {
    const fullClassName = `${classes['main-input']} ${withError? classes['main-input_error']: ''} ${className ?? ''}`

    return (
      <div className={fullClassName}>
        {icon}
        <input  type="text" id={id} {...rest} ref={ref} />
        <label htmlFor={id} />
      </div>
    )
  }
)

export default memo(MainInput)
