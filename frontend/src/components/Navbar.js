import './Navbar.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-info-login">
        <Swiper modules={[Autoplay]} spaceBetween={100} autoplay={true}>
          <SwiperSlide>
            <p>Free Domestic Shipping Over $150 and 30 Day Returns</p>
          </SwiperSlide>
          <SwiperSlide>
            <p>Women's New Arrivals</p>
          </SwiperSlide>
          <SwiperSlide>
            <p>Men's New Arrivals</p>
          </SwiperSlide>
        </Swiper>
        <ul>
          <li>Info</li>
          <li>Login</li>
        </ul>
      </div>
      <div className="navbar-category">
        <Link to="/" className="navbar-title">
          ALPHALETE
        </Link>
        <ul>
          <li>MEN</li>
          <li>WOMEN</li>
        </ul>
        <div>
          <button>look</button>
          <button>cart</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
