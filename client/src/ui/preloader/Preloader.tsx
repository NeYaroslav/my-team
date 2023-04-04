import React from 'react'
import classes from './preloader.module.scss'

const Preloader = () => {
  return (
    <div className={classes.preloader}>
      <div className={classes["preloader__item"]}></div>
      <div className={classes["preloader__item"]}></div>
      <div className={classes["preloader__item"]}></div>
    </div>
  )
}

export default Preloader