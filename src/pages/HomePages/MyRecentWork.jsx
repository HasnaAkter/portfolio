import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../HomePages/recentwork.css';
import img1 from '../../assets/work1.jpg';
import img2 from '../../assets/work2.jpg';
import img3 from '../../assets/work3.jpg';
import img4 from '../../assets/work4.jpg';

const MyRecentWork = () => {
    const [swiperRef, setSwiperRef] = useState(null);

    return (
        <div className='p-5'>
         <h3 className="font-bold text-4xl text-start my-3 capitalize">My Recent work</h3>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper "
      >

        <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img4} alt="" /></SwiperSlide>
      </Swiper>

      
      </div>
    );
};

export default MyRecentWork;