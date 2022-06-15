import './Navbar.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="nav-container">
      <div className="nav-top-container">
        <div className="nav-announcement-bar-container">
          <Swiper modules={[Autoplay]} autoplay={{ delay: 5000 }} loop={true}>
            <SwiperSlide>
              <p>Shop Women's New Arrivals</p>
            </SwiperSlide>
            <SwiperSlide>
              <p>Shop Men's New Arrivals</p>
            </SwiperSlide>
            <SwiperSlide>
              <p>Free Domestic Shipping Over $150 and 30 Day Returns</p>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="nav-info-links-container">
          <ul className="nav-info-links-list">
            <li className="nav-info-links-item">
              <button className="info-btn">Info</button>
            </li>
            <li className="nav-info-links-item">
              <Link to="/account/login" className="login-link">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <hr className="line" />
      <div className="nav-main-container"></div>
    </nav>
  );
}

export default Navbar;
