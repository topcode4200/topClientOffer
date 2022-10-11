import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section>
      <div className="about-component">
        <h1>About Us</h1>
        <p>
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
      </div>
      <div className="work-component">
        <div className="col-span-2">
          <h1>How It Works</h1>
          <p className="mt-2 mb-5">
            Take advantage of all favorite dating offers in one link
          </p>
          <p>
            We are using affigate for tracking solution. Affigate is highly and
            advanced tracking in this market now.They have highly fraud
            detection system in their tracking.we can get report for each
            conversation immediately.So that we can know the conversation fraud
            or not.They are using fraud marks by detect fraud
          </p>
        </div>
        <Image width={400} height={300} src="/howItWork.png" alt="" />
      </div>
    </section>
  );
};

export default About;
