"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import axios from "axios";

const page = () => {
  const [file, setFile] = useState<File | null>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files ? e.target.files[0] : null);
  };
  const handleSubmit = async () => {
    const responseUrl = await axios.get(
      "http://localhost:8000/weeble/api/s3/pre-signed-url",
      {
        params: {
          fileName: file?.name,
          contentType: file?.type,
          userId: "anljkdnskjaj",
        },
      }
    );

    console.log("PRE-SIGNED URL: ", responseUrl.data.data);

    if (responseUrl.data.data.url) {
      await axios.put(responseUrl.data.data.url, file, {
        headers: {
          "Content-Type": file?.type,
        },
      });
    }
  };
  return (
    <div className="text-black w-full flex flex-col h-screen justify-center items-center">
      <h1 className="text-xl font-semibold w-1/2 text-center mb-5">
        Uploading files to S3 Bucket using Pre-signed URLs
      </h1>
      <div className="grid w-full max-w-sm items-center gap-1.5 border-2 p-10 bg-stone-50 rounded-md">
        <label htmlFor="picture">Picture</label>
        <Input onChange={handleChange} id="picture" type="file" />
        <Button onClick={handleSubmit}>Submit</Button>
      </div>
    </div>
  );
};

export default page;
