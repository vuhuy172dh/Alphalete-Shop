import { useContext } from 'react'
import { ThemeContext } from '../theme/themes'
import style from './Footer.module.css'
import LinkBtn from './LinkBtn'

function Footer() {
  const { setTheme } = useContext(ThemeContext)
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
          <button onClick={handleTheme}>dark mode</button>
        </ul>
      </div>
      <div className="footer-info"></div>
    </div>
  )
}

export default Footer
