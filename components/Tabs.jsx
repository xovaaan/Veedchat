"use client";
import Image from "next/image";
import React, { useState } from "react";

function Tabs() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div
      id="Features"
      className="text-center w-full items-center 
    justify-start flex flex-col bg-[#0A0A0A] text-white px-8 py-20"
    >
      <h2 className="text-5xl">
        Everything you need to chat with any youtube video
      </h2>
      <p className="text-lg py-6">
        With the power of our AI based chrome extention, get the full use of chatting with any youtube video
      </p>
      <div className="grid grid-cols-2 w-full p-4 gap-x-6 mt-12">
        <div className="space-y-6 w-2/3 ">
          {tabItems.map((tab) => (
            <div
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`cursor-pointer w-full items-start
            justify-start text-white hover:opacity-80 rounded-xl px-4 py-2 hover:text-white ${
              tab.id === activeTab ? "bg-white text-black " : ""
            }`}
            >
              <h3
                className={` text-left text-2xl ${
                  activeTab === tab.id ? "text-black" : "text-white"
                }`}
              >
                {tab.title}
              </h3>
              <h3
                className={`text-left text-md ${
                  activeTab === tab.id ? "text-black" : "text-white"
                }`}
              >
                {tab.description}
              </h3>
            </div>
          ))}
        </div>
        <Image
          height={1000}
          width={1000}
          alt=""
          className="object-center"
          src={tabItems.filter((item) => item.id === activeTab)[0].image}
        />
      </div>
    </div>
  );
}

export default Tabs;

const tabItems = [
  {
    id: 0,
    title: "Video Summary",
    description: "Summarize any youtube video at the same page",
    image: "/01.png",
  },
  {
    id: 1,
    title: "Q&A Feature",
    description:
      "Ask the AI about any youtube video and get instant answers about the video without watching everysecond of it.",
    image: "/02.png",
  },
  {
    id: 2,
    title: "Metrics Tracking",
    description: "You can track your usage by using your own API Keys.",
    image: "/03.png",
  },
];
