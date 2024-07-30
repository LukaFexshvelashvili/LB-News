import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";
import { memo, useRef } from "react";
import { LeftArrowIcon } from "../../assets/icons/Icons";
import Article from "./Article";
import { Tarticle } from "../../pages/Search/Search";
import { FreeMode } from "swiper/modules";
function CardSlider(props: { articles: Tarticle[] }) {
  const swiperRef = useRef<any>(null);
  return (
    <div className="relative flex items-center py-6 mobile:py-3">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="w-full"
        modules={[FreeMode]}
        freeMode={true}
        slidesPerView={2}
        spaceBetween={20}
        speed={450}
        breakpoints={{
          1500: { spaceBetween: 20, slidesPerView: 2.2 },
          1330: { spaceBetween: 20, slidesPerView: 1.9 },
          1200: { spaceBetween: 15, slidesPerView: 1.8 },
          1100: { spaceBetween: 10, slidesPerView: 1.6 },
          1000: { spaceBetween: 10, slidesPerView: 1.4 },
          900: { spaceBetween: 10, slidesPerView: 1.3 },
          800: { spaceBetween: 10, slidesPerView: 1.1 },
          650: { spaceBetween: 10, slidesPerView: 1.4 },
          560: { spaceBetween: 10, slidesPerView: 1.25 },
          510: { spaceBetween: 10, slidesPerView: 1.2 },
          450: { spaceBetween: 10, slidesPerView: 1.1 },
          420: { spaceBetween: 10, slidesPerView: 1.15 },
          400: { spaceBetween: 10, slidesPerView: 1 },
          370: { spaceBetween: 10, slidesPerView: 1 },
          340: { spaceBetween: 10, slidesPerView: 1 },
          310: { spaceBetween: 8, slidesPerView: 0.6 },
          9: { spaceBetween: 8, slidesPerView: 0.6 },
        }}
      >
        {props.articles.map((article: Tarticle, i: number) => (
          <SwiperSlide key={i}>
            <Article data={article} autoWidth />
          </SwiperSlide>
        ))}
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
export default memo(CardSlider);
