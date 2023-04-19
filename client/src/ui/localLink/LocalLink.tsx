import { memo } from 'react'
import { Link, LinkProps } from 'react-router-dom'
import classes from './localLink.module.scss'

interface Props extends LinkProps, React.RefAttributes<HTMLAnchorElement> {}

const LocalLink: React.FC<Props> = ({ className, ...rest }) => {
  const fullClassName = `${classes['local-link']} ${className ?? ''}`

  return <Link className={fullClassName} {...rest} />
}

export default memo(LocalLink)
