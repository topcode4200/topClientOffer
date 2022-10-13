import React from "react";

const JoinUs = () => {
  return (
    <section className="join-component">
      <h2>JOIN US!</h2>
      <div className="wrapper-container">
        <div className=" lg:max-w-sm my-10 ">
          <h2>AFFILIATE</h2>
          <p className="my-4">
            Join Us to get exclusive direct offers & make most out of your
            traffics.Most converting and highest payout offer in the
            market.So,Join us today
          </p>
          <button className="bg-white text-secondary">JOIN NOW!</button>
        </div>
        <div className="lg:max-w-sm text-center">
          <h2>ADVERTISER</h2>
          <p className="my-4">
            A performance based network of top affiliates which understands your
            product and deliver it to perfect target audience.
          </p>
          <button className="bg-primary text-white">SIGN UP!</button>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
