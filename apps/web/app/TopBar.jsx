"use client";

import { useState } from "react";

const ArrowLeft = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <path
      d="M15.5 19L8.5 12L15.5 5"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <path
      d="M8.5 19L15.5 12L8.5 5"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function TopBar() {
  const messages = [
    {
      content: "Shop more, save more! Free shipping on orders above ₹999",
      font: "jakarta-font",
    },
    {
      font: "jakarta-font",
      content: (
        <>
          <span className="font-bold">Flat 30%</span>{" "}
          <span className="font-semibold">off on</span>{" "}
          <span className="font-normal">winter collection</span>
        </>
      ),
    },
  ];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const change = (type) => {
    setFade(true);
    setTimeout(() => {
      setIndex((prev) =>
        type === "next"
          ? (prev + 1) % messages.length
          : (prev - 1 + messages.length) % messages.length
      );
      setFade(false);
    }, 180);
  };

  return (
    <div
      className="relative w-full min-h-[36px] py-[6px] overflow-hidden"
      style={{ backgroundColor: "#7a12fa", color: "#ffffff" }}
    >
      {/* GRAIN */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
          opacity: 0.12,
        }}
      />

      <div className="relative z-10 flex items-center justify-between px-2 gap-2">
        {/* LEFT */}
        <button
          onClick={() => change("prev")}
          className="flex items-center justify-center hover:opacity-70 flex-shrink-0 w-8 h-8"
        >
          <ArrowLeft />
        </button>

        {/* TEXT */}
        <div className="flex items-center justify-center flex-1 px-4 min-w-0">
          <span
            className={`
  transition-opacity duration-200
  text-[14px] leading-relaxed
  text-center
  ${fade ? "opacity-0" : "opacity-100"}
  ${messages[index].font}
`}
          >
            {messages[index].content}
          </span>
        </div>

        {/* RIGHT */}
        <button
          onClick={() => change("next")}
          className="flex items-center justify-center hover:opacity-70 flex-shrink-0 w-8 h-8"
        >
          <ArrowRight />
        </button>
      </div>
    </div>
  );
}
