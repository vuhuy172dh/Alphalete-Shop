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
                          <ul className="sublink-box">
                            <li>
                              <LinkBtn
                                link="/collections/mens-stringers"
                                color="#f5f5f5"
                                fontweight="600"
                                fontsize="0.8rem"
                                paddingtop="2px"
                                paddingbottom="2px"
                              >
                                <span style={{ opacity: 0.7 }}>Stringers</span>
                              </LinkBtn>
                            </li>
                            <li>
                              <LinkBtn
                                link="/collections/mens-tanks"
                                color="#f5f5f5"
                                fontweight="600"
                                fontsize="0.8rem"
                                paddingtop="2px"
                                paddingbottom="2px"
                              >
                                <span style={{ opacity: 0.7 }}>Tank Tops</span>
                              </LinkBtn>
                            </li>
                            <li>
                              <LinkBtn
                                link="/collections/mens-shirts-tops"
                                color="#f5f5f5"
                                fontweight="600"
                                fontsize="0.8rem"
                                paddingtop="2px"
                                paddingbottom="2px"
                              >
                                <span style={{ opacity: 0.7 }}>
                                  Short Sleeves
                                </span>
                              </LinkBtn>
                            </li>
                            <li>
                              <LinkBtn
                                link="/collections/mens-jackets-hoodies"
                                color="#f5f5f5"
                                fontweight="600"
                                fontsize="0.8rem"
                                paddingtop="2px"
                                paddingbottom="2px"
                              >
                                <span style={{ opacity: 0.7 }}>
                                  Jackets & Hoodies
                                </span>
                              </LinkBtn>
                            </li>
                          </ul>
                        </li>
                        <li className="link-l2">
                          <h2 className="link-l2-title">
                            <span>Bottoms</span>
                          </h2>
                          <ul className="sublink-box">
                            <li>
                              <LinkBtn
                                link="/collections/mens-shorts"
                                color="#f5f5f5"
                                fontweight="600"
                                fontsize="0.8rem"
                                paddingtop="2px"
                                paddingbottom="2px"
                              >
                                <span style={{ opacity: 0.7 }}>Shorts</span>
                              </LinkBtn>
                            </li>
                            <li>
                              <LinkBtn
                                link="/collections/mens-joggers"
                                color="#f5f5f5"
                                fontweight="600"
                                fontsize="0.8rem"
                                paddingtop="2px"
                                paddingbottom="2px"
                              >
                                <span style={{ opacity: 0.7 }}>Joggers</span>
                              </LinkBtn>
                            </li>
                            <li>
                              <LinkBtn
                                link="/collections/mens-boardshorts"
                                color="#f5f5f5"
                                fontweight="600"
                                fontsize="0.8rem"
                                paddingtop="2px"
                                paddingbottom="2px"
                              >
                                <span style={{ opacity: 0.7 }}>
                                  Boardshorts
                                </span>
                              </LinkBtn>
                            </li>
                            <li>
                              <LinkBtn
                                link="/collections/mens-base-layers"
                                color="#f5f5f5"
                                fontweight="600"
                                fontsize="0.8rem"
                                paddingtop="2px"
                                paddingbottom="2px"
                              >
                                <span style={{ opacity: 0.7 }}>
                                  Base layers
                                </span>
                              </LinkBtn>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
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
                    <span>WOMEN</span>
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
                          <ul className="sublink-box">
                            <li>
                              <LinkBtn
                                link="/collections/womens-sports-bras"
                                color="#f5f5f5"
                                fontweight="600"
                                fontsize="0.8rem"
                                paddingtop="2px"
                                paddingbottom="2px"
                              >
                                <span style={{ opacity: 0.7 }}>
                                  Sports Bras
                                </span>
                              </LinkBtn>
                            </li>
                            <li>
                              <LinkBtn
                                link="/collections/womens-tank-tops"
                                color="#f5f5f5"
                                fontweight="600"
                                fontsize="0.8rem"
                                paddingtop="2px"
                                paddingbottom="2px"
                              >
                                <span style={{ opacity: 0.7 }}>Tank Tops</span>
                              </LinkBtn>
                            </li>
                            <li>
                              <LinkBtn
                                link="/collections/womens-shirts-crops"
                                color="#f5f5f5"
                                fontweight="600"
                                fontsize="0.8rem"
                                paddingtop="2px"
                                paddingbottom="2px"
                              >
                                <span style={{ opacity: 0.7 }}>
                                  Shirts & Crops
                                </span>
                              </LinkBtn>
                            </li>
                            <li>
                              <LinkBtn
                                link="/collections/womens-long-sleeves"
                                color="#f5f5f5"
                                fontweight="600"
                                fontsize="0.8rem"
                                paddingtop="2px"
                                paddingbottom="2px"
                              >
                                <span style={{ opacity: 0.7 }}>
                                  Long Sleeves
                                </span>
                              </LinkBtn>
                            </li>
                            <li>
                              <LinkBtn
                                link="/collections/womens-jackets-hoodies"
                                color="#f5f5f5"
                                fontweight="600"
                                fontsize="0.8rem"
                                paddingtop="2px"
                                paddingbottom="2px"
                              >
                                <span style={{ opacity: 0.7 }}>
                                  Jackets & Hoodies
                                </span>
                              </LinkBtn>
                            </li>
                          </ul>
                        </li>
                        <li className="link-l2">
                          <h2 className="link-l2-title">
                            <span>Bottoms</span>
                          </h2>
                          <ul className="sublink-box">
                            <li>
                              <LinkBtn
                                link="/collections/womens-shorts"
                                color="#f5f5f5"
                                fontweight="600"
                                fontsize="0.8rem"
                                paddingtop="2px"
                                paddingbottom="2px"
                              >
                                <span style={{ opacity: 0.7 }}>Shorts</span>
                              </LinkBtn>
                            </li>
                            <li>
                              <LinkBtn
                                link="/collections/womens-leggings"
                                color="#f5f5f5"
                                fontweight="600"
                                fontsize="0.8rem"
                                paddingtop="2px"
                                paddingbottom="2px"
                              >
                                <span style={{ opacity: 0.7 }}>Leggings</span>
                              </LinkBtn>
                            </li>
                            <li>
                              <LinkBtn
                                link="/collections/womens-joggers"
                                color="#f5f5f5"
                                fontweight="600"
                                fontsize="0.8rem"
                                paddingtop="2px"
                                paddingbottom="2px"
                              >
                                <span style={{ opacity: 0.7 }}>Joggers</span>
                              </LinkBtn>
                            </li>
                            <li>
                              <LinkBtn
                                link="/collections/womens-dresses-skirts"
                                color="#f5f5f5"
                                fontweight="600"
                                fontsize="0.8rem"
                                paddingtop="2px"
                                paddingbottom="2px"
                              >
                                <span style={{ opacity: 0.7 }}>
                                  Dresses & Skirts
                                </span>
                              </LinkBtn>
                            </li>
                            <li>
                              <LinkBtn
                                link="/collections/womens-underwear"
                                color="#f5f5f5"
                                fontweight="600"
                                fontsize="0.8rem"
                                paddingtop="2px"
                                paddingbottom="2px"
                              >
                                <span style={{ opacity: 0.7 }}>Underwear</span>
                              </LinkBtn>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
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
