import React from "react";

function FAQs() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] w-full items-center justify-start flex flex-col pt-24 pb-3 px-8">
      <h2 className="text-4xl  text-[#FCFBFC] font-medium">
        Frequently asked questions
      </h2>
      <p className="text-lg w-1/2 pt-6">
        If you can’t find what you’re looking for, email our support team and if
        you’re lucky someone will get back 
      </p>
      <div className="w-full grid grid-cols-3 gap-8 mt-10">
        {Qs.map((question) => (
          <div key={question.id} className="space-y-3 h-fit">
            <h3 className="text-2xl font-medium">{question.q}</h3>
            <p className="text-md text-[#FFEBCD]">{question.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQs;

const Qs = [
  {
    id: 0,
    q: "Does Veedchat support video downloads?",
    a: "Well no, but you can use third-party tools to download and then upload them for summaries.",
  },
  {
    id: 1,
    q: "Can Veedchat be used on mobile devices?",
    a: "Well no, but you can access YouTube through your mobile browser and use desktop mode to enable it.",
  },
  {
    id: 2,
    q: "Does Veedchat provide real-time video translation?",
    a: "Well no, but it can summarize videos in multiple languages after they've been uploaded.",
  },
  {
    id: 3,
    q: "Can Veedchat summarize live streams?",
    a: "Well no, but you can record the live stream and then use Veedchat to get a summary afterward.",
  },
  {
    id: 4,
    q: "Does Veedchat work with other video platforms?",
    a: "Well no, but it’s perfect for YouTube, and other platform support might be added in the future.",
  },
  {
    id: 5,
    q: "Can Veedchat generate subtitles for videos?",
    a: "Well no, but it can provide summaries which you can then convert into subtitles manually.",
  },
  {
    id: 6,
    q: "Does Veedchat offer transcription services?",
    a: "Well no, but the summaries can be a great starting point for manual transcription.",
  },
  {
    id: 7,
    q: "Can Veedchat create video annotations?",
    a: "Well no, but it helps you understand the content quickly so you can add annotations yourself.",
  },
  {
    id: 8,
    q: "Does Veedchat offer voice recognition features?",
    a: "Well no, but it excels in text-based summarization of video content.",
  },
];
