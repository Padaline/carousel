import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCube, Scrollbar, Autoplay } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/effect-cube"; // Add this import
import "./slider.css";
import img1 from "./img/Image1.png";
import img2 from "./img/Image2.png";
import vid1 from "./img/Video1.mp4";


export default function Slider({ contentList = [], height = "40vh", loopStatus = false, AutoPlayArray = [false, 1000]}) { 
    const swiperWrapperRef = useRef(null);

    return (
    <main>
        <div className="container">
            <Swiper 
            modules={[Pagination, Navigation, Autoplay]} // Added Autoplay here
            centeredSlides
            preloadImages={true}
            slidesPerView={3}
            updateOnImagesReady={true}
            watchSlidesProgress={true}
            slideToClickedSlide
            loop={loopStatus}
            navigation={true}
            pagination={{clickable: true}}
            onSwiper={(swiper) =>  {
                if (swiper && swiper.wrapperEl) {
                    swiperWrapperRef.current = swiper.wrapperEl;
                }
            }}
            autoplay={AutoPlayArray[0] ? {delay: AutoPlayArray[1]} : false}
            breakpoints={{
                // When window width is >= 320px
                320: {
                  slidesPerView: 1,
                  spaceBetween: 0
                },
                // When window width is >= 640px
                640: {
                  slidesPerView: 2,
                  spaceBetween: 0
                },
                // When window width is >= 992px
                992: {
                  slidesPerView: 3,
                  spaceBetween: 0
                }
              }}
            
            >
                {contentList.map((slide, index) => (
                    <SwiperSlide key={index} style={{ height: height }}>
                        {slide.content}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </main>
    );
};