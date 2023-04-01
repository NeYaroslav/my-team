import React, { memo } from 'react'
import { CgInfo } from 'react-icons/cg'
import classes from './mainError.module.scss'

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const MainError: React.FC<Props> = ({ children }) => {
  return (
    <div className={classes['main-error']}>
      <CgInfo />
      {children ?? ''}
    </div>
  )
}

export default memo(MainError)
