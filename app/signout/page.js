"use client";
import { signOut } from "next-auth/react";
import React from "react";

function SignOutPage() {
  return (
    <div
      className="cursor-pointer min-h-screen items-center justify-center 
    flex w-full bg-black text-black"  style={{ backgroundImage: "url('/hddd.jpg')" }} // Replace with your image path
    >
      <button
        onClick={() => signOut()}
        className="hover:opacity-90 bg-slate-200 px-8 text-xl py-5  rounded-xl smooth cursor-pointer"
      >
        Sign Out
      </button>
    </div>
  );
}

export default SignOutPage;
