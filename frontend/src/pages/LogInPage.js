import style from './LogInPage.module.css'
import LinkBtn from '../components/LinkBtn'

function LogInPage() {
  return (
    <div className={style['form-container']}>
      <form>
        <h2>LOG INTO MY ACCOUNT</h2>
        <div className={style['form-wrapper']}>
          <div className={style['field']}>
            <label>Email Address:</label>
            <input type="text" name="email" placeholder="Email" />
          </div>
          <div className={style['field']}>
            <label>Password:</label>
            <input type="password" name="password" placeholder="Password" />
          </div>
          <div className={style['forgot-password']}>
            <LinkBtn
              link="/account/forgot-password"
              fontsize="10px"
              fontweight="600"
              color="inherit"
            >
              Forgot Password?
            </LinkBtn>
          </div>
          <button>LOG IN</button>
          <div className={style['sign-up']}>
            <span>New to Alphalete? </span>
            <LinkBtn link="/account/sign-up" color="inherit" fontsize="10px">
              Create An Account
            </LinkBtn>
          </div>
        </div>
      </form>
    </div>
  )
}

export default LogInPage
