import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-info-login">
        <p>Free Domestic Shipping Over $150 and 30 Day return</p>
        <button className="btn-info">Info</button>
        <button className="btn-login">Login</button>
      </div>
      <div className="navbar-category">
        <h1>
          <Link to="/">ALPHALETE</Link>
        </h1>

        <div>
          <button className="btn-men">MEN</button>
          <button className="btn-women">WOMEN</button>
        </div>
        <div>
          <button>look</button>
          <button>cart</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
