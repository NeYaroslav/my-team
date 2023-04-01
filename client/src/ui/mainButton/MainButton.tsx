import React, { memo } from 'react'
import classes from './mainButton.module.scss'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  invert?: true
}

const MainButton: React.FC<Props> = ({
  className,
  invert = false,
  ...rest
}) => {
  const fullClassName = `${classes['main-button']} ${
    classes[`main-button_${invert ? 'invert' : 'regular'}`]
  } ${className ?? ''}`

  return <button className={fullClassName} {...rest} />
}

export default memo(MainButton)
