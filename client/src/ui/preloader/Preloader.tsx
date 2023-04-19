import classes from './preloader.module.scss'

const Preloader: React.FC = () => {
  return (
    <div className={classes.preloader}>
      <div className={classes['preloader__item']}></div>
      <div className={classes['preloader__item']}></div>
      <div className={classes['preloader__item']}></div>
    </div>
  )
}

export default Preloader
