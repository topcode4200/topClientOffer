import {
  faCircleMinus,
  faCirclePlus,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Accordium from "../components/common/Accordium";
import NewsLetter from "../components/common/NewsLetter";

const FAQ = () => {
  return (
    <div className="faq-container">
      <div className="bg-image-wrapper header">
        <div className="space-y-3">
          <h2 className="text-5xl font-bold">FAQ</h2>
          <h3 className="text-4xl font-medium">Frequetly asked questions</h3>
          <p>Have questions? We’re here to help.</p>
          <div>
            <input type="text" placeholder="Search.." />
            <button>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </div>
      </div>

      <section className="faq-wrapper">
        <section className="space-y-4">
          <h2>General</h2>
          <Accordium
            heading="What is ClickDealer?"
            text="We are an online marketing agency specializing in CPA campaigns.
              Having been on the market since 2012 and having won multiple
              awards, we are proud to say we are one of the recognized leaders
              in the industry and one of the most reliable networks in the
              affiliate space."
          />
          <Accordium
            heading="What verticals and market niches does ClickDealer work in?"
            text="This is the second item's accordion body. It is hidden by default,
              until the collapse plugin adds the appropriate classes that we use
              to style each element. These classes control the overall
              appearance, as well as the showing and hiding via CSS transitions.
              You can modify any of this with custom CSS or overriding our
              default variables. It's also worth noting that just about any HTML
              can go within the though the transition does limit overflow."
          />
          <Accordium
            heading="What traffic types does ClickDealer accept?"
            text="This is the third item's accordion body. It is hidden by default,
              until the collapse plugin adds the appropriate classes that we use
              to style each element. These classes control the overall
              appearance, as well as the showing and hiding via CSS transitions.
              You can modify any of this with custom CSS or overriding our
              default variables. It's also worth noting that just about any HTML
              can go within the though the transition does limit overflow."
          />
          <Accordium
            heading="Does ClickDealer attend or exhibit at any trade shows?"
            text="This is the third item's accordion body. It is hidden by default,
              until the collapse plugin adds the appropriate classes that we use
              to style each element. These classes control the overall
              appearance, as well as the showing and hiding via CSS transitions.
              You can modify any of this with custom CSS or overriding our
              default variables. It's also worth noting that just about any HTML
              can go within the though the transition does limit overflow."
          />
        </section>
        <section>
          <h2>Getting Started</h2>
          <Accordium
            heading="Am I eligible for the ClickDealer affiliate program?"
            text="This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the though the transition does limit overflow."
          />
          <Accordium
            heading="How do I join ClickDealer as an Affiliate/Publisher?"
            text="This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the though the transition does limit overflow."
          />
          <Accordium
            heading="How long does it take for my application to be reviewed?"
            text="This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the though the transition does limit overflow."
          />
          <Accordium
            heading="How can I reach out to a support manager?"
            text="This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the though the transition does limit overflow."
          />
          <Accordium
            heading="I forgot my login/password, what should I do?"
            text="This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the though the transition does limit overflow."
          />
        </section>
        <section>
          <h2>Payment</h2>
          <Accordium
            heading="What payment options are available?"
            text="This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the though the transition does limit overflow."
          />
          <Accordium
            heading="What are ClickDealer's payment terms?"
            text="This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the though the transition does limit overflow."
          />
          <Accordium
            heading="How can I track my payments?"
            text="This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the though the transition does limit overflow."
          />
          <Accordium
            heading="What is ClickDealer’s referral program?"
            text="This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the though the transition does limit overflow."
          />
        </section>
      </section>

      <NewsLetter />
    </div>
  );
};

export default FAQ;
