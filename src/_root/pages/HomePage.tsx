import CreatePostModal from "@/components/modals/CreatePostModal";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

function HomePage() {
  return (
    <>
      <div className="w-full flex flex-col items-center py-2 md:py-10">
        <div className="flex w-10/12 gap-1">
          <Input className="bg-[#4e4e4e76] border-none" placeholder="Search" />

          <CreatePostModal label={"Create Post"} />
        </div>
      </div>
    </>
  );
}

export default HomePage;
