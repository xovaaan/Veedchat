import { useRouter } from "next/navigation";
import React from "react";

function CTAButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push("/plans")}
      className="px-5 py-3 hover:opacity-90  bg-white text-black text-md rounded-full"
    >
      Get Started
    </button>
  );
}

export default CTAButton;
