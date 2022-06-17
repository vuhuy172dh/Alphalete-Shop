import './Navbar.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
  const [isShown, setIsShown] = useState(false);

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
              <ul className="info-links-container">
                <li>
                  <a href="https://support.alphaleteathletics.com/hc/en-us">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="https://support.alphaleteathletics.com/hc/en-us/articles/360058520571-Return-exchange-policy">
                    Returns
                  </a>
                </li>
                <li>
                  <a href="https://info.alphaleteathletics.com/pages/about-us">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="https://info.alphaleteathletics.com/pages/careers">
                    Careers
                  </a>
                </li>
                <li>
                  <Link to="/policies/privacy-policy">Policy</Link>
                </li>
              </ul>
            </li>
            <li className="nav-login-links-item">
              <Link to="/account/login" className="login-link">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <hr className="line" />
      <div className="nav-main-container">
        <div className="nav-logo">
          <Link to="/" className="nav-logo-wrapper">
            <img
              src="https://cdn.shopify.com/s/files/1/0667/0133/files/rainbow-flag_1024x1024.png?v=11808118591447227889"
              alt="rainbow-flag"
            />
            <p>ALPHALETE</p>
          </Link>
        </div>
        <ul className="nav-links-wrapper">
          <li
            className="men-links-wrapper"
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
          >
            <Link to="/collections/mens-new" className="men-link">
              <span>MEN</span>
            </Link>
            <div className="men-component"></div>
          </li>
          <li>
            <Link to="/collections/womens-new" className="women-link">
              <span>WOMEN</span>
            </Link>
          </li>
        </ul>
        <ul className="nav-items-wrapper">
          <li>
            <button className="search-btn">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </li>
          <li>
            <button className="cart-btn">
              <i className="fa-solid fa-cart-shopping"></i>
            </button>
          </li>
        </ul>
      </div>
      <div
        className={
          isShown ? 'nav-expandable-component open' : 'nav-expandable-component'
        }
      ></div>
    </nav>
  );
}

export default Navbar;
