import { useState } from "react";
import { TimerIcon } from "../../assets/icons/Icons";
import { Tarticle } from "../../pages/Search/Search";
import { image_url_start } from "../../api/axiosCall";
import { Link } from "react-router-dom";

export default function Article(props: {
  data: Tarticle;
  autoWidth?: boolean;
  maxWidth?: boolean;
}) {
  const [favorite, setFavorite] = useState<boolean>(false);

  return (
    <div
      className={`inline-flex items-stretch gap-3 relative  ${
        props.maxWidth
          ? "w-full"
          : props.autoWidth
          ? "w-auto max-w-[750px]"
          : "w-[600px] max-w-[600px]"
      } `}
    >
      <div className="bg-loaderBg aspect-video h-[170px] rounded-lg mobile:h-[110px] mobileSm2:h-[90px] mobileSmallest:h-[80px] relative">
        <Link to={"/news/" + props.data.id}>
          <img
            className="absolute top-0 left-0 h-full w-full object-cover rounded-lg"
            src={image_url_start + props.data.main_image}
            alt={props.data.title}
          />
        </Link>
      </div>
      <div className="relative flex flex-col gap-3 py-2 mobile:gap-2  mobile:py-0">
        {" "}
        <Link to={"/news/" + props.data.id}>
          <h2
            className={`text-title ${
              props.maxWidth ? "max-w-auto" : "max-w-[280px]"
            } mobile:max-w-[230px] mobileSm:max-w-[160px] overflow-hidden text-ellipsis mobile:text-[14px] text-nowrap tracking-wide`}
          >
            {props.data.title}
          </h2>{" "}
        </Link>{" "}
        <Link to={"/news/" + props.data.id}>
          <p
            className={`text-description font-main ${
              props.maxWidth ? "max-w-auto" : "max-w-[280px]"
            } w-full mobile:max-w-[250px] mobileSm2:pr-[45px] mobileSm:max-w-[200px] line-clamp-3 overflow-hidden mobile:text-[14px] text-ellipsis max-h-[150px] mobile:max-h-[50px] mobile:line-clamp-2 tracking-wide`}
          >
            {props.data.description}
          </p>{" "}
        </Link>
        <button
          onClick={() => setFavorite((state) => !state)}
          className={`cursor-pointer  ${
            favorite
              ? "bg-main hover:bg-mainHover"
              : "bg-mainClear hover:bg-mainClearHover"
          } h-[42px] mobile:h-[36px] aspect-square rounded-lg flex absolute bottom-0 right-0 justify-center items-center transition-colors `}
        >
          <TimerIcon
            className={`h-[20px] mobile:h-[18px] aspect-square [&>path]:transition-colors ${
              favorite
                ? "[&>path]:fill-white"
                : "[&>path]:fill-main [&>path]:stroke-main"
            }`}
          />
        </button>
      </div>
    </div>
  );
}
export function SmallArticle(props: {
  autoWidth?: boolean;
  maxWidth: boolean;
}) {
  const [favorite, setFavorite] = useState<boolean>(false);
  return (
    <div
      className={`inline-flex gap-3 relative  ${
        props.maxWidth ? "w-full" : props.autoWidth ? "w-auto" : "w-[475px]"
      } "max-w-[475px]" p-2 transition-colors hover:bg-whiteHover items-center`}
    >
      <div className="cursor-pointer bg-loaderBg aspect-video h-[80px] rounded-lg"></div>
      <div className="h-full flex flex-col  gap-1 select-none">
        <h2 className="cursor-pointer text-title max-w-[150px] overflow-hidden text-[13px] text-ellipsis text-nowrap tracking-wide">
          სათაური
        </h2>
        <p className="cursor-pointer text-description font-main max-w-[450px] text-[13px] overflow-hidden tracking-wide line-clamp-2 text-ellipsis">
          სათაური სათაუ რისათაური სათაური სათაური სათაური სათაუ რისათაური
          სათაური სათაური
        </p>
      </div>
      <button
        onClick={() => setFavorite((state) => !state)}
        className={`cursor-pointer  ${
          favorite ? "bg-mainClear hover:bg-mainClearHover" : ""
        } h-[28px] aspect-square rounded-lg flex absolute top-2 right-2 justify-center items-center transition-colors `}
      >
        <TimerIcon
          className={`h-[14px] aspect-square [&>path]:transition-colors [&>path]:fill-main [&>path]:stroke-main
          `}
        />
      </button>
    </div>
  );
}
