import { useEffect, useState } from "react";
import CardSlider from "../../components/global/CardSlider";
import { Tarticle } from "../Search/Search";
import axiosCall, { image_url_start } from "../../api/axiosCall";
import { Link } from "react-router-dom";
import MainSlider from "./components/MainSlider";
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
        <div className="w-full mx-auto ">
          <MainSlider news={articles.mainArticles} />
          <div className="flex gap-3 justify-between items-center h-[100px] mobile:h-[80px] mt-5">
            <div className="h-full flex-1  bg-loaderBg rounded-xl flex justify-center items-center text-inputPlaceholder text-[16px] mobile:text-[14px] font-mainBold ">
              რეკლამა
            </div>
          </div>
        </div>
        <section className="mt-5">
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
