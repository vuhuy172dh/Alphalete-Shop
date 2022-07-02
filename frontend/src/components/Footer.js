import { useContext } from 'react'
import { ThemeContext } from '../theme/themes'
import style from './Footer.module.css'
import LinkBtn from './LinkBtn'

function Footer() {
  const { theme, setTheme } = useContext(ThemeContext)
  const handleTheme = () => {
    setTheme((theme) => (theme === 'dark' ? 'light' : 'dark'))
  }

  return (
    <div className={style.footer_container}>
      <div className={style.footer_links_social_container}>
        <ul className={style.link_l1_container}>
          <h4>SUPPORT</h4>
          <ul className={style.sublink_box}>
            <li>
              <LinkBtn
                link="/help-center"
                fontweight="700"
                fontsize="0.8rem"
                color="inherit"
                opacity="0.7"
              >
                HELP CENTER
              </LinkBtn>
            </li>
            <li>
              <LinkBtn
                link="/help-center"
                fontweight="700"
                fontsize="0.8rem"
                color="inherit"
                opacity="0.7"
              >
                CONTACT US
              </LinkBtn>
            </li>
            <li>
              <LinkBtn
                link="/help-center"
                fontweight="700"
                fontsize="0.8rem"
                color="inherit"
                opacity="0.7"
              >
                SHIPPING INFO
              </LinkBtn>
            </li>
            <li>
              <LinkBtn
                link="/help-center"
                fontweight="700"
                fontsize="0.8rem"
                color="inherit"
                opacity="0.7"
              >
                RETURNS & EXCHANGES
              </LinkBtn>
            </li>
          </ul>
        </ul>
        <ul className={style.link_l1_container}>
          <h4>INFO</h4>
          <ul className={style.sublink_box}>
            <li>
              <LinkBtn
                link="/help-center"
                fontweight="700"
                fontsize="0.8rem"
                color="inherit"
                opacity="0.7"
              >
                ABOUT US
              </LinkBtn>
            </li>
            <li>
              <LinkBtn
                link="/help-center"
                fontweight="700"
                fontsize="0.8rem"
                color="inherit"
                opacity="0.7"
              >
                ALPHALAND
              </LinkBtn>
            </li>
            <li>
              <LinkBtn
                link="/help-center"
                fontweight="700"
                fontsize="0.8rem"
                color="inherit"
                opacity="0.7"
              >
                SUMMER SHREDDING
              </LinkBtn>
            </li>
            <li>
              <LinkBtn
                link="/help-center"
                fontweight="700"
                fontsize="0.8rem"
                color="inherit"
                opacity="0.7"
              >
                CAREERS
              </LinkBtn>
            </li>
          </ul>
        </ul>
        <div className={style.newsletter_social_container}>
          <h3>SIGN UP FOR ALPHALETE NEWSLETTER</h3>
          <form className={style.footer_newsletter}>
            <input type="email" placeholder="Your Email Address" required />
            <button>
              <span>SIGN UP</span>
            </button>
          </form>
          <hr />
          <ul className={style.social_media_container}>
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
              <button onClick={handleTheme} className={style.darkmode_btn}>
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
      <div className={style.footer_info}>
        <span>
          &copy; 2022 | Alphalete Athletics LLC | All Rights Reserved{' '}
        </span>
        <small>LEARN MORE | DREAM MORE | BE MORE</small>
      </div>
    </div>
  )
}

export default Footer
