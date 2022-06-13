import React, {useState} from 'react';
import styles from './style.module.scss';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper";
import {ICar} from "../../models/ICar";

const CarSlider = (car: ICar) => {
    const {car_slider} = styles
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
    const images = [
        {
            image: car.image
        },
        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTejN7zi155v-9sxpZJFzSOhqW_C43M3aRw6sVP-QcDqdB3NQRNJfODHxnwaIMr1-DAbzo&usqp=CAU'
        },
        {
            image: 'https://okami-motors.ru/wp-content/uploads/2021/09/NISSAN-X-TRAIL.jpg'
        },
        {
            image: 'https://mashintop.ru/images_cache/car_photo_big/uploads/attachments/car_photo/2015-03-19/449915585/originals/big_8751426784752.jpg'
        },
        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAxREV5jVPZlGNOKsIqg4FIhjWSE24XqZJoQXCd6Xxl4vX-sq_SWacg9-aoIiF_Mbd_1I&usqp=CAU'
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
