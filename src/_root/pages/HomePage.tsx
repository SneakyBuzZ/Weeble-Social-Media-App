import CreatePostModal from "@/components/modals/CreatePostModal";
import Loader from "@/components/shared/Loader";
import { Input } from "@/components/ui/input";
import { useGetRecentPostsMutation } from "@/lib/react-query/queriesAndMutations";
import { Models } from "appwrite";

function HomePage() {
  const {
    data: posts,
    isPending: isPostLoading,
    isError: isErrorPosts,
  } = useGetRecentPostsMutation();
  return (
    <>
      <div className="w-full flex flex-col items-center py-2 md:py-10">
        <div className="flex w-10/12 gap-1 ">
          <Input
            className="weeble-bg-button border-none"
            placeholder="Search"
          />
          <CreatePostModal label={"Create Post"} />
        </div>
        <div className="flex flex-col justify-center items-center">
          {isPostLoading ? (
            <Loader />
          ) : (
            <ul className="text-white">
              <h1>THERE ARE</h1>
            </ul>
          )}
        </div>
      </div>
    </>
  );
}

export default HomePage;
