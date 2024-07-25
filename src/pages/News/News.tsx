import { useState } from "react";
import { LikeIcon, TimerIcon, ViewIcon } from "../../assets/icons/Icons";
import newsImage from "../../assets/images/1.jfif";

export default function News() {
  return (
    <main className="py-[50px]">
      <div className="content_container">
        <main className="flex gap-3">
          <section className="flex flex-[3] flex-col gap-4 p-1">
            <NewsStarter />
            <div className="flex items-center justify-end gap-6">
              <div className="flex gap-3 items-center font-mainBold text-info">
                <LikeIcon
                  className={`h-[20px] aspect-square [&>path]:transition-colors [&>path]:fill-info`}
                />{" "}
                252
              </div>
              <div className="flex gap-3 items-center font-mainBold text-info">
                <ViewIcon
                  className={`h-[20px] aspect-square [&>path]:transition-colors [&>path]:fill-info`}
                />{" "}
                3300
              </div>
            </div>

            <h1 className="text-title text-[22px] text-center">სათაური</h1>
            <p className="text-description text-[18px] text-start leading-9">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
              molestiae officia consectetur, reprehenderit explicabo error
              numquam ipsam officiis architecto pariatur provident voluptatum,
              labore facere repellat sed. Vel, nemo dicta. Qui. reprehenderit
              explicabo error numquam ipsam officiis architecto pariatur
              provident voluptatum, labore facere repellat sed. Vel, nemo dicta.
              Qui. reprehenderit explicabo error numquam ipsam officiis
              architecto pariatur provident voluptatum, labore facere repellat
              sed. Vel, nemo dicta. Qui. reprehenderit explicabo error numquam
              ipsam officiis architecto pariatur provident voluptatum, labore
              facere repellat sed. Vel, nemo dicta. Qui.
            </p>
            <div className="w-full h-[200px] my-5 bg-loaderBg rounded-lg flex justify-center items-center text-inputPlaceholder text-[18px] font-mainBold">
              რეკლამა
            </div>
            <p className="text-description text-[18px] text-start leading-9">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
              molestiae officia consectetur, reprehenderit explicabo error
              numquam ipsam officiis architecto pariatur provident voluptatum,
              labore facere repellat sed. Vel, nemo dicta. Qui. reprehenderit
              explicabo error numquam ipsam officiis architecto pariatur
              provident voluptatum, labore facere repellat sed. Vel, nemo dicta.
              Qui. reprehenderit explicabo error numquam ipsam officiis
              architecto pariatur provident voluptatum, labore facere repellat
              sed. Vel, nemo dicta. Qui. reprehenderit explicabo error numquam
              ipsam officiis architecto pariatur provident voluptatum, labore
              facere repellat sed. Vel, nemo dicta. Qui. reprehenderit explicabo
              error numquam ipsam officiis architecto pariatur provident
              voluptatum, labore facere repellat sed. Vel, nemo dicta. Qui.
              reprehenderit explicabo error numquam ipsam officiis architecto
              pariatur provident voluptatum, labore facere repellat sed. Vel,
              nemo dicta. Qui. reprehenderit explicabo error numquam ipsam
              officiis architecto pariatur provident voluptatum, labore facere
              repellat sed. Vel, nemo dicta. Qui. reprehenderit explicabo error
              numquam ipsam officiis architecto pariatur provident voluptatum,
              labore facere repellat sed. Vel, nemo dicta. Qui.
            </p>
            <div className=" relative w-full h-[300px] bg-loaderBg rounded-lg overflow-hidden">
              <img
                src={newsImage}
                className="absolute top-0 left-0 w-full h-full object-cover  rounded-xl"
                alt="news photo"
              />
            </div>
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
function NewsStarter() {
  const [favorite, setFavorite] = useState<boolean>(false);
  const [like, setLike] = useState<boolean>(false);

  return (
    <div className=" relative w-full h-[300px] bg-loaderBg rounded-lg overflow-hidden">
      <img
        src={newsImage}
        className="absolute top-0 left-0 w-full h-full object-cover  rounded-xl"
        alt="news photo"
      />
      <div className="absolute pt-5 px-5 z-10 flex w-full justify-between items-start">
        <h1 className=" font-main tracking-wider  text-white text-[18px]">
          ტრამპის მკვლელობის მცდელობა
        </h1>
        <div className="flex gap-3 ">
          <button
            onClick={() => setLike((state) => !state)}
            className={`cursor-pointer  ${
              like
                ? "bg-white hover:bg-whiteFade"
                : "bg-iconBg hover:bg-iconBgHover"
            } h-[42px] aspect-square rounded-lg flex  justify-center items-center transition-colors `}
          >
            <LikeIcon
              className={`h-[20px] aspect-square [&>path]:transition-colors ${
                like ? "[&>path]:fill-main" : "[&>path]:fill-icon"
              }`}
            />
          </button>
          <button
            onClick={() => setFavorite((state) => !state)}
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
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-bodyBg"></div>
    </div>
  );
}
