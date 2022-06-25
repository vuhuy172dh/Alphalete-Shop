import { Link } from 'react-router-dom'
import style from './LinkBtn.module.css'

function LinkBtn(props) {
  return (
    <div className={style.link_container}>
      <Link
        to={props.link}
        style={{
          fontWeight: props.fontweight,
          color: props.color,
          opacity: props.opacity,
          fontSize: props.fontsize,
          paddingRight: props.padding ? props.padding : 0,
          paddingLeft: props.padding ? props.padding : 0,
          paddingTop: props.paddingtop ? props.paddingtop : 0,
          paddingBottom: props.paddingbottom ? props.paddingbottom : 0
        }}
        className={style.link_wrapper}
      >
        {props.children}
      </Link>
    </div>
  )
}

export default LinkBtn
