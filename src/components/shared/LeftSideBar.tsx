import { navItems } from "@/lib/constants/navigation";
import { Button } from "../ui/button";
import { NavLink, useNavigate } from "react-router-dom";
import { profileStats } from "@/lib/constants/profileStats";
import { useSignOutAccountMutation } from "@/lib/react-query/queriesAndMutations";
import Loader from "./Loader";
import { useAuthContext } from "@/contexts/AuthContext";

function LeftSideBar() {
  const { isLoading: isUserLoading } = useAuthContext();
  const { mutate: signOutAccount, isSuccess } = useSignOutAccountMutation();
  const navigate = useNavigate();
  if (isSuccess) navigate("/sign-in");

  const { user } = useAuthContext();
  return (
    <>
      <div className="leftsidebar flex flex-col text-white py-5">
        <div className="flex flex-col items-center justify-center gap-3 h-2/6 ">
          <img
            className="profile_pic "
            src="profile.png"
            width={60}
            alt="profile"
          />
          <h1 className="text-md lg:text-lg">{user.name}</h1>
          <h1 className="text-xs lg:text-sm relative bottom-3 text-neutral-400">
            {user.username}
          </h1>
          <div className="flex justify-center items-center gap-4 text-center w-9/12 border-b border-neutral-800 pb-5">
            {profileStats.map((eachItem) => (
              <div key={eachItem.stat} className="flex flex-col justify-center">
                <h1 className="lg:text-md md:text-sm">{eachItem.number}</h1>
                <p className="lg:text-[12px] md:text-[8px]">{eachItem.stat}</p>
              </div>
            ))}
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
                      ? " text-pink-400 grayscale-0 "
                      : "hover:text-pink-300 "
                  }
                  flex items-center gap-4 w-full pl-3 xl:pl-7 grayscale text-pink-300 my-1 rounded-md py-1`
                }
              >
                <img src={eachItem.imageIcon} width={18} alt={eachItem.label} />
                <h1 className="text-md lg:text-lg ">{eachItem.label}</h1>
              </NavLink>
            </li>
          ))}
        </div>

        <div className="h-1/6  flex flex-col gap-1 justify-center items-center">
          <Button
            onClick={() => signOutAccount()}
            className="transition ease-in-out delay-150 weeble-bg-button text-neutral-300 hover:text-white duration-300 w-2/3 "
          >
            {isUserLoading ? <Loader /> : null}
            <h1 className="text-[17px] ">Logout</h1>
          </Button>

          <div className="w-2/3 flex justify-evenly items-center">
            <h1 className="h-full text-pink-200 text-[15px]">
              please visit again!
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default LeftSideBar;
