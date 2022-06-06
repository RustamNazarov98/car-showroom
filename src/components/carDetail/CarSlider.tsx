import React, {useState} from 'react';
import styles from './style.module.scss';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper";

const CarSlider = () => {
    const {car_slider} = styles
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
    const images = [
        {
            image: 'https://swiperjs.com/demos/images/nature-1.jpg'
        },
        {
            image: 'https://swiperjs.com/demos/images/nature-2.jpg'
        },
        {
            image: 'https://swiperjs.com/demos/images/nature-3.jpg'
        },
        {
            image: 'https://swiperjs.com/demos/images/nature-4.jpg'
        },
        {
            image: 'https://swiperjs.com/demos/images/nature-5.jpg'
        },
        {
            image: 'https://swiperjs.com/demos/images/nature-6.jpg'
        },


    ]

    return (
        <div className={car_slider}>
            <Swiper
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
            >
                {images?.map((item, index) => (
                    <SwiperSlide key={index}>
                        <img src={item.image} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper
                onClick={(swiper) => setThumbsSwiper(swiper)}
                spaceBetween={10}
                slidesPerView={3}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >
                {images?.map((item, index) => (
                    <SwiperSlide key={index}>
                        <img src={item.image} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default CarSlider;
