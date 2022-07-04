import style from './HamburgerMenu.module.css'

function HamburgerMenu(props) {
  return (
    <button
      className={
        props.isClicked ? [style.btn, style.active].join(' ') : style['btn']
      }
    >
      <span className={style['first-span']}></span>
      <span className={style['middle-span']}></span>
      <span className={style['last-span']}></span>
    </button>
  )
}

export default HamburgerMenu
