import style from './Footer.module.css'
import LinkBtn from './LinkBtn'

function Footer() {
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
                color="#d5d5d5"
              >
                HELP CENTER
              </LinkBtn>
            </li>
            <li>
              <LinkBtn
                link="/help-center"
                fontweight="700"
                fontsize="0.8rem"
                color="#d5d5d5"
              >
                CONTACT US
              </LinkBtn>
            </li>
            <li>
              <LinkBtn
                link="/help-center"
                fontweight="700"
                fontsize="0.8rem"
                color="#d5d5d5"
              >
                SHIPPING INFO
              </LinkBtn>
            </li>
            <li>
              <LinkBtn
                link="/help-center"
                fontweight="700"
                fontsize="0.8rem"
                color="#d5d5d5"
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
                color="#d5d5d5"
              >
                ABOUT US
              </LinkBtn>
            </li>
            <li>
              <LinkBtn
                link="/help-center"
                fontweight="700"
                fontsize="0.8rem"
                color="#d5d5d5"
              >
                ALPHALAND
              </LinkBtn>
            </li>
            <li>
              <LinkBtn
                link="/help-center"
                fontweight="700"
                fontsize="0.8rem"
                color="#d5d5d5"
              >
                SUMMER SHREDDING
              </LinkBtn>
            </li>
            <li>
              <LinkBtn
                link="/help-center"
                fontweight="700"
                fontsize="0.8rem"
                color="#d5d5d5"
              >
                CAREERS
              </LinkBtn>
            </li>
          </ul>
        </ul>
      </div>
      <div className="footer-info"></div>
    </div>
  )
}

export default Footer
