import './Navbar.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import LinkBtn from './LinkBtn';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
  const [isShown, setIsShown] = useState(false);

  return (
    <header>
      <section className="section-navbar">
        <div className={isShown ? 'nav-backdrop open' : 'nav-backdrop'}></div>
        <nav className="nav">
          <div className="nav-inner">
            <div className="nav-top-container">
              <div className="nav-top-wrapper">
                <div className="nav-announcement-bar-container">
                  <Swiper
                    modules={[Autoplay]}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                  >
                    <SwiperSlide className="nav-announce-slide">
                      <p>Free Domestic Shipping Over $150 and 30 Day Returns</p>
                    </SwiperSlide>
                    <SwiperSlide className="nav-announce-slide">
                      <p>Shop Men's New Arrivals</p>
                    </SwiperSlide>
                    <SwiperSlide className="nav-announce-slide">
                      <p>Shop Women's New Arrivals</p>
                    </SwiperSlide>
                  </Swiper>
                </div>
                <ul className="nav-info-links-container">
                  <li>
                    <button className="info-links-btn">Info</button>
                  </li>
                  <li>
                    <LinkBtn
                      link="/account/login"
                      fontsize="0.8rem"
                      fontweight="600"
                      color="#f5f5f5"
                      className="login-links-btn"
                    >
                      Login
                    </LinkBtn>
                  </li>
                </ul>
                <div className="line"></div>
              </div>
            </div>
            <div className="nav-main-container">
              <div className="nav-logo">
                <Link to="/" className="logo-img-wrapper">
                  <p>ALPHALETE</p>
                  <img
                    src="//cdn.shopify.com/s/files/1/0667/0133/files/rainbow-flag_1024x1024.png?v=11808118591447227889"
                    alt="Pride Rainbow Flag"
                  />
                </Link>
              </div>
              <ul className="nav-links-wrapper">
                <li
                  className="link-l1"
                  onMouseEnter={() => setIsShown(true)}
                  onMouseLeave={() => setIsShown(false)}
                >
                  <LinkBtn
                    link="/collections/mens-new"
                    fontweight="600"
                    fontsize="1rem"
                    color="inherit"
                    padding="5px"
                  >
                    <span>MEN</span>
                  </LinkBtn>
                  <div
                    className="link-l1-container"
                    onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}
                  >
                    <div className="link-l1-inner-container">
                      <ul className="link-l1-nested-links-wrapper">
                        <li className="link-l2">
                          <h2 className="link-l2-title">
                            <span>Tops</span>
                          </h2>
                          <ul className="sublink-box"></ul>
                        </li>
                        <li className="link-l2">
                          <h2 className="link-l2-title">
                            <span>Bottoms</span>
                          </h2>
                          <ul className="sublink-box"></ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <LinkBtn
                    link="/collections/mens-new"
                    fontweight="600"
                    fontsize="1rem"
                    color="inherit"
                    padding="5px"
                  >
                    <span>WOMEN</span>
                  </LinkBtn>
                </li>
              </ul>
              <ul className="nav-items-wrapper">
                <li className="nav-quick-search-item">
                  <button className="nav-quick-search-item-btn">
                    <i className="fa-solid fa-magnifying-glass" />
                  </button>
                </li>
                <li className="nav-minicart">
                  <button className="nav-minicart-btn">
                    <i className="fa-solid fa-cart-shopping" />
                  </button>
                </li>
              </ul>
            </div>

            <div
              className={
                isShown
                  ? 'nav-expandable-component open'
                  : 'nav-expandable-component'
              }
            ></div>
          </div>
        </nav>
      </section>
    </header>
  );
}

export default Navbar;
