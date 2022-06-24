import './SlideShow.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper'
import { Link } from 'react-router-dom'

function SlideShow() {
  return (
    <section>
      <section className="section-slideshow">
        <div className="slideshow-container">
          <Swiper
            modules={[Autoplay, Pagination]}
            style={{ cursor: 'grab' }}
            autoplay={{ delay: 15000, disableOnInteraction: false }}
            pagination={{
              type: 'bullets'
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="title">
                <div className="title-media-container">
                  <video
                    src="https://cdn.shopify.com/s/files/1/0667/0133/files/cg-motivational-land.mp4?v=1654931634"
                    autoPlay={true}
                    loop={true}
                    muted={true}
                    poster="//cdn.shopify.com/s/files/1/0667/0133/files/E527B7F5-53F8-4941-8F3A-AC8079FD6ECC_1400x.jpg?v=1655155189"
                    playsInline={true}
                  ></video>
                </div>
                <div className="cta">
                  <h2 className="cta-title">MEN'S</h2>
                  <p className="cta-desc">
                    The next generation of Alphalete sportswear
                  </p>
                  <div className="cta-btn-container">
                    <Link
                      to="/collections/mens-all-tops"
                      className="cta-btn-link"
                    >
                      <span>ALL TOPS</span>
                    </Link>
                    <Link
                      to="/collections/mens-all-bottoms"
                      className="cta-btn-link"
                    >
                      <span>ALL BOTTOMS</span>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="title">
                <div className="title-media-container">
                  <img
                    src="https://cdn.shopify.com/s/files/1/0667/0133/files/pride-btob-land.jpg?crop=center&v=1654081765&width=1400"
                    alt="Our favorites"
                  />
                </div>
                <div className="cta">
                  <h2 className="cta-title">MEN'S</h2>
                  <p className="cta-desc">
                    The next generation of Alphalete sportswear
                  </p>
                  <div className="cta-btn-container">
                    <Link
                      to="/collections/mens-all-tops"
                      className="cta-btn-link"
                    >
                      <span>ALL TOPS</span>
                    </Link>
                    <Link
                      to="/collections/mens-all-bottoms"
                      className="cta-btn-link"
                    >
                      <span>ALL BOTTOMS</span>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="title">
                <div className="title-media-container">
                  <img
                    src="https://cdn.shopify.com/s/files/1/0667/0133/files/AmplifyJune_01-land.jpg?crop=center&v=1654927397&width=1400"
                    alt="Our favorites"
                  />
                </div>
                <div className="cta">
                  <h2 className="cta-title">MEN'S</h2>
                  <p className="cta-desc">
                    The next generation of Alphalete sportswear
                  </p>
                  <div className="cta-btn-container">
                    <Link
                      to="/collections/mens-all-tops"
                      className="cta-btn-link"
                    >
                      <span>ALL TOPS</span>
                    </Link>
                    <Link
                      to="/collections/mens-all-bottoms"
                      className="cta-btn-link"
                    >
                      <span>ALL BOTTOMS</span>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </section>
  )
}

export default SlideShow
