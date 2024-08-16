"use client"; 
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BANNER_HEIGHT = 140;
const AUTO_SWIPE_INTERVAL = 3000;

const banners = [
  '/images/banner-1.png',
  '/images/banner-2.png',
  '/images/banner-3.png',
];

const BannerCarousel = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: AUTO_SWIPE_INTERVAL,
  };

  useEffect(() => {
    const autoSwipe = () => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    };

    const interval = setInterval(autoSwipe, AUTO_SWIPE_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full mx-auto h-[140px] rounded-3xl overflow-hidden">
      <Slider ref={sliderRef} {...settings}>
        {banners.map((banner, index) => (
          <div key={index} className="w-full h-[140px] relative">
            <Image
              src={banner}
              alt={`Banner ${index + 1}`}
              layout="fill"
              objectFit="cover"
              objectPosition='15% 50%'
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerCarousel;