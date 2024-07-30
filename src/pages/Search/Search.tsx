import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axiosCall from "../../api/axiosCall";
import Article from "../../components/global/Article";
import { ContentLoader } from "../../App";

export type Tarticle = {
  id: number;
  main_image: string;
  title: string;
  second_title: string;
  description: string;
  second_image: string;
  second_description: string;
};

export default function Search() {
  const [params] = useSearchParams();
  const [articles, setArticles] = useState<Tarticle[]>([]);
  const [loader, setLoader] = useState<boolean>(false);
  const search = params.get("search");
  useEffect(() => {
    if (search && search.length >= 1) {
      setLoader(true);
      axiosCall.get("fast_search?search=" + search).then((res) => {
        if (res.data.status == 100) {
          setArticles(res.data.articles);
        }
        setLoader(false);
      });
    }
  }, [search]);

  return (
    <main className="py-[50px]">
      <div className="content_container">
        <h1 className="text-title text-[18px] font-mainSemiBold mb-2">
          ძებნა : {params.get("search") ? params.get("search") : null}
        </h1>
        <h2 className="text-description text-[15px] text-start font-mainSemiBold  mb-5">
          ნაპოვნია: {articles.length} სტატია
        </h2>

        <div className="relatice min-h-[200px] flex gap-5 flex-wrap">
          {loader ? <ContentLoader /> : null}
          {articles.map((article: Tarticle, i: number) => (
            <Article key={i} data={article} maxWidth />
          ))}
        </div>
      </div>
    </main>
  );
}
