import {
  Dialog,
  DialogContent,
  DialogDescription,
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
          <Button className="transition ease-in-out delay-150 bg-[#8200A2] text-neutral-300 hover:text-white duration-300">
            {label}
          </Button>
        </DialogTrigger>
        <DialogContent className=" bg-purple-200">
          <DialogHeader>
            <DialogTitle className="text-white">
              Are you absolutely sure?
            </DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CreatePostModal;
