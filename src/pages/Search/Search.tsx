import { useSearchParams } from "react-router-dom";
import Article from "../../components/global/Article";
// import json from "../../assets/stories.json";

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
  // const articles: Tarticle[] = JSON.parse(JSON.stringify(json));

  return (
    <main className="py-[50px]">
      <div className="content_container">
        <h1 className="text-title text-[18px] font-mainSemiBold mb-2">
          ძებნა : {params.get("search") ? params.get("search") : null}
        </h1>
        <h2 className="text-description text-[15px] text-start font-mainSemiBold  mb-5">
          ნაპოვნია: 0 სტატია
        </h2>

        <div className="flex gap-5 flex-wrap">
          {/* {articles.map((article: Tarticle, i: number) => (
            <Article key={i} data={article} maxWidth />
          ))} */}
        </div>
      </div>
    </main>
  );
}
