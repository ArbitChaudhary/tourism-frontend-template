import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import "../assets/styles/styles.css";


const Banner = () => {
  return (
    <>
      <div>
      <Swiper
    //   spaceBetween={50}
      slidesPerView={1}
      navigation={true}
      autoplay
      speed={1000}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className='slider'
      modules={[Navigation]}
    >
      <SwiperSlide>
        <div className='slider-item' >
        <img src="https://a-static.besthdwallpaper.com/big-ben-in-london-at-sunset-wallpaper-2880x960-79588_104.jpg" alt="" style={{height:"100%", width:"100%"}}/>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='slider-item'>
        <img src="https://a-static.besthdwallpaper.com/big-ben-in-london-at-sunset-wallpaper-2880x960-79588_104.jpg" alt="" style={{height:"100%", width:"100%"}}/>
        </div>
      </SwiperSlide>

    </Swiper>
      </div>
    </>
  );
};

export default Banner;
