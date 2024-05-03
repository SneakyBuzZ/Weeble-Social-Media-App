import { navItemsBottom } from "@/lib/constants/navigation";
import { NavLink } from "react-router-dom";

const BottomBar = () => {
  return (
    <div className="bottom-bar border hover:">
      {navItemsBottom.map((eachItem) => (
        <NavLink
          key={eachItem.id}
          to={eachItem.route}
          className={({ isActive }) =>
            `${
              isActive ? "grayscale-0" : " grayscale"
            } transition ease-in-out  duration-50`
          }
        >
          <img className={``} src={eachItem.imageIcon} alt={eachItem.label} />
        </NavLink>
      ))}
    </div>
  );
};

export default BottomBar;
