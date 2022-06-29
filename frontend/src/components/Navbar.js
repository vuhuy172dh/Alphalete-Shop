import style from './Navbar.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import LinkBtn from './LinkBtn'
import { Link } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'
import useScrollPosition from '../hooks/useScrollPosition.js'

function Navbar() {
  const [isShown, setIsShown] = useState(false)
  const scrollPosition = useScrollPosition()
  console.log(scrollPosition)
  const [height, setHeight] = useState(0)
  const ref = useRef(null)
  useEffect(() => {
    setHeight(ref.current.clientHeight)
  }, [])

  return (
    <section className={style.section_navbar}>
      <div
        className={isShown ? style.nav_backdrop_open : style.nav_backdrop}
      ></div>
      <nav className={scrollPosition !== 0 ? style['nav_past_top'] : style.nav}>
        <div className={style.nav_inner}>
          <div className={style.nav_top_container}>
            <div className={style.nav_top_wrapper}>
              <div className={style.nav_announcement_bar_container}>
                <Swiper
                  loop={true}
                  modules={[Autoplay]}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                >
                  <SwiperSlide className={style.nav_announce_slide}>
                    <p>Free Domestic Shipping Over $150 and 30 Day Returns</p>
                  </SwiperSlide>
                  <SwiperSlide className={style.nav_announce_slide}>
                    <p>Shop Men's New Arrivals</p>
                  </SwiperSlide>
                  <SwiperSlide className={style.nav_announce_slide}>
                    <p>Shop Women's New Arrivals</p>
                  </SwiperSlide>
                </Swiper>
              </div>
              <ul className={style.nav_info_links_container}>
                <li>
                  <button className={style.info_links_btn}>Info</button>
                  <ul className={style.info_links_container}>
                    <li>
                      <LinkBtn
                        link="/anotherweb/support"
                        color="inherit"
                        opacity="0.7"
                        fontsize="0.7rem"
                        fontweight="600"
                      >
                        Help Center
                      </LinkBtn>
                    </li>
                    <li>
                      <LinkBtn
                        link="/anotherweb/support"
                        color="inherit"
                        opacity="0.7"
                        fontsize="0.7rem"
                        fontweight="600"
                      >
                        Returns
                      </LinkBtn>
                    </li>
                    <li>
                      <LinkBtn
                        link="/anotherweb/about-us"
                        color="inherit"
                        opacity="0.7"
                        fontsize="0.7rem"
                        fontweight="600"
                      >
                        About us
                      </LinkBtn>
                    </li>
                    <li>
                      <LinkBtn
                        link="/anotherweb/career"
                        color="inherit"
                        opacity="0.7"
                        fontsize="0.7rem"
                        fontweight="600"
                      >
                        Careers
                      </LinkBtn>
                    </li>
                    <li>
                      <LinkBtn
                        link="/policies/privacy-policy"
                        color="inherit"
                        opacity="0.7"
                        fontsize="0.7rem"
                        fontweight="600"
                      >
                        Privacy Policy
                      </LinkBtn>
                    </li>
                  </ul>
                </li>
                <li>
                  <LinkBtn
                    link="/account/login"
                    fontsize="0.8rem"
                    fontweight="600"
                    color="inherit"
                    className="login-links-btn"
                  >
                    Login
                  </LinkBtn>
                </li>
              </ul>
              <div className={style.line}></div>
            </div>
          </div>
          <div className={style.nav_main_container}>
            <div className={style.nav_logo}>
              <Link to="/" className={style.logo_img_wrapper}>
                <p>ALPHALETE</p>
                <img
                  src="//cdn.shopify.com/s/files/1/0667/0133/files/rainbow-flag_1024x1024.png?v=11808118591447227889"
                  alt="Pride Rainbow Flag"
                />
              </Link>
            </div>
            <ul className={style.nav_links_wrapper}>
              <li
                className={style.link_l1}
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
                <div className={style.link_l1_container} ref={ref}>
                  <div className={style.link_l1_inner_container}>
                    <ul className={style.link_l1_nested_links_wrapper}>
                      <li className={style.link_l2}>
                        <h2 className={style.link_l2_title}>
                          <span>Tops</span>
                        </h2>
                        <ul className={style.sublink_box}>
                          <li>
                            <LinkBtn
                              link="/collections/mens-stringers"
                              color="inherit"
                              opacity="0.7"
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
                              color="inherit"
                              opacity="0.7"
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
                              color="inherit"
                              opacity="0.7"
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
                              color="inherit"
                              opacity="0.7"
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
                      <li className={style.link_l2}>
                        <h2 className={style.link_l2_title}>
                          <span>Bottoms</span>
                        </h2>
                        <ul className={style.sublink_box}>
                          <li>
                            <LinkBtn
                              link="/collections/mens-shorts"
                              color="inherit"
                              opacity="0.7"
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
                              color="inherit"
                              opacity="0.7"
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
                              color="inherit"
                              opacity="0.7"
                              fontweight="600"
                              fontsize="0.8rem"
                              paddingtop="2px"
                              paddingbottom="2px"
                            >
                              <span style={{ opacity: 0.7 }}>Boardshorts</span>
                            </LinkBtn>
                          </li>
                          <li>
                            <LinkBtn
                              link="/collections/mens-base-layers"
                              color="inherit"
                              opacity="0.7"
                              fontweight="600"
                              fontsize="0.8rem"
                              paddingtop="2px"
                              paddingbottom="2px"
                            >
                              <span style={{ opacity: 0.7 }}>Base layers</span>
                            </LinkBtn>
                          </li>
                        </ul>
                      </li>
                    </ul>
                    <div className={style.link_l1_content_card_men}>
                      <div className={style.link_l1_content_card_wrapper}>
                        <div className={style.link_l3_content_card}>
                          <a
                            href="/collections/mens-best-sellers"
                            style={{
                              borderRadius: '1.5rem',
                              overflow: 'hidden'
                            }}
                          >
                            <img
                              src="https://cdn.shopify.com/s/files/1/0667/0133/files/Elements_85.jpg?crop=center&height=300&v=1648056105&width=250"
                              alt=""
                            />
                          </a>
                          <a
                            href="/collections/mens-best-sellers"
                            style={{
                              borderRadius: '1.5rem',
                              overflow: 'hidden'
                            }}
                          >
                            <img
                              src="https://cdn.shopify.com/s/files/1/0667/0133/files/Elements_08.jpg?crop=center&height=300&v=1651867703&width=250"
                              alt=""
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li
                className={style.link_l1}
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
                <div className={style.link_l1_container}>
                  <div className={style.link_l1_inner_container}>
                    <ul className={style.link_l1_nested_links_wrapper}>
                      <li className={style.link_l2}>
                        <h2 className={style.link_l2_title}>
                          <span>Tops</span>
                        </h2>
                        <ul className={style.sublink_box}>
                          <li>
                            <LinkBtn
                              link="/collections/womens-sports-bras"
                              color="inherit"
                              opacity="0.7"
                              fontweight="600"
                              fontsize="0.8rem"
                              paddingtop="2px"
                              paddingbottom="2px"
                            >
                              <span style={{ opacity: 0.7 }}>Sports Bras</span>
                            </LinkBtn>
                          </li>
                          <li>
                            <LinkBtn
                              link="/collections/womens-tank-tops"
                              color="inherit"
                              opacity="0.7"
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
                              color="inherit"
                              opacity="0.7"
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
                              color="inherit"
                              opacity="0.7"
                              fontweight="600"
                              fontsize="0.8rem"
                              paddingtop="2px"
                              paddingbottom="2px"
                            >
                              <span style={{ opacity: 0.7 }}>Long Sleeves</span>
                            </LinkBtn>
                          </li>
                          <li>
                            <LinkBtn
                              link="/collections/womens-jackets-hoodies"
                              color="inherit"
                              opacity="0.7"
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
                      <li className={style.link_l2}>
                        <h2 className={style.link_l2_title}>
                          <span>Bottoms</span>
                        </h2>
                        <ul className={style.sublink_box}>
                          <li>
                            <LinkBtn
                              link="/collections/womens-shorts"
                              color="inherit"
                              opacity="0.7"
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
                              color="inherit"
                              opacity="0.7"
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
                              color="inherit"
                              opacity="0.7"
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
                              color="inherit"
                              opacity="0.7"
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
                              color="inherit"
                              opacity="0.7"
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
            <ul className={style.nav_items_wrapper}>
              <li className={style.nav_quick_search_item}>
                <button className={style.nav_quick_search_item_btn}>
                  <i className="fa-solid fa-magnifying-glass" />
                </button>
              </li>
              <li className={style.nav_minicart}>
                <button className={style.nav_minicart_btn}>
                  <i className="fa-solid fa-cart-shopping" />
                </button>
              </li>
            </ul>
          </div>
          <div
            style={{ height: isShown ? height : 0 }}
            className={
              isShown
                ? style.nav_expandable_component_open
                : style.nav_expandable_component
            }
          ></div>
        </div>
      </nav>
    </section>
  )
}

export default Navbar
