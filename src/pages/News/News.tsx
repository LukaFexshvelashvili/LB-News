import { useEffect, useRef, useState } from "react";
import { LikeIcon, TimerIcon, ViewIcon } from "../../assets/icons/Icons";
import axiosCall, { image_url_start } from "../../api/axiosCall";
import { useParams } from "react-router-dom";
import { WebLoader } from "../../App";
import {
  CheckLike,
  SetStorageFavorite,
  SetStorageLike,
  useDebounce,
} from "../../components/functions/AddonFunctions";
import {
  isFavorite,
  toggleFavorite,
} from "../../components/functions/ServerFunctions";
import { useDispatch } from "react-redux";

export type Tnews = {
  id: number;
  main_image: string;
  title: string;
  second_title: string;
  description: string;
  second_image: string;
  second_description: string;
  views: number;
  likes: number;
  create_date: string;
};

export default function News() {
  const params = useParams();
  const [loader, setLoader] = useState<boolean>(true);
  const [news, setNews] = useState<Tnews | null>(null);
  useEffect(() => {
    setLoader(true);
    axiosCall
      .get("article?id=" + params.id, { withCredentials: true })
      .then((res) => {
        if (res.data.status == 100) {
          setNews(res.data.article);
        }
        setLoader(false);
      });
  }, [params.id]);

  return (
    <main className="py-[50px] mobile:py-3">
      {loader ? <WebLoader /> : null}
      <div className="content_container">
        <main className="flex gap-3 medium:flex-col">
          <section className="flex flex-[3] flex-col gap-4 p-1">
            {news?.id ? <NewsStarter news={news} setNews={setNews} /> : null}

            <div className="flex items-center justify-end gap-6">
              <div className="flex gap-3 items-center font-mainBold text-info">
                <LikeIcon
                  className={`h-[20px] aspect-square [&>path]:transition-colors [&>path]:fill-info`}
                />{" "}
                {news?.likes}
              </div>
              <div className="flex gap-3 items-center font-mainBold text-info">
                <ViewIcon
                  className={`h-[20px] aspect-square [&>path]:transition-colors [&>path]:fill-info`}
                />{" "}
                {news?.views}
              </div>
            </div>

            <h1 className="text-title text-[22px] text-center">
              {news?.second_title}
            </h1>
            <p className="text-description text-[18px] text-start leading-9 mobile:text-center">
              {news?.description}
            </p>
            <div className="w-full h-[200px] my-5 bg-loaderBg rounded-lg flex justify-center items-center text-inputPlaceholder text-[18px] font-mainBold">
              რეკლამა
            </div>
            <p className="text-description text-[18px] text-start leading-9 mobile:text-center">
              {news?.second_description}
            </p>
            {news?.second_image ? (
              <div className=" relative w-full h-[300px] mobileSm2:h-[200px] bg-loaderBg rounded-lg overflow-hidden ">
                <img
                  src={image_url_start + news.second_image}
                  className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
                  alt={news.title}
                />
              </div>
            ) : null}
            <div className="w-full h-[150px] mt-3 bg-loaderBg rounded-lg flex justify-center items-center text-inputPlaceholder text-[18px] font-mainBold">
              რეკლამა
            </div>
          </section>
          <section className="flex flex-1 min-w-[300px] flex-col gap-4 p-1">
            <div className="w-full h-[300px] bg-loaderBg rounded-lg"></div>
            <div className="w-full h-[300px] bg-loaderBg rounded-lg"></div>
            <div className="w-full h-[300px] bg-loaderBg rounded-lg"></div>
            <div className="w-full h-[300px] bg-loaderBg rounded-lg"></div>
            <div className="w-full h-[300px] bg-loaderBg rounded-lg"></div>
            <div className="w-full h-[300px] bg-loaderBg rounded-lg"></div>
          </section>
        </main>
      </div>
    </main>
  );
}
function NewsStarter({ news, setNews }: { news: Tnews; setNews: Function }) {
  const dispatch = useDispatch();
  const [favorite, setFavorite] = useState<boolean>(isFavorite(news.id));
  const [like, setLike] = useState<boolean>(CheckLike(news.id));
  const firstRender = useRef<boolean>(true);
  const isLiked = useRef<boolean>(CheckLike(news.id));
  const LikeSet = useDebounce(like, 1200);
  const handleLike = (state: boolean) => {
    setLike(state);
    setNews({
      ...news,
      likes:
        news?.likes !== undefined ? news.likes + (state == true ? 1 : -1) : 0,
    });
  };
  const handleFavorite = (state: boolean) => {
    setFavorite(state);
    SetStorageFavorite(state, news.id);
  };

  useEffect(() => {
    if (!firstRender.current && isLiked.current !== like) {
      axiosCall.get("article_like?id=" + news?.id + "&like=" + like);
      SetStorageLike(like, news.id);
      isLiked.current = like;
    } else {
      firstRender.current = false;
    }
  }, [LikeSet]);

  return (
    <div className=" relative w-full h-[300px] mobileSm2:h-[200px] bg-loaderBg rounded-lg overflow-hidden">
      <img
        src={image_url_start + news?.main_image}
        className="absolute top-0 left-0 w-full h-full object-cover  rounded-xl"
        alt={news?.title}
      />
      <div className="absolute pt-5 px-5 z-10 flex w-full justify-between items-start mobile:gap-5 mobile:flex-col-reverse">
        <h1 className=" font-main tracking-wider  text-white text-[18px] mobile:text-center mobile:w-full">
          {news?.title}
        </h1>
        <div className="flex gap-3 mobile:justify-center mobile:w-full">
          <button
            onClick={() => handleLike(!like)}
            className={`cursor-pointer  ${
              like
                ? "bg-white hover:bg-whiteFade"
                : "bg-iconBg hover:bg-iconBgHover"
            } h-[42px] aspect-square rounded-lg flex  justify-center items-center transition-colors`}
          >
            <LikeIcon
              className={`h-[20px] aspect-square [&>path]:transition-colors ${
                like ? "[&>path]:fill-main" : "[&>path]:fill-icon"
              }`}
            />
          </button>
          <button
            onClick={() => {
              {
                handleFavorite(!favorite);
                toggleFavorite(dispatch, news.id);
              }
            }}
            className={`cursor-pointer  ${
              favorite
                ? "bg-white hover:bg-whiteFade"
                : "bg-iconBg hover:bg-iconBgHover"
            } h-[42px] aspect-square rounded-lg flex  justify-center items-center transition-colors `}
          >
            <TimerIcon
              className={`h-[20px] aspect-square [&>path]:transition-colors ${
                favorite ? "[&>path]:fill-main" : "[&>path]:fill-icon"
              }`}
            />
          </button>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-0% from-blackFade via-60% via-transparent"></div>
    </div>
  );
}
