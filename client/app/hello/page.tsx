import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }
  return <div className="text-white">HELLO</div>;
};

export default page;
