import LinkBtn from './LinkBtn'
import style from './ProductsCarousel.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/css/navigation'
import ProductCard from './ProductCard'
import { useRef } from 'react'
import data from '../data'

function ProductsCarousel() {
  const { products } = data
  const swiperNavPrevRef = useRef(null)
  const swiperNavNextRef = useRef(null)
  return (
    <section>
      <div className={style.products_carousel_container}>
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexFlow: 'column',
            alignItems: 'center'
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
            <Swiper
              spaceBetween={20}
              slidesPerView={'auto'}
              className={style['swiper']}
              modules={[Navigation]}
              navigation={{
                prevEl: swiperNavPrevRef.current,
                nextEl: swiperNavNextRef.current,
                disabledClass: style.swiper_button_disabled
              }}
              onInit={(swiper) => {
                swiper.params.navigation.prevEl = swiperNavPrevRef.current
                swiper.params.navigation.nextEl = swiperNavNextRef.current
                swiper.navigation.init()
                swiper.navigation.update()
              }}
            >
              {products.map((product, i) => (
                <SwiperSlide
                  key={`slide-${i}`}
                  className={style['swiper-slide']}
                >
                  <ProductCard
                    image={product.image}
                    image_2={product.image_2}
                    name={product.name}
                    color={product.color}
                    numbColor={product.numbColor}
                    price={product.price}
                    images={product.images}
                  />
                </SwiperSlide>
              ))}
              <div ref={swiperNavPrevRef} className={style.swiperNavPrev}>
                <i className="fa-solid fa-arrow-left" />
              </div>
              <div ref={swiperNavNextRef} className={style.swiperNavNext}>
                <i className="fa-solid fa-arrow-right" />
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductsCarousel
