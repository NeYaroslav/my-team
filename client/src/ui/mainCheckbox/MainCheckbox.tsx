import React, { forwardRef } from 'react'
import classes from './mainCheckbox.module.scss'
import { BsCheck } from 'react-icons/bs'

interface Props
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  id: string
}

const MainCheckbox: React.FC<Props> = forwardRef<HTMLInputElement, Props>(
  ({ id, placeholder, className, ...rest }, ref) => {
    const fullClassName = `${classes['main-checkbox']} ${className ?? ''}`
    return (
      <div className={fullClassName}>
        <input type="checkbox" id={id} {...rest} ref={ref} />
        <label htmlFor={id} className={classes['main-checkbox__box']}>
          <BsCheck className={classes['main-checkbox__icon']} />
        </label>
        <label htmlFor={id} className={classes['main-checkbox__placeholder']}>
          {placeholder}
        </label>
      </div>
    )
  }
)

export default MainCheckbox
