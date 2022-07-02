import style from './NavDrawer.module.css'
import useWindowSize from '../hooks/useWindowSize'
import { useState } from 'react'

function NavDrawer(props) {
  const size = useWindowSize()
  const [btnClicked, setBtnClicked] = useState(false)

  function clickMenBtn() {
    setBtnClicked(false)
  }

  function clickWomenBtn() {
    setBtnClicked(true)
  }
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
        <div className={style['navdrawer-header']}>
          <ul className={style['header-button']}>
            <li>
              <button
                className={
                  btnClicked === false
                    ? style['men-btn-active']
                    : style['men-btn']
                }
                onClick={clickMenBtn}
              >
                MEN
              </button>
            </li>
            <li>
              <button
                className={
                  btnClicked === true
                    ? style['women-btn-active']
                    : style['women-btn']
                }
                onClick={clickWomenBtn}
              >
                WOMEN
              </button>
            </li>
          </ul>
        </div>
        <div className={style['navdrawer-scroller']}></div>
      </div>
    </div>
  )
}

export default NavDrawer
