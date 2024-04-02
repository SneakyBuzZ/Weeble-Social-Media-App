import BottomBar from "@/components/shared/BottomBar";
import LeftSideBar from "@/components/shared/LeftSideBar";
import RightSideBar from "@/components/shared/RightSideBar";

import TopBar from "@/components/shared/TopBar";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <div className="w-full md:flex weeble-bg">
        <TopBar />
        <LeftSideBar />

        <section className="flex flex-1 h-full md:w-5/12">
          <Outlet />
        </section>

        <BottomBar />
        <RightSideBar />
      </div>
    </>
  );
}

export default RootLayout;
