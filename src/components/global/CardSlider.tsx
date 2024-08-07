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
        modules={[FreeMode]}
        freeMode={true}
        spaceBetween={10}
        speed={450}
        breakpoints={{
          1500: { spaceBetween: 10, slidesPerView: 4.4 },
          1330: { spaceBetween: 20, slidesPerView: 3.8 },
          1200: { spaceBetween: 15, slidesPerView: 3.4 },
          1100: { spaceBetween: 10, slidesPerView: 3.1 },
          1000: { spaceBetween: 10, slidesPerView: 2.8 },
          900: { spaceBetween: 10, slidesPerView: 2.55 },
          0: { spaceBetween: 10, slidesPerView: "auto" },
        }}
      >
        {props.articles.map((article: Tarticle, i: number) => (
          <SwiperSlide key={i} className="w-auto">
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
