import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";

const CreatePostModal = ({ label }: { label: String }) => {
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <Button className="special-button-gradient transition ease-in-out delay-150 text-neutral-300 hover:text-white duration-300 w-full ">
            {label}
          </Button>
        </DialogTrigger>
        <DialogContent className="bg-[#2a2a2a] border-none   overflow-y-auto rounded-lg w-4/5">
          <DialogHeader>
            <DialogTitle className="text-white w-full text-center ">
              Create Post
            </DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CreatePostModal;
