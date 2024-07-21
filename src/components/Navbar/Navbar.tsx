import { Link } from "react-router-dom";
import navLogo from "../../assets/icons/starter.png";

export default function Navbar() {
  return (
    <nav className="h-[60px] w-full sticky top-0 bg-navBg">
      <div className="content_container flex h-full justify-between items-center">
        <div className="">
          <Link to={"/"}>
            <img src={navLogo} className="h-[40px] cursor-pointer" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
