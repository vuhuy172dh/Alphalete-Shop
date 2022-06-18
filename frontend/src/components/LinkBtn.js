import { Link } from 'react-router-dom';
import './LinkBtn.css';

function LinkBtn(props) {
  return (
    <div className="link-container">
      <Link
        to={props.link}
        style={{
          fontWeight: props.fontweight,
          color: props.color,
          fontSize: props.fontsize,
          paddingRight: props.padding ? props.padding : 0,
          paddingLeft: props.padding ? props.padding : 0,
        }}
        className="link-wrapper"
      >
        {props.children}
      </Link>
    </div>
  );
}

export default LinkBtn;
