import "./New.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectCoverflow, Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';
function New({ news, newLike }) {
  return (
    <div id="new">
      <div className="container">
        <h2>New Gifts</h2>
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
        modules={[EffectCoverflow, Keyboard, Scrollbar, Navigation, Pagination]}>
        {news.map((news, i)=>{
            return <SwiperSlide key={i} className="box">
            <div className="redCircle">
              <img src={news.img} alt="" />
            </div>
            <div className="boxInfo">
              <h3>${news.price}</h3>
              <p>{news.name}</p>
              <button onClick={() => newLike(i)}>
                <i className={news.liked ? "fa-solid fa-heart" : "fa-regular fa-heart"}></i></button>
            </div>
          </SwiperSlide>
          })}
        </Swiper>
        <div className="boxes">
        </div>
      </div>
    </div>
  );
}
export default New;
