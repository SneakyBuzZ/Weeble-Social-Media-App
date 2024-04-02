import { Button } from "../ui/button";

function LeftSideBar() {
  return (
    <>
      <div className="leftsidebar flex flex-col text-white py-5">
        <div className="flex flex-col items-center justify-center gap-3 h-2/6 ">
          <img src="profile.png" width={70} alt="profile" />
          <h1 className="text-xs">@sneaky_buzz</h1>
          <div className="flex justify-center items-center gap-4 text-center w-10/12 border-b pb-5">
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
          <div className="flex items-cente gap-4 w-full pl-10">
            <h1>.</h1>
            <h1>Home</h1>
          </div>
          <div className="flex items-center gap-4 w-full pl-10">
            <h1>.</h1>
            <h1>Home</h1>
          </div>
          <div className="flex items-center gap-4 w-full pl-10">
            <h1>.</h1>
            <h1>Explore</h1>
          </div>
          <div className="flex items-center gap-4 w-full pl-10">
            <h1>.</h1>
            <h1>Saved</h1>
          </div>
          <div className="flex items-center gap-4 w-full pl-10">
            <h1>.</h1>
            <h1>Addpost</h1>
          </div>
          <div className="flex items-center gap-4 w-full pl-10">
            <h1>.</h1>
            <h1>Friends</h1>
          </div>
        </div>
        <div className="h-1/6  flex flex-col gap-1 justify-center">
          <Button className="w-3/5 h-8 mx-auto" variant={"outline"}>
            Logout
          </Button>
          <h1 className="w-full text-center text-xs">help?</h1>
        </div>
      </div>
    </>
  );
}

export default LeftSideBar;
