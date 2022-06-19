import './SlideShow.css';
import { Swiper, SwiperSlide } from 'swiper/react';

function SlideShow() {
  return (
    <section>
      <section className="section-slideshow">
        <div className="slideshow-container">
          <Swiper style={{ cursor: 'grab' }}>
            <SwiperSlide style={{ width: '940px' }}>
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
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </section>
  );
}

export default SlideShow;
