import { navItems } from "@/lib/constants/navigation";
import { Button } from "../ui/button";
import { NavLink } from "react-router-dom";

function LeftSideBar() {
  return (
    <>
      <div className="leftsidebar flex flex-col text-white py-5">
        <div className="flex flex-col items-center justify-center gap-3 h-2/6 ">
          <img src="profile.png" width={70} alt="profile" />
          <h1 className="text-xs">@sneaky_buzz</h1>
          <div className="flex justify-center items-center gap-4 text-center w-9/12 border-b border-gray-500 pb-5">
            <div className="flex flex-col justify-center">
              <h1 className="text-sm">30</h1>
              <p className="text-[8px]">Friends</p>
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-sm">10</h1>
              <p className="text-[8px]">Posts</p>
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-sm">60</h1>
              <p className="text-[8px]">Following</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full gap-1 justify-start items-center h-3/6  py-5">
          {navItems.map((eachItem) => (
            <li key={eachItem.id} className="w-2/3 flex flex-col">
              <NavLink
                to={eachItem.route}
                className={({ isActive }) =>
                  `${
                    isActive
                      ? " text-purple-400 grayscale-0 weeble-bg-button"
                      : "hover:text-purple-300 "
                  }
                  flex items-center gap-4 w-full pl-3 xl:pl-7 grayscale hover:grayscale-0 text-pink-300 my-1 rounded-md py-1`
                }
              >
                <img src={eachItem.imageIcon} width={20} alt={eachItem.label} />
                <h1 className="text-lg lg:text-xl ">{eachItem.label}</h1>
              </NavLink>
            </li>
          ))}
        </div>

        <div className="h-1/6  flex flex-col gap-2 justify-center">
          <Button className="w-2/5 h-7 mx-auto weeble-bg-button py-1">
            Logout
          </Button>
          <h1 className="w-full text-center text-xs">--- help? ---</h1>
        </div>
      </div>
    </>
  );
}

export default LeftSideBar;
