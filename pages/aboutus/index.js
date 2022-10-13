import React from "react";
import Image from "next/image";
import JoinUs from "../../components/common/JoinUs";
import NewsLetter from "../../components/common/NewsLetter";

const AboutUs = () => {
  return (
    <div className="aboutus-container">
      {/* main banner */}
      <div className="header">
        <div>
          <h2>About us</h2>
          <p>Everything you need to know about our values and achievements</p>
        </div>
      </div>

      {/* hero sections  */}
      <section className="hero-section">
        <p className="col-span-2">
          Welcome to the world of TopClientOffer. We are one of the leading CPA
          affiliate networks in the world. Our affiliate managers are well
          experienced and have wide knowledge on business as well as affiliate
          marketers. Through our various channels, we will help your business
          grow and connect you with the highest quality of traffic delivered.
          Topclientoffer is always ready to share with you our last exclusive
          offers. In fact, we are here for your business needs. We ensure your
          constant profit growth with us and help you to become a supper
          affiliate.We are glad to provide free training for affiliates and
          payouts weekly, bi- weekly or monthly and it depends on offer. We
          always prefer to introduce modern and innovative business ideas to
          fulfill the needs and requirements of our honorable partners. We
          ensure our partners unique service that will express our creativity,
          integrity, sincerity and professional attitude.So, if you are looking
          for an open business we will be an ideal platform for you.
        </p>
        <div>
          <Image src="/banner.png" width={500} height={500} alt="hero" />
        </div>
      </section>

      {/* join us and news letter components */}
      <JoinUs />
      <NewsLetter />
    </div>
  );
};

export default AboutUs;
