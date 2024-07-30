import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <section className="w-full h-full">
      <nav className="w-full flex items-center justify-between px-5 py-3">
        <Image src="/images/logo.svg" alt="logo" height={50} width={40} />
        <ul className="flex">
          <li className="mr-4">
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Home
            </a>
          </li>
          <li className="mr-4">
            <a href="#" className="text-gray-600 hover:text-gray-800">
              About
            </a>
          </li>
          <li className="mr-4">
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default page;
