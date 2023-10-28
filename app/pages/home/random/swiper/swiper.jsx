'use client'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Swipe = ({children}) => {
    const [windowWidth, setWindowWidth] = useState(3.25)
    useEffect(()=>{
        const size= ()=>{
            if(window.innerWidth<350){
                setWindowWidth(1)
            }
            else if(window.innerWidth<400){
                setWindowWidth(1.1)
            }
            else if(window.innerWidth<576){
                setWindowWidth(1.25)
            }
            else if(window.innerWidth<768){
                setWindowWidth(1.4)
            }
            else if(window.innerWidth<992){
                setWindowWidth(2.25)
            }
            else if(window.innerWidth<1050){
                setWindowWidth(2.6)
            }
            else if(window.innerWidth<1200){
                setWindowWidth(3.1)
            }
            else if(window.innerWidth<1300){
                setWindowWidth(3.4)
            }
            else if(window.innerWidth>1400){
                setWindowWidth(4.18)
            }
        };
        size();
        window.addEventListener('resize',()=>{
            size();
        });
    },[windowWidth]);
    return (
        <Swiper
        spaceBetween={25}
        slidesPerView={windowWidth}
        >
        <SwiperSlide>{children}</SwiperSlide>
        <SwiperSlide>{children}</SwiperSlide>
        <SwiperSlide>{children}</SwiperSlide>
        <SwiperSlide>{children}</SwiperSlide>
        <SwiperSlide>{children}</SwiperSlide>
        <SwiperSlide>{children}</SwiperSlide>
        <SwiperSlide>{children}</SwiperSlide>
        <SwiperSlide>{children}</SwiperSlide>
        <SwiperSlide>{children}</SwiperSlide>
        <SwiperSlide>{children}</SwiperSlide>
        </Swiper>
    )
}

export default Swipe