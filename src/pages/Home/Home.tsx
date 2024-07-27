import { useEffect, useState } from "react";
import CardSlider from "../../components/global/CardSlider";
import { Tarticle } from "../Search/Search";
import axiosCall from "../../api/axiosCall";
type Tarticles = {
  popular: Tarticle[];
  new: Tarticle[];
  liked: Tarticle[];
};
export default function Home() {
  const [articles, setArticles] = useState<Tarticles>({
    popular: [],
    new: [],
    liked: [],
  });
  useEffect(() => {
    axiosCall.get("articles").then((res) => {
      if (res.data.status == 100) {
        setArticles({
          popular: res.data.articles.slice(0, 10),
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
            <div className="h-full flex-1 medium:flex-auto  bg-loaderBg rounded-2xl medium:h-[200px] mobile:h-[150px] medium:w-full"></div>
            <div className="h-full flex-1 medium:flex-auto  bg-loaderBg rounded-2xl medium:h-[200px] mobile:h-[150px] medium:w-full"></div>
            <div className="h-full flex-1 medium:flex-auto  bg-loaderBg rounded-2xl medium:h-[200px] mobile:h-[150px] medium:w-full"></div>
          </div>
          <div className="flex gap-3 justify-between items-center h-[200px] mt-3 medium:h-auto  medium:flex-col mobile:hidden">
            <div className="h-full flex-1 medium:flex-auto  bg-loaderBg rounded-2xl medium:h-[200px] mobile:h-[150px] medium:w-full"></div>
            <div className="h-full flex-1 medium:flex-auto  bg-loaderBg rounded-2xl medium:h-[200px] mobile:h-[150px] medium:w-full"></div>
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
