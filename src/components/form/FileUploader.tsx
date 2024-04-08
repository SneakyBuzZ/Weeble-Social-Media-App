import { useCallback, useState } from "react";
import { FileWithPath, useDropzone } from "react-dropzone";
import { Button } from "../ui/button";

type FileUploaderProps = {
  fieldChange: (FILES: File[]) => void;
  medialUrl: string;
};

export default function FileUploader({
  fieldChange,
  medialUrl,
}: FileUploaderProps) {
  const [file, setFile] = useState<File[]>([]);
  const [fileUrl, setFileUrl] = useState(medialUrl);
  const onDrop = useCallback(
    (acceptedFiles: FileWithPath[]) => {
      setFile(acceptedFiles);
      fieldChange(acceptedFiles);
      setFileUrl(URL.createObjectURL(acceptedFiles[0]));
    },
    [file]
  );
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".png", ".jpeg", ".jpg", ".svg"],
    },
  });

  return (
    <div {...getRootProps()} className="bg-neutral-900 p-5 rounded-md">
      <input {...getInputProps()} />
      {fileUrl ? (
        <div className="flex flex-col justify-center items-center">
          <img className="w-52" src={fileUrl} alt="file" />
          <p className="text-neutral-400 mt-2">Click or Drag to replace</p>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center">
          <img
            src="/upload_icon.png"
            className=" invert opacity-80 w-20 md:w-24"
            alt=""
          />
          <h1 className=" text-neutral-600 mt-4">Drag and drop it here!</h1>
          <Button size={"sm"} className="bg-neutral-600 ">
            Browse
          </Button>
        </div>
      )}
    </div>
  );
}
