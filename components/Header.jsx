import Image from "next/image";
import Link from "next/link";
import React from "react";
import { signIn } from "next-auth/react";

function Header() {
  return (
    <div className="w-full bg-black grid grid-cols-2 p-4">
      {/* left */}
      <div
        className="w-full flex items-center justify-start space-x-4 col-span-1 lg:space-x-6"
      >
        {/* logo */}
        <Image
          src="/communication.png" // replace with the path to your image
          alt="Logo"
          width={40}
          height={40}
        />
        {/* navlinks */}
        <div className="flex space-x-3 text-3xl">
          <Link className="navLink text-xl" href="#Features">
            Features
          </Link>
          <Link className="navLink text-xl" href="#Testimonials">
            Testimonials
          </Link>
          <Link className="navLink text-xl" href="#Pricing">
            Pricing
          </Link>
        </div>
      </div>

      {/* right */}
      <div className="w-full space-x-4 flex items-center justify-end col-span-1">
        <button
          className="rounded-3xl text-md bg-[#2563EB] hover:opacity-85 text-white px-4 py-2"
          onClick={() => signIn("google")}
        >
          Sign In
        </button>
        <button className="rounded-3xl text-md bg-[#2563EB] text-white px-4 py-2.5 text-sm hover:opacity-85">
          Get Started Today
        </button>
      </div>
    </div>
  );
}

export default Header;
