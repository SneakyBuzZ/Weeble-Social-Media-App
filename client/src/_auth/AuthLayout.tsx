import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <>
      <div className="size-full bg-[#0B0B0B] flex flex-row items-center">
        <div className=" flex flex-1 justify-center items-center flex-col">
          <h1 className="text-[#FF5E98] text-7xl">Weeble</h1>
          <p className="text-[#9C9C9C] w-1/2 text-lg text-center">
            Elevate Your Story: Welcome to Weeble, Where Moments Shine Brighter.
          </p>
        </div>
        <section className="flex flex-1 justify-center items-center flex-col  h-full">
          <Outlet />
        </section>
      </div>
    </>
  );
}

export default AuthLayout;
