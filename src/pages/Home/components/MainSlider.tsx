import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { memo, useMemo, useState } from "react";
import { Tarticle } from "../../Search/Search";
import { image_url_start } from "../../../api/axiosCall";

function MainSlider(props: { news: Tarticle[] }) {
  return (
    <Swiper
      modules={[EffectFade, Pagination, Autoplay]}
      effect={"fade"}
      pagination={{ clickable: true }}
      rewind
      autoplay={{ delay: 6000 }}
      className="w-full  "
    >
      {props.news.map((item: Tarticle) => (
        <SwiperSlide key={item.id}>
          <MainSliderCard
            image={image_url_start + item.main_image}
            head={item.title}
            desc={item.description}
            link={"/news/" + item.id}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
type TMainSliderCard = {
  image: string;
  head: string;
  desc: string;
  link: string;
};
function MainSliderCard(props: TMainSliderCard) {
  const [loaded, setLoaded] = useState<boolean>(false);
  const imageElement = useMemo(() => {
    return (
      <img
        src={props.image}
        onLoad={() => {
          setLoaded(true);
        }}
        className=" z-[1] max-h-[380px] max-w-[1390px] absolute h-full w-full object-cover top-0 left-0 object-[center_center]"
        alt="OnHome Slider Banner"
      />
    );
  }, []);

  return (
    <div
      className="w-full h-[380px]  bg-bodyBg
    large:h-[330px]
      mediumSmall:h-[270px]
      mediumSmallXl:h-[245px]
    medium:h-[300px]
    small:h-[220px]
    smallXl:h-[190px]
    mobile:h-[190px] mobileTab:h-[170px] mobileSmall:h-[140px] rounded-[25px] mobile:rounded-[15px] mobileSmall:rounded-[10px]  overflow-hidden relative"
    >
      {!loaded ? (
        <div className="h-full w-full bg-whiteMain  absolute top-0 left-0 z-[5]">
          <div className="w-full h-full  bg-whiteLoad relative overflow-hidden skeletonLoad"></div>
        </div>
      ) : null}
      <Link to={""}>
        {imageElement}
        <div className=" bg-gradient-to-t from-sliderFadeStart to-sliderFadeEnd z-[2] absolute h-full w-full object-cover top-0 left-0"></div>
        <div className="w-full flex justify-between z-30 absolute bottom-8 mobile:bottom-6 mobileSmall:bottom-3 px-6 mobile:px-3 items-end">
          <div className="flex flex-col gap-1">
            <h1 className=" text-sliderHead tracking-normal text-[18px] mobile:text-[16px] mobileSmall:text-[15px] w-3/4 overflow-hidden text-ellipsis text-nowrap">
              {props.head}
            </h1>
            <h3 className=" text-sliderDesc tracking-normal text-[14px] mobile:text-[12px] mobileSmall:text-[12px] line-clamp-2 mobile:line-clamp-1">
              {props.desc}
            </h3>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default memo(MainSlider);
