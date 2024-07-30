import { useEffect, useState } from "react";
import CardSlider from "../../components/global/CardSlider";
import { Tarticle } from "../Search/Search";
import axiosCall, { image_url_start } from "../../api/axiosCall";
import { Link } from "react-router-dom";
type Tarticles = {
  mainArticles: Tarticle[];
  popular: Tarticle[];
  new: Tarticle[];
  liked: Tarticle[];
};
export default function Home() {
  const [articles, setArticles] = useState<Tarticles>({
    mainArticles: [],
    popular: [],
    new: [],
    liked: [],
  });
  useEffect(() => {
    axiosCall.get("articles").then((res) => {
      if (res.data.status == 100) {
        setArticles({
          mainArticles: res.data.articles.slice(0, 5),
          popular: res.data.articles.slice(5, 15),
          new: res.data.articles.slice(10, 20),
          liked: res.data.articles.slice(20, 30),
        });
      }
    });
  }, []);

  return (
    <main className="py-[50px] mobile:py-3">
      <div className="content_container">
        <div className="w-[95%] mx-auto ">
          <div className="flex gap-3 justify-between items-center h-[200px] medium:h-auto medium:flex-col">
            <div className=" relative h-full flex-1 medium:flex-auto overflow-hidden bg-loaderBg rounded-2xl medium:h-[200px] mobile:h-[150px] medium:w-full">
              {articles.mainArticles.length > 0 ? (
                <>
                  <Link
                    className="rounded-2xl"
                    to={"/news/" + articles.mainArticles[0].id}
                  >
                    <img
                      className="h-full w-full absolute top-0 left-0 object-cover rounded-2xl "
                      src={
                        image_url_start + articles.mainArticles[0].main_image
                      }
                      alt={articles.mainArticles[0].title}
                    />
                    <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-transparent to-blackFade z-10">
                      <p className="absolute bottom-2 left-2 text-whiteTitle text-[14px] font-main max-w-[80%] overflow-hidden text-ellipsis text-nowrap">
                        {articles.mainArticles[0].title}
                      </p>
                    </div>
                  </Link>
                </>
              ) : null}
            </div>
            <div className=" relative h-full flex-1 medium:flex-auto overflow-hidden bg-loaderBg rounded-2xl medium:h-[200px] mobile:h-[150px] medium:w-full">
              {articles.mainArticles.length > 0 ? (
                <>
                  <Link
                    className="rounded-2xl"
                    to={"/news/" + articles.mainArticles[1].id}
                  >
                    <img
                      className="h-full w-full absolute top-0 left-0 object-cover rounded-2xl "
                      src={
                        image_url_start + articles.mainArticles[1].main_image
                      }
                      alt={articles.mainArticles[1].title}
                    />
                    <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-transparent to-blackFade z-10">
                      <p className="absolute bottom-2 left-2 text-whiteTitle text-[14px] font-main max-w-[80%] overflow-hidden text-ellipsis text-nowrap">
                        {articles.mainArticles[1].title}
                      </p>
                    </div>
                  </Link>
                </>
              ) : null}
            </div>
            <div className=" relative h-full flex-1 medium:flex-auto overflow-hidden bg-loaderBg rounded-2xl medium:h-[200px] mobile:h-[150px] medium:w-full">
              {articles.mainArticles.length > 0 ? (
                <>
                  <Link
                    className="rounded-2xl"
                    to={"/news/" + articles.mainArticles[2].id}
                  >
                    <img
                      className="h-full w-full absolute top-0 left-0 object-cover rounded-2xl "
                      src={
                        image_url_start + articles.mainArticles[2].main_image
                      }
                      alt={articles.mainArticles[2].title}
                    />
                    <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-transparent to-blackFade z-10">
                      <p className="absolute bottom-2 left-2 text-whiteTitle text-[14px] font-main max-w-[80%] overflow-hidden text-ellipsis text-nowrap">
                        {articles.mainArticles[2].title}
                      </p>
                    </div>
                  </Link>
                </>
              ) : null}
            </div>
          </div>
          <div className="flex gap-3 justify-between items-center h-[200px] mt-3 medium:h-auto  medium:flex-col mobile:hidden">
            <div className=" relative h-full flex-1 medium:flex-auto overflow-hidden bg-loaderBg rounded-2xl medium:h-[200px] mobile:h-[150px] medium:w-full">
              {articles.mainArticles.length > 0 ? (
                <>
                  <Link
                    className="rounded-2xl"
                    to={"/news/" + articles.mainArticles[3].id}
                  >
                    <img
                      className="h-full w-full absolute top-0 left-0 object-cover rounded-2xl "
                      src={
                        image_url_start + articles.mainArticles[3].main_image
                      }
                      alt={articles.mainArticles[3].title}
                    />
                    <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-transparent to-blackFade z-10">
                      <p className="absolute bottom-2 left-2 text-whiteTitle text-[14px] font-main max-w-[80%] overflow-hidden text-ellipsis text-nowrap">
                        {articles.mainArticles[3].title}
                      </p>
                    </div>
                  </Link>
                </>
              ) : null}
            </div>
            <div className=" relative h-full flex-1 medium:flex-auto overflow-hidden bg-loaderBg rounded-2xl medium:h-[200px] mobile:h-[150px] medium:w-full">
              {articles.mainArticles.length > 0 ? (
                <>
                  <Link
                    className="rounded-2xl"
                    to={"/news/" + articles.mainArticles[4].id}
                  >
                    <img
                      className="h-full w-full absolute top-0 left-0 object-cover rounded-2xl "
                      src={
                        image_url_start + articles.mainArticles[4].main_image
                      }
                      alt={articles.mainArticles[4].title}
                    />
                    <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-transparent to-blackFade z-10">
                      <p className="absolute bottom-2 left-2 text-whiteTitle text-[14px] font-main max-w-[80%] overflow-hidden text-ellipsis text-nowrap">
                        {articles.mainArticles[4].title}
                      </p>
                    </div>
                  </Link>
                </>
              ) : null}
            </div>
          </div>
          <div className="flex gap-3 justify-between items-center h-[150px] mt-3">
            <div className="h-full flex-1  bg-loaderBg rounded-2xl flex justify-center items-center text-inputPlaceholder text-[18px] font-mainBold ">
              რეკლამა
            </div>
          </div>
        </div>
        <section className="mt-10">
          <div className="mt-3">
            <h1 className="text-title text-[18px] font-mainBold tracking-widest mobile:text-[16px]">
              პოპულარული სტატიები
            </h1>
            <CardSlider articles={articles.popular} />
          </div>{" "}
          <div className="mt-6">
            <h1 className="text-title text-[18px] font-mainBold tracking-widest mobile:text-[16px]">
              ახალი სტატიები
            </h1>
            <CardSlider articles={articles.new} />
          </div>{" "}
          <div className="mt-6">
            <h1 className="text-title text-[18px] font-mainBold tracking-widest mobile:text-[16px]">
              ხალხს მოსწონს
            </h1>
            <CardSlider articles={articles.liked} />
          </div>
        </section>
      </div>
    </main>
  );
}
