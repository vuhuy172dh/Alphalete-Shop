import style from './Footer.module.css'
import LinkBtn from './LinkBtn'

function Footer() {
  return (
    <div className={style.footer_l1_container}>
      <div className={style.footer_links_social_container}>
        <ul className={style.link_container}>
          <h4>SUPPORT</h4>
          <div>
            <ul>
              <li>
                <LinkBtn
                  link="/help-center"
                  fontweight="400"
                  fontsize="1rem"
                  color="#f5f5f5"
                >
                  HELP CENTER
                </LinkBtn>
              </li>
              <li>
                <LinkBtn
                  link="/help-center"
                  fontweight="400"
                  fontsize="1rem"
                  color="#f5f5f5"
                >
                  HELP CENTER
                </LinkBtn>
              </li>
              <li>
                <LinkBtn
                  link="/help-center"
                  fontweight="400"
                  fontsize="1rem"
                  color="#f5f5f5"
                >
                  HELP CENTER
                </LinkBtn>
              </li>
              <li>
                <LinkBtn
                  link="/help-center"
                  fontweight="400"
                  fontsize="1rem"
                  color="#f5f5f5"
                >
                  HELP CENTER
                </LinkBtn>
              </li>
            </ul>
          </div>
        </ul>
        <ul>
          <h4>INFO</h4>
          <div>
            <ul>
              <li>
                <LinkBtn
                  link="/help-center"
                  fontweight="400"
                  fontsize="1rem"
                  color="#f5f5f5"
                >
                  ABOUT US
                </LinkBtn>
              </li>
              <li>
                <LinkBtn
                  link="/help-center"
                  fontweight="400"
                  fontsize="1rem"
                  color="#f5f5f5"
                >
                  ALPHALAND
                </LinkBtn>
              </li>
              <li>
                <LinkBtn
                  link="/help-center"
                  fontweight="400"
                  fontsize="1rem"
                  color="#f5f5f5"
                >
                  SUMMER SHREDDING
                </LinkBtn>
              </li>
              <li>
                <LinkBtn
                  link="/help-center"
                  fontweight="400"
                  fontsize="1rem"
                  color="#f5f5f5"
                >
                  CAREERS
                </LinkBtn>
              </li>
            </ul>
          </div>
        </ul>
      </div>
      <div className="footer-info"></div>
    </div>
  )
}

export default Footer
