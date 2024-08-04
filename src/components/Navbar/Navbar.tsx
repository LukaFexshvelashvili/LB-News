import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import navLogo from "../../assets/icons/starter.png";
import { CloseIcon, SearchIcon, TimerIcon } from "../../assets/icons/Icons";
import HoverTitle from "../global/HoverTitle";
import { SmallArticle } from "../global/Article";
import { FormEvent, useEffect, useRef, useState } from "react";
import { OutsideClickClose } from "../global/OutsideClickClose";
import axiosCall from "../../api/axiosCall";
import { Tarticle } from "../../pages/Search/Search";
import { useDebounce } from "../functions/AddonFunctions";
import { ContentLoader } from "../../App";

export default function Navbar() {
  const [searchOpen, setSearchOpen] = useState<boolean>(false);

  return (
    <nav className="h-[60px] w-full sticky top-0 bg-navBg z-30">
      <div className="content_container flex h-full justify-between items-center">
        <div className="">
          <Link to={"/"}>
            <img src={navLogo} className="h-[36px] cursor-pointer" />
          </Link>
        </div>
        <div
          className={`mobile:w-full mobile:left-0 mobile:-top-[50px] ${
            searchOpen ? "mobile:translate-y-[50px]" : ""
          } mobile:fixed mobile:h-[50px] mobile:z-30 transition-transform`}
        >
          <SearchArticles
            searchOpen={searchOpen}
            setSearchOpen={setSearchOpen}
          />
        </div>
        <div
          onClick={() => setSearchOpen(false)}
          className={`hidden ${
            searchOpen
              ? "mobile:flex opacity-40 visible"
              : "invisible opacity-0 "
          }  bg-dark fixed top-0 left-0 w-full h-full transition-all`}
        ></div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setSearchOpen(true)}
            className="h-[20px] aspect-square cursor-pointer right-3 hidden mobile:flex "
          >
            <SearchIcon className="h-[20px] aspect-square [&>path]:fill-iconGray" />
          </button>
          <div className="group relative">
            <Link
              className="h-[36px] aspect-square rounded-lg flex items-center justify-center"
              to={"/saved"}
            >
              <TimerIcon className="h-[22px] aspect-square cursor-pointer [&>path]:fill-iconGray" />
            </Link>
            <HoverTitle title="მოგვიანებით სანახავი" bottom left />
          </div>
        </div>
      </div>
    </nav>
  );
}

function SearchArticles(props: {
  searchOpen: boolean;
  setSearchOpen: Function;
}) {
  const [searchParams] = useSearchParams();
  const searchGet: any = searchParams.get("search")
    ? searchParams.get("search")
    : "";

  const [articles, setArticles] = useState<Tarticle[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const [loader, setLoader] = useState<boolean>(false);
  const [search, setSearch] = useState<string>(searchGet);
  const params = new URLSearchParams();
  const inputRef = useRef<null | HTMLInputElement>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const debounce = useDebounce(search, 500);
  const handleForm = (e: FormEvent) => {
    e.preventDefault();
    props.setSearchOpen(false);
    params.append("search", search);
    setOpen(false);
    navigate(`/search?${params.toString()}`);
  };
  useEffect(() => {
    if (search.length >= 1) {
      setLoader(true);
      axiosCall.get("fast_search?search=" + search).then((res) => {
        if (res.data.status == 100) {
          setArticles(res.data.articles);
        }
        setLoader(false);
      });
    } else {
      setArticles([]);
    }
  }, [debounce]);
  useEffect(() => {
    setOpen(false);
    props.setSearchOpen(false);
  }, [location.pathname]);
  useEffect(() => {
    if (props.searchOpen && inputRef.current) {
      inputRef.current.focus();
    } else if (!props.searchOpen && inputRef.current) {
      inputRef.current.blur();
    }
  }, [props.searchOpen]);

  return (
    <OutsideClickClose
      className="mobile:h-full relative z-10"
      activePop={open}
      setActivePop={setOpen}
    >
      <div className="flex items-center relative mobile:h-full mobile:shadow-lg">
        <form
          onSubmit={handleForm}
          className="flex items-center relative mobile:h-full mobile:w-full "
        >
          <input
            type="text"
            placeholder="მოძებნა..."
            className="defInput mobile:h-full mobile:rounded-none mobile:w-[calc(100%-100px)]"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            ref={inputRef}
            onFocus={() => {
              if (!location.pathname.includes("search")) {
                setOpen(true);
              }
            }}
          />
          <div className=" hidden mobile:flex w-[100px]">
            <button
              onClick={handleForm}
              className="flex-1 aspect-square bg-main flex justify-center items-center"
            >
              <SearchIcon className="h-[20px] aspect-square [&>path]:fill-white" />
            </button>
            <button
              type="button"
              onClick={() => {
                props.setSearchOpen(false);
                setOpen(false);
              }}
              className="flex-1 aspect-square bg-navBg flex justify-center items-center"
            >
              <CloseIcon className="h-[14px] aspect-square [&>path]:fill-dark" />
            </button>
          </div>
          <button className="h-[20px] aspect-square absolute cursor-pointer right-3 mobile:hidden ">
            <SearchIcon className="h-[20px] aspect-square [&>path]:fill-iconFade" />
          </button>
          <div
            className={`mobile:top-[50px] mobile:w-full mobile:rounded-none ${
              open ? "visible max-h-[424px]" : "invisible max-h-0"
            } origin-top absolute w-full  h-[424px] bg-navBg rounded-lg shadow-lg left-0 top-[60px] overflow-hidden transition-all duration-300`}
          >
            {/* <p className="text-description text-[14px] text-center my-3">
              მსგავსი სტატია ვერ მოიძებნა
            </p> */}
            {/* <p className="text-description text-[14px] text-center my-3">
              იძებნება...
            </p> */}
            <div className="relative flex flex-col w-full h-full">
              {loader ? <ContentLoader /> : null}
              {articles.map((article: Tarticle) => (
                <SmallArticle data={article} maxWidth />
              ))}
              {articles.length == 0 && search.length > 1 ? (
                <p className="text-center mt-5 text-description text-[14px] font-mainMedium">
                  სტატია ვერ მოიძებნა
                </p>
              ) : null}
              {articles.length == 0 && search.length == 0 ? (
                <p className="text-center mt-5 text-description text-[14px] font-mainMedium">
                  ჩაწერეთ საძიებო სიტყვა
                </p>
              ) : null}
              {articles.length == 4 ? (
                <Link
                  to={"/search?search=" + search}
                  className="text-center flex items-center justify-center h-[40px] text-description text-[14px] font-mainMedium hover:bg-whiteHover"
                >
                  მეტის ნახვა
                </Link>
              ) : null}
            </div>
          </div>
        </form>
      </div>
    </OutsideClickClose>
  );
}
