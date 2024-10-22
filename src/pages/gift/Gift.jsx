import "./Gift.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectCoverflow, Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';
function Gift({gifts, giftLike}) {
  return (
    <div id="gifts">
      <div className="container">
        <h2>Share A Gift</h2>
        <Swiper
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
        effect={'coverflow'}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Keyboard, Scrollbar, Navigation, Pagination]}
      >
        {gifts.map((gift, index) => {
          return (
            <SwiperSlide key={index}>
              <button onClick={() => giftLike(index)} className="heart"><i className={gift.liked ? 'fa-solid fa-heart' : 'fa-regular fa-heart'}></i></button>
              <img className="desktop" src={gift.imgDesk} alt="" />
              <img className="mobile" src={gift.imgMbl} alt="" />
              <h3>${gift.price}</h3>
              <p>{gift.name}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
      </div>
    </div>
  );
}
export default Gift;