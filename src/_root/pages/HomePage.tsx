import SideBar from "@/components/shared/SideBar";

type HomePageProps = {
  source: string;
  title: string;
};

function HomePage({ source = "", title = "title" }: HomePageProps) {
  return (
    <>
      <div className="flex justify-center items-center size-full">
        <SideBar />
        <div className="w-5/12 h-full ">
          <div className="avatar">
            <img src={source} alt={title} className="border" />
          </div>
        </div>
        <div className="w-3/12 h-full bg-[#EFEFEF]">
          <div className="avatar">
            <img src={source} alt={title} className="border" />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
