/* eslint-disable @next/next/no-img-element */
import React from "react";

function Testimonials() {
  return (
    <div
      id="Testimonials"
      className="py-20 px-8 w-full min-h-screen bg-[#0A0A0A]
    items-center justify-start flex flex-col"
    >
      <h2 className="text-white font-medium text-5xl text-center">
        Loved by businesses worldwide.
      </h2>
      <p className="text-lg text-white w-2/3 text-center mt-6">
        Our software is so simple that people can’t help but fall in love with
        it. Simplicity is easy when you just skip tons of mission-critical
        features.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-20">
        {testimonailItems.map((item) => (
          <div
            key={item.id}
            className="bg-[#212121] rounded-xl border border-black/10 py-10 h-fit
             px-4 items-start justify-between flex flex-col shadow-black/10 shadow-lg"
          >
            <h3 className="text-lg">{item.content}</h3>
            <span className="flex items-center justify-between w-full mt-6">
              <span>
                <p>{item.author.name}</p>
                <p>{item.author.title}</p>
              </span>
              <img
                src={item.author.image}
                alt={item.author.name}
                className="w-32 object-center rounded-full"
              />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;

const testimonailItems = [
  {
    id: 0,
    content: `Veedchat makes chatting with YouTube videos a breeze. It’s almost too good to be true, but it really works!`,
    author: {
      name: "Sheryl Berge",
      title: "CEO at Lynch LLC",
      image: "/ross.jpg"
    },
  },
  {
    id: 1,
    content: `Using Veedchat is incredibly straightforward. Sometimes I wonder if it's actually fulfilling all my needs, but it is!`,
    author: {
      name: "Leland Kiehn",
      title: "Founder of Kiehn and Sons",
      image: "/zuck.jpg"
    },
  },
  {
    id: 2,
    content: `Veedchat is so user-friendly; I keep thinking there must be a catch, but it does everything I need perfectly!`,
    author: {
      name: "Peter Renolds",
      title: "Founder of West Inc",
      image: "/jensen.jpg"
    },
  },
  {
    id: 4,
    content: `With Veedchat, interacting with YouTube videos is effortless. It feels too simple, but it gets the job done!`,
    author: {
      name: "Peter Renolds",
      title: "Founder of West Inc",
      image: "/sam.jpg"
    },
  },
  {
    id: 5,
    content: `Veedchat’s ease of use makes me skeptical about its functionality, but it genuinely meets all my expectations.`,
    author: {
      name: "Sheryl Berge",
      title: "CEO at Lynch LLC",
      image: "/sam.jpg"
    },
  },
  {
    id: 6,
    content: `The simplicity of Veedchat is amazing. I often question if it’s meeting all the standards, but it’s flawless!`,
    author: {
      name: "Leland Kiehn",
      title: "Founder of Kiehn and Sons",
      image: "/elon.jpg"
    },
  },
];
