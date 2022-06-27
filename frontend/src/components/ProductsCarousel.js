import LinkBtn from './LinkBtn'
import style from './ProductsCarousel.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import ProductCard from './ProductCard'
import data from '../data'

function ProductsCarousel() {
  const { products } = data
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
          <div className={style.products_carousel_wrapper}>
            <Swiper spaceBetween={50} >
              {products.map((product) => (
                <SwiperSlide className={style['swiper-slide']}>
                  <ProductCard image={product.image} name={product.name} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductsCarousel
