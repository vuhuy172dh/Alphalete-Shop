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
        }}
        className="link-wrapper"
      >
        {props.children}
      </Link>
    </div>
  );
}

export default LinkBtn;
