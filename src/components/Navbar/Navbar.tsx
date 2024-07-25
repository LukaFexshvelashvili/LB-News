import { Link } from "react-router-dom";
import navLogo from "../../assets/icons/starter.png";
import { SearchIcon, TimerIcon } from "../../assets/icons/Icons";
import HoverTitle from "../global/HoverTitle";

export default function Navbar() {
  return (
    <nav className="h-[60px] w-full sticky top-0 bg-navBg z-30">
      <div className="content_container flex h-full justify-between items-center">
        <div className="">
          <Link to={"/"}>
            <img src={navLogo} className="h-[36px] cursor-pointer" />
          </Link>
        </div>
        <div className="flex items-center relative">
          <input type="text" placeholder="მოძებნა..." className="defInput" />
          <SearchIcon className="h-[20px] aspect-square absolute cursor-pointer right-3 [&>path]:fill-icon" />
        </div>
        <div className="group relative">
          <Link
            className="h-[36px] aspect-square rounded-lg flex items-center justify-center"
            to={"/"}
          >
            <TimerIcon className="h-[24px] aspect-square cursor-pointer [&>path]:fill-iconGray" />
          </Link>
          <HoverTitle title="მოგვიანებით სანახავი" bottom />
        </div>
      </div>
    </nav>
  );
}
