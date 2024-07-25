import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";
import { useRef } from "react";
import { LeftArrowIcon } from "../../assets/icons/Icons";
import Article from "./Article";
export default function CardSlider() {
  const swiperRef = useRef<any>(null);
  return (
    <div className="relative flex items-center py-6">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="w-full"
        slidesPerView={2}
        spaceBetween={20}
        speed={450}
      >
        <SwiperSlide>
          <Article autoWidth />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <Article autoWidth />
        </SwiperSlide>
        <SwiperSlide>
          <Article autoWidth />
        </SwiperSlide>
      </Swiper>
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="h-[50px] mobile:hidden aspect-square rounded-[50%] bg-bodyBg p-[15px] absolute z-[1] left-0 -translate-x-2/4 border-2 border-border transition-colors hover:bg-inputFocus "
      >
        <LeftArrowIcon className="h-full aspect-square [&>path]:stroke-main" />
      </button>
      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="h-[50px] mobile:hidden aspect-square rounded-[50%] bg-bodyBg p-[15px] absolute z-[1] right-0 translate-x-2/4 border-2 border-border transition-colors hover:bg-inputFocus "
      >
        <LeftArrowIcon className="h-full aspect-square rotate-180 [&>path]:stroke-main" />
      </button>
    </div>
  );
}
