import { useState } from "react";
import { TimerIcon } from "../../assets/icons/Icons";

export default function Article(props: { autoWidth?: boolean }) {
  const [favorite, setFavorite] = useState<boolean>(false);
  return (
    <div
      className={`inline-flex items-stretch gap-3 relative  ${
        props.autoWidth ? "w-auto" : "w-[775px]"
      } "max-w-[775px]"`}
    >
      <div className="bg-loaderBg aspect-video h-[180px] rounded-lg"></div>
      <div className="h-full flex flex-col gap-3 py-2 ">
        <h2 className="text-title max-w-[450px] overflow-hidden text-ellipsis text-nowrap tracking-wide">
          სათაური
        </h2>
        <p className="text-description font-main max-w-[450px] overflow-hidden text-ellipsis max-h-[150px] tracking-wide">
          სათაური სათაუ რისათაური სათაური სათაური
        </p>
      </div>
      <button
        onClick={() => setFavorite((state) => !state)}
        className={`cursor-pointer  ${
          favorite
            ? "bg-main hover:bg-mainHover"
            : "bg-mainClear hover:bg-mainClearHover"
        } h-[42px] aspect-square rounded-lg flex absolute bottom-0 right-0 justify-center items-center transition-colors `}
      >
        <TimerIcon
          className={`h-[20px] aspect-square [&>path]:transition-colors ${
            favorite
              ? "[&>path]:fill-white"
              : "[&>path]:fill-main [&>path]:stroke-main"
          }`}
        />
      </button>
    </div>
  );
}
