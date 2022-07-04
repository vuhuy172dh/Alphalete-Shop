import style from './NavDrawer.module.css'
import LinkBtn from './LinkBtn'
import useWindowSize from '../hooks/useWindowSize'
import { useState, useContext } from 'react'
import { ThemeContext } from '../theme/themes'

function NavDrawer(props) {
  const size = useWindowSize()
  const [btnClicked, setBtnClicked] = useState(false)
  const { theme, setTheme } = useContext(ThemeContext)

  const handleTheme = () => {
    setTheme((theme) => (theme === 'dark' ? 'light' : 'dark'))
  }

  function clickMenBtn() {
    setBtnClicked(false)
  }

  function clickWomenBtn() {
    setBtnClicked(true)
  }
  return (
    <div
      className={
        props.isMenuClicked === true && size.width <= 800
          ? style['navdrawer-open']
          : style['navdrawer']
      }
    >
      <div
        onClick={props.handleMenuClick}
        className={
          props.isMenuClicked === true && size.width <= 800
            ? style['navdrawer-backdrop-open']
            : style['navdrawer-backdrop']
        }
      ></div>
      <div className={style['navdrawer-container']}>
        <div className={style['navdrawer-header']}>
          <ul className={style['header-button']}>
            <li>
              <button
                className={
                  btnClicked === false
                    ? style['men-btn-active']
                    : style['men-btn']
                }
                onClick={clickMenBtn}
              >
                MEN
              </button>
            </li>
            <li>
              <button
                className={
                  btnClicked === true
                    ? style['women-btn-active']
                    : style['women-btn']
                }
                onClick={clickWomenBtn}
              >
                WOMEN
              </button>
            </li>
          </ul>
        </div>
        <div className={style['navdrawer-scroller']}>
          <div className={style['navdrawer-body']}>
            <div
              id="men-drawer-body"
              style={{ display: btnClicked === false ? 'flex' : 'none' }}
              className={style['link-l1-container']}
            >
              <ul className={style['link-l1-wrapper']}>
                <li>
                  <h2>
                    <span>Tops</span>
                  </h2>
                  <ul className={style['link-l2-wrapper']}>
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
                        <span style={{ opacity: 0.7 }}>Short Sleeves</span>
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
                        <span style={{ opacity: 0.7 }}>Jackets & Hoodies</span>
                      </LinkBtn>
                    </li>
                  </ul>
                </li>
                <li>
                  <h2>
                    <span>Bottoms</span>
                  </h2>
                  <ul className={style['link-l2-wrapper']}>
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
              <div className={style['link-l1-poster']}>
                <div className={style['link-l1-poster-inner']}>
                  <div className={style['poster-img']}>
                    <div className={style['poster-img-wrapper']}>
                      <img
                        src="https://cdn.shopify.com/s/files/1/0667/0133/files/Elements_85.jpg?crop=center&height=300&v=1648056105&width=250"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className={style['poster-img']}>
                    <div className={style['poster-img-wrapper']}>
                      <img
                        src="https://cdn.shopify.com/s/files/1/0667/0133/files/Elements_08.jpg?crop=center&height=300&v=1651867703&width=250"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="women-drawer-container"
              style={{ display: btnClicked === true ? 'flex' : 'none' }}
              className={style['link-l1-container']}
            >
              <ul className={style['link-l1-wrapper']}>
                <li>
                  <h2>
                    <span>Tops</span>
                  </h2>
                  <ul className={style['link-l2-wrapper']}>
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
                        <span style={{ opacity: 0.7 }}>Sports Bras</span>
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
                        <span style={{ opacity: 0.7 }}>Shirts & Crops</span>
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
                        <span style={{ opacity: 0.7 }}>Long Sleeves</span>
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
                        <span style={{ opacity: 0.7 }}>Jackets & Hoodies</span>
                      </LinkBtn>
                    </li>
                  </ul>
                </li>
                <li>
                  <h2>
                    <span>Bottoms</span>
                  </h2>
                  <ul className={style['link-l2-wrapper']}>
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
                        <span style={{ opacity: 0.7 }}>Leggings</span>
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
                        <span style={{ opacity: 0.7 }}>Joggers</span>
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
                        <span style={{ opacity: 0.7 }}>Dresses & Skirts</span>
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
                        <span style={{ opacity: 0.7 }}>Underwear</span>
                      </LinkBtn>
                    </li>
                  </ul>
                </li>
              </ul>
              <div className={style['link-l1-poster']}>
                <div className={style['link-l1-poster-inner']}>
                  <div className={style['poster-img']}>
                    <div className={style['poster-img-wrapper']}>
                      <img
                        src="https://cdn.shopify.com/s/files/1/0667/0133/files/AmplifyJune_13.jpg?crop=center&height=300&v=1654936386&width=250"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className={style['poster-img']}>
                    <div className={style['poster-img-wrapper']}>
                      <img
                        src="https://cdn.shopify.com/s/files/1/0667/0133/files/Amplify_06.jpg?crop=center&height=300&v=1653147420&width=250"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={style['navdrawer-footer']}>
            <div className={style['info-container']}>
              <ul className={style['info-list']}>
                <li>
                  <a href="/account/login" className={style['info-btn']}>
                    <i className="fa-solid fa-circle-user" />
                    <span>Sign In</span>
                  </a>
                </li>
                <li>
                  <a href="/login" className={style['info-btn']}>
                    <i className="fa-solid fa-truck-fast" />
                    <span>Shipping Info</span>
                  </a>
                </li>
                <li>
                  <a href="/login" className={style['info-btn']}>
                    <i className="fa-solid fa-briefcase" />
                    <span>Careers</span>
                  </a>
                </li>
                <li>
                  <a href="/login" className={style['info-btn']}>
                    <i className="fa-solid fa-circle-question" />
                    <span>Help Center</span>
                  </a>
                </li>
                <li>
                  <a href="/login" className={style['info-btn']}>
                    <i className="fa-solid fa-rotate" />
                    <span>Returns & Exchange</span>
                  </a>
                </li>
                <li>
                  <a href="/login" className={style['info-btn']}>
                    <i className="fa-solid fa-circle-info" />
                    <span>About Us</span>
                  </a>
                </li>
              </ul>
            </div>
            <ul className={style['social-media-container']}>
              <li className={style.social_media}>
                <i className="fa-brands fa-instagram" />
              </li>
              <li className={style.social_media}>
                <i className="fa-brands fa-tiktok" />
              </li>
              <li className={style.social_media}>
                <i className="fa-brands fa-twitter" />
              </li>
              <li className={style.social_media}>
                <i className="fa-brands fa-facebook-f" />
              </li>
              <li className={style.social_media}>
                <i className="fa-brands fa-youtube" />
              </li>
              <li>
                <button onClick={handleTheme}>
                  <i
                    className={
                      theme === 'dark'
                        ? 'fa-solid fa-toggle-off'
                        : 'fa-solid fa-toggle-on'
                    }
                  />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavDrawer
