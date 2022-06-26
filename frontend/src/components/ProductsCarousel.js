import LinkBtn from './LinkBtn'
import style from './ProductsCarousel.module.css'

function ProductsCarousel() {
  return (
    <section>
      <div className={style.products_carousel_container}>
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexFlow: 'column',
            overflow: 'hidden'
          }}
        >
          <div className={style.products_carousel_header}>
            <div
              style={{
                display: 'flex',
                flexFlow: 'column',
                marginRight: 'auto',
                padding: 0,
                justifyContent: 'center',
                alignItems: 'flex-start'
              }}
            >
              <p style={{ fontWeight: '600', marginTop: 0 }}>Amplify Heaven</p>
              <LinkBtn
                link="/"
                fontweight="700"
                fontsize="1.5rem"
                color="inherit"
                paddingbottom="5px"
              >
                TRENDING NOW
              </LinkBtn>
            </div>
            <button>SHOP SEAMLESS</button>
          </div>
          <div className={style.products_carousel_wrapper}></div>
        </div>
      </div>
    </section>
  )
}

export default ProductsCarousel
