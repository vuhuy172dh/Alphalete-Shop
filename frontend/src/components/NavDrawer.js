import style from './NavDrawer.module.css'
import useWindowSize from '../hooks/useWindowSize'

function NavDrawer(props) {
  const size = useWindowSize()
  console.log(size.width)
  return (
    <div
      className={
        props.isMenuClicked === true && size.width <= 800
          ? style['navdrawer-open']
          : style['navdrawer']
      }
    >
      <div
        onClick={props.handleMenuClick}
        className={
          props.isMenuClicked === true && size.width <= 800
            ? style['navdrawer-backdrop-open']
            : style['navdrawer-backdrop']
        }
      ></div>
      <div className={style['navdrawer-container']}>
        <div className={style['navdrawer-header']}>Hello World</div>
        <div className={style['navdrawer-scroller']}></div>
      </div>
    </div>
  )
}

export default NavDrawer
