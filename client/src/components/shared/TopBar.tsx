import { Button } from "../ui/button";
import { LogOut } from "lucide-react";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <>
      <div className="topbar flex justify-between px-5 py-3">
        <div className=" text-white w-1/2 flex items-center">
          <Link to="/">
            <img
              className="dropShadow"
              src="weeble_logo.png"
              height={50}
              width={50}
              alt="weeble"
            />
          </Link>
          <h1 className="purple-to-pink pacifico-regular text-lg">Weeble</h1>
        </div>
        <div className=" text-white w-1/2 flex justify-end items-center gap-1">
          <Button variant={"ghost"} className="hover:grayscale">
            <LogOut
              height={17}
              width={17}
              color="#FF90B8"
              className=" rotate-180"
            />
          </Button>
          <Link to="/">
            <div className="">
              <img src="profile.png" width={32} alt="profile" />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default TopBar;
