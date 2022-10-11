import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="banner-container">
      <div>
        <h1>TopClientOffer</h1>
        <p className="md:text-2xl lg:text-4xl xl:text-5xl">
          High Traffic Monetization CPA Network
        </p>
        <div className="button-container">
          <a
            href="https://affiliate.topclientoffer.com/auth/affiliate"
            target="_black"
          >
            <span>Affiliate</span>
          </a>
          <a
            href="https://affiliate.topclientoffer.com/auth/advertiser"
            target="_black"
          >
            Advertiser
          </a>
        </div>
      </div>
      <div>
        <Image
          width={350}
          height={350}
          className="w-80 h-80"
          src="/banner.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
