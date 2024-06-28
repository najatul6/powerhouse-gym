// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper/modules";
import { images } from "../../../utils/images";

export default function HeroSlider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {images?.map((banner) => (
          <SwiperSlide key={banner?.id}><img src={banner?.src} alt={banner?.alt} className="w-full h-full md:h-96 lg:h-screen bg-cover"/></SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
