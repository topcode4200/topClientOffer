import Image from "next/image";
import React from "react";

const WhatMakeUsDifferent = () => {
  const data = [
    {
      img: "/icons/top client offer one.png",
      h3: "1000+ Offers",
    },
    {
      img: "/icons/global.png",
      h3: "Global Coverage",
    },
    {
      img: "/icons/top client offer idea.png",
      h3: "In-house Technologies",
    },
    {
      img: "/icons/top client offer support.png",
      h3: "24/7 Support",
    },
    {
      img: "/icons/top client offer chart.png",
      h3: "Real Time stats",
    },
    {
      img: "/icons/top client offer finance.png",
      h1: "Fast Payment",
    },
  ];
  return (
    <div className="whatMakeUsDifferent-container container">
      <h1>What makes us different?</h1>
      <div className="item-wrapper">
        {data.map((item, i) => (
          <div key={i} className="item">
            <div className="flex justify-center mb-6">
              <Image width={80} height={80} src={item.img} alt="" />
            </div>
            <h3 className="font-semibold text-2xl text-center mb-2">
              {item.h3}
            </h3>
            <p>
              50+ Countries To Make Money In.We Are Providing You More Than 50+
              Goes To Monetize Your Traffics.We Have Good Converting And Best
              Offer In The World.You Can Choose By Your Wish And Make Profit
              With TopClientOffer.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatMakeUsDifferent;
