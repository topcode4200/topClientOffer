import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="banner-container">
      <div>
        <h1>TopClientOffer</h1>
        <p className="text-5xl">High Traffic Monetization CPA Network</p>
        <div>
          <button>Affiliate</button>
          <button>Advertiser</button>
        </div>
      </div>
      <div>
        <Image width={300} height={300} src="/banner.png" alt="" />
      </div>
    </div>
  );
};

export default Banner;
