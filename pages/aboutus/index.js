import React from "react";
import Image from "next/image";
import JoinUs from "../../components/common/JoinUs";
import NewsLetter from "../../components/common/NewsLetter";

const AboutUs = () => {
  return (
    <div>
      {/* main banner */}
      <header
        style={{
          backgroundImage: "url('/about banner top client offer.png')",
          width: "full",
          height: "500px",
        }}
        class=" text-white font-bold bg-no-repeat bg-cover"
      >
        <div class="mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a class="flex items-center justify-center mb-4 md:mb-0">
            <Image
              src="/png-sere 2.png"
              width="200px"
              height="50px"
              layout="fixed"
              alt="hero"
            />
          </a>
          <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a class="mr-5 hover:text-black-900 uppercase">Home</a>
            <a class="mr-5 hover:text-black-900 uppercase">About Us </a>
            <a class="mr-5 hover:text-black-900 uppercase">Affiliate</a>
            <a class="mr-5 hover:text-black-900 uppercase">ADVERTISER</a>
            <a class="mr-5 hover:text-black-900 uppercase">NEWS FEED</a>
          </nav>
          <div className="flex gap-3">
            <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded mt-4 md:mt-0">
              Login{" "}
            </button>
            <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded mt-4 md:mt-0">
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* hero sections  */}
      <section class="text-black-300 body-font ">
        <div class="mx-auto flex py-24 md:flex-row flex-col justify-center items-center px-24">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center justify-center text-center">
            <p class="mb-8 text-2xl leading-9 px-2 text-justify">
              Welcome to the world of TopClientOffer. We are one of the leading
              CPA affiliate networks in the world. Our affiliate managers are
              well experienced and have wide knowledge on business as well as
              affiliate marketers. Through our various channels, we will help
              your business grow and connect you with the highest quality of
              traffic delivered. Topclientoffer is always ready to share with
              you our last exclusive offers. In fact, we are here for your
              business needs. We ensure your constant profit growth with us and
              help you to become a supper affiliate.We are glad to provide free
              training for affiliates and payouts weekly, bi- weekly or monthly
              and it depends on offer. We always prefer to introduce modern and
              innovative business ideas to fulfill the needs and requirements of
              our honorable partners. We ensure our partners unique service that
              will express our creativity, integrity, sincerity and professional
              attitude.So, if you are looking for an open business we will be an
              ideal platform for you.
            </p>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              src="/banner.png"
              width="500px"
              height="500px"
              layout="fixed"
              alt="hero"
            />
          </div>
        </div>
      </section>

      {/* join us and news letter components */}
      <JoinUs />
      <NewsLetter />
    </div>
  );
};

export default AboutUs;
