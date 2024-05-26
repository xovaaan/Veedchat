import React from "react";
import CTAButton from "./CTAButton";
import { signIn, useSession } from "next-auth/react";
import { pay } from "@/app/actions/actions";
import { usePlan } from "@/hooks/usePlan";
import { useRouter } from "next/navigation";

function Pricing({ plansPage }) {
  const { data: session } = useSession();
  const { active, customerPortal } = usePlan();
  const router = useRouter();
  return (
    <div
      id="Pricing"
      className="min-h-screen w-full items-center justify-start flex flex-col bg-black pt-20 pb-12 px-10"
    >
      <h1 className="text-6xl text-white font-medium text-center">
        Simple pricing for everyone
      </h1>
      <p className="w-1/2 text-center mt-8 text-white">
        It doesn’t matter how many videos you watch daily, we take only a portion of it to save your time!
      </p>
      <div className="w-full items-center justify-center flex py-20">
        <div
          className="rounded-xl min-h-[400px] bg-[#212121] min-w-[25%] shadow-white/10 shadow-xl
         text-black py-4 px-4 items-start justify-start flex flex-col relative"
        >
          <span className="w-full flex items-center justify-between">
            <h2 className="text-white font-medium text-4xl py-4">$5.99/Month</h2>
            {plansPage ? (
              <button className="bg-white rounded-xl px-4 py-2"
                onClick={() =>
                  session
                    ? active
                      ? router.replace(customerPortal)
                      : pay(session)
                    : signIn("google")
                }
              >
                {session
                  ? active
                    ? "Handle Plan"
                    : "Subscribe"
                  : "Sign In First"}
              </button>
            ) : (
              <CTAButton />
            )}
          </span>
          <span className="w-full h-[0.5px] bg-black/20 mb-8" />
          <h2 className="text-2xl text-white font-medium">Simple Plan</h2>
          <p className="text-sm mt-2 mb-6 text-white">Get instant access to the extension.</p>
          <span className="space-y-4 mt-6 ">
            <p className="text-md text-white">
              ✓ Summarize any youtube video
            </p>{" "}
            <p className="text-md text-white">
              ✓ Chat with any youtube video using AI.
            </p>{" "}
            <p className="text-md text-white">
              ✓ Handle your own API Key for better tracking
            </p>{" "}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
