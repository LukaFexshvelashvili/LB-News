import { useEffect, useState } from "react";
import axiosCall from "../../api/axiosCall";
import Article from "../../components/global/Article";
import { useDispatch, useSelector } from "react-redux";
import { setWebLoader } from "../../store/WebSlice";
import { StoreState } from "../../store/store";
import { Tarticle } from "../Search/Search";
import { ContentLoader } from "../../App";

export default function SavedNews() {
  const [products, setProducts] = useState<Tarticle[]>([]);
  const [loader, setLoader] = useState<boolean>(false);
  const dispatch = useDispatch();
  const user = useSelector((store: StoreState) => store.user);
  useEffect(() => {
    setLoader(true);
    dispatch(setWebLoader({ active: true, opacity: true }));
    const formData = new FormData();
    const getStorage: any = localStorage.getItem("fav_articles")
      ? localStorage.getItem("fav_articles")
      : JSON.stringify([]);

    formData.append("favorites", getStorage);

    axiosCall.post("favorites", formData).then((res) => {
      dispatch(setWebLoader({ active: false }));
      setLoader(false);
      if (res.data.status == 100) {
        setProducts(res.data.articles);
      } else {
        setProducts([]);
      }
    });
  }, [user.favorites]);

  return (
    <main className="py-[50px]">
      <div className="content_container">
        <h1 className="text-title font-mainSemiBold mb-5">შენახული სტატიები</h1>
        {products.length == 0 ? (
          <h2 className="text-description text-center font-mainSemiBold ">
            სია ცარიელია
          </h2>
        ) : (
          <div className="relatice min-h-[50px] flex gap-5 flex-wrap">
            {loader ? (
              <ContentLoader />
            ) : (
              products.map((article: Tarticle, i: number) => (
                <Article key={i} data={article} maxWidth />
              ))
            )}
          </div>
        )}
        <div className="flex gap-5 flex-wrap"></div>
      </div>
    </main>
  );
}
