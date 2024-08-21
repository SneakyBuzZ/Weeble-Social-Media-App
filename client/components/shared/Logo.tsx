import Image from "next/image";
import React from "react";

import { Changa } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const changa = Changa({ subsets: ["latin"] });

const Logo = () => {
  return (
    <section className="flex justify-start items-center gap-1">
      <Image
        src={"/assets/images/logo.svg"}
        width={22}
        height={22}
        alt="Logo"
      />
      <div
        className={
          `flex items-center justify-start text-lg text-weeble-primary-light-cream ` +
          changa.className
        }
      >
        <span className="">W</span>
        <span className="text-weeble-primary-reddish-orange">ee</span>
        <span>ble</span>
      </div>
    </section>
  );
};

export default Logo;
